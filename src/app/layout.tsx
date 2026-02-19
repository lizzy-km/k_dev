
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Kaung Myat Soe's Portfolio | React Developer",
  description: 'Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions.',
  keywords: ['Kaung Myat Soe', 'React Developer', 'Portfolio', 'HRMS', 'Fintech', 'Web Development','kaung myat soe','react developer','front-end developer','software engineer','developer portfolio','quix','dev','kaungmyatsoe2k21','kaungmyatsoe','kaung myat soe portfolio','kaung myat soe react developer','kaung myat soe hrms','kaung myat soe fintech'],
  authors: [{ name: 'Kaung Myat Soe', url: 'https://quix-dev.online' }],
  creator: 'Kaung Myat Soe',
  openGraph: {
    title: "Kaung Myat Soe's Portfolio | React Developer",
    description: 'Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions.',
    url: 'https://quix-dev.online',
    siteName: "Kaung Myat Soe's Portfolio",  
    
    images: [
      {
        url: '/kaungMyatSoe_p.png',
        width: 1200,
        height: 630,
        alt: "Kaung Myat Soe's Portfolio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kaung Myat Soe's Portfolio | React Developer",
    description: 'Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions.',
    images: ['/kaungMyatSoe_p.png'],
  },
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
        <script src="https://techo-ai-chatbot-omega.vercel.app/chatbot.umd.js">
        <meta property="og:image" content="/kaungMyatSoe_p.png"></meta>
        <meta property="og:site_name" content="Kaung Myat Soe's Portfolio"></meta>
        <meta property="og:title" content="Kaung Myat Soe's Portfolio | React Developer"></meta>
        <meta property="og:description" content="Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions."></meta>
        <meta property="og:url" content="https://quix-dev.online"></meta>
        <meta property="twitter:description" content="Portfolio of Kaung Myat Soe -  React Developer specializing in HRMS and Fintech solutions."></meta>
        <meta property="twitter:title" content="Kaung Myat Soe's Portfolio | React Developer"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:image" content="/kaungMyatSoe_p.png"></meta>
        </script>

    
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
