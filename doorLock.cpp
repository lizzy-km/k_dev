#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Keypad.h>
#include <Servo.h>

// Ultrasonic Pins
const int trigPin = 11;
const int echoPin = 12;

LiquidCrystal_I2C lcd(0x27, 16, 2);

const byte ROWS = 4;
const byte COLS = 4;
char keys[ROWS][COLS] = {
    {'1', '2', '3', 'A'}, {'4', '5', '6', 'B'}, {'7', '8', '9', 'C'}, {'*', '0', '#', 'D'}};
byte rowPins[ROWS] = {9, 8, 7, 6};
byte colPins[COLS] = {5, 4, 3, 2};
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

Servo myLock;
String inputCode = "";
String secretCode = "7784";
int err_count = 0; // Added semicolon

// Variables for Tracking
long duration;
int distance;
int safetyDistance = 60; // cm
bool isUserPresent = false;
int prevDistance = 0;
int threshold = 5; // Ignore small jitters (1-2cm)

void setup()
{
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);

    myLock.attach(10);
    myLock.write(0);

    lcd.init();
    lcd.backlight();

    Serial.begin(9600);
}

void loop()
{
    char key = keypad.getKey();

    checkUser();

    if (key)
    {
        if (key == '#')
        {
            resetSystem();
        }
        else
        {
            if (inputCode.length() == 0)
                lcd.clear();

            inputCode += key;
            lcd.setCursor(inputCode.length() - 1, 1);
            lcd.print("*");

            if (inputCode.length() == 4)
            {
                delay(500);
                lcd.clear();
                lcd.print("Checking...");
                delay(1000);
                lcd.clear();

                if (inputCode == secretCode)
                {
                    openDoor();
                }
                else
                {
                    handleFailedAttempt();
                }
            }
        }
    }
}

void checkUser()
{

    // 1. Constant Distance Tracking
    distance = getDistance();

    // Serial.prinln(prevDistance);
    //  Serial.println(distance);

    if (abs(distance - prevDistance) > threshold)
    {

        if (!isUserPresent)
        {
            delay(1000);
            inputCode = "";  // clear input
            myLock.write(0); // Lock the door
            lcd.clear();
            lcd.print("LOCKED:Unable To");
            lcd.setCursor(0, 1);
            lcd.print("Detect USER!!");
        }

        // 2. Logic: If someone enters the 50cm zone
        if (distance < safetyDistance && !isUserPresent)
        {
            delay(2000);
            isUserPresent = true;
            lcd.clear();
            lcd.print("USER DETECTED");
            lcd.setCursor(0, 1);
            lcd.print("DISTANCE: ");
            lcd.print(distance);
            lcd.print("cm");
            delay(1000); // Let them see the distance
            showIdleMessage();
        }

        // 3. Logic: If the person leaves the zone
        if (distance > safetyDistance && isUserPresent)
        {
            delay(1500);
            isUserPresent = false;
        }

        prevDistance = distance;

        delay(200); // Small delay to make the LCD readable
    }
}

void showIdleMessage()
{

    lcd.clear();
    lcd.print("SAFE SYSTEM");
    lcd.setCursor(0, 1);
    lcd.print("ENTER CODE:");
}

// Function to calculate distance
int getDistance()
{

    digitalWrite(trigPin, LOW);
    delayMicroseconds(20);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(20);
    digitalWrite(trigPin, LOW);

    duration = pulseIn(echoPin, HIGH);

    return duration * 0.034 / 2;
}

void openDoor()
{
    myLock.write(180); // Standard servos max out at 180
    err_count = 0;
    lcd.print("ACCESS GRANTED");
    lcd.setCursor(0, 1);
    lcd.print("WELCOME HOME");
    inputCode = "";
}

void closeDoor()
{
    myLock.write(0); // Lock the door
    showIdleMessage();
}

void resetSystem()
{
    myLock.write(0); // Ensure door is locked
    inputCode = "";
    err_count = 0;
    myLock.write(0); // Ensure door is locked
    showIdleMessage();
}

void lockout()
{
    lcd.clear();
    lcd.print("LOCKED FOR 3MIN");
    for (int i = 180; i > 0; i--)
    {
        lcd.setCursor(0, 1);
        lcd.print("Wait: ");
        lcd.print(i);
        lcd.print("s   ");
        delay(1000);
    }
    resetSystem();
}

void handleFailedAttempt()
{
    err_count += 1;

    if (err_count >= 3)
    { // Trigger lockout on 3rd fail
        lcd.print("LOCKED FOR 3MIN");
        // Simple countdown loop
        for (int i = 180; i > 0; i--)
        {
            lcd.setCursor(0, 1);
            lcd.print("Wait: ");
            lcd.print(i);
            lcd.print("s   ");
            delay(1000);
        }
        err_count = 0;
        inputCode = "";
        showIdleMessage();
    }
    else
    {
        lcd.print("WRONG CODE!");
        lcd.setCursor(0, 1);
        lcd.print("Try: ");
        lcd.print(3 - err_count);
        delay(2000);
        inputCode = "";
        showIdleMessage();
    }
}