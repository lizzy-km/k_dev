import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY??'re_123');


export async function POST(req: Request, res: NextApiResponse) {


    const reqUrl = decodeURIComponent(req.url).split("+").join(" ");

    const reqData: {
        from: string;
        subject: string;
        html: string;
        to: string;
    } = reqUrl.search("data=") ? JSON.parse(reqUrl.split("data=")[1]) : {};


    try {

        const { data, error } = await resend.emails.send({
            from: reqData.from,
            subject: reqData.subject,
            html: reqData.html,
            to: reqData.to

        })


        if (error) {
            return Response.json({ error: error }, { status: error.statusCode || 500 })
        }

        return Response.json({ message: "Email sent successfully", data }, { status: 200 });



    } catch (error: any) {

        return Response.json(error, { status: 500 });


    }


};