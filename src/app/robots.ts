import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies to all search engines (Google, Bing, etc.)
      allow: '/',     // Allow them to crawl your entire portfolio
      disallow: [
        '/private/',  // Disallow any private folders if you have them
        '/admin/',    // Common practice to hide admin or login routes
      ],
    },
    // Replace with your actual domain
    sitemap: 'https://quix-dev.online/sitemap.xml', 
  };
}