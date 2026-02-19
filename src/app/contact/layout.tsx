
import type {Metadata} from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: "Kaung's Contact | React Developer",
  description: 'Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
         <meta property="og:image" content="https://quix-dev.online/kaungMyatSoe_p.png"></meta>
        <meta property="og:site_name" content="Kaung Myat Soe's Portfolio"></meta>
        <meta property="og:title" content="Kaung Myat Soe's Portfolio | React Developer"></meta>
        <meta property="og:description" content="Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions."></meta>
        <meta property="og:url" content="https://quix-dev.online"></meta>
        <meta property="twitter:description" content="Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions."></meta>
        <meta property="twitter:title" content="Kaung Myat Soe's Portfolio | React Developer"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:image" content="https://quix-dev.online/kaungMyatSoe_p.png"></meta>
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
