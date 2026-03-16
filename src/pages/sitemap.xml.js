import { getCollection } from 'astro:content';

export async function GET(context) {
  const base = context.site;
  const blog = await getCollection('blog');

  // Static pages with optional metadata
  const staticPages = [
    { url: `${base}/`, changefreq: 'weekly', priority: 1.0 },
    { url: `${base}/about/`, changefreq: 'yearly', priority: 0.5 },
    { url: `${base}/blog/`, changefreq: 'daily', priority: 0.8 },
    { url: `${base}/tags/`, changefreq: 'weekly', priority: 0.6 },
  ];

  // Dynamic blog posts
  const blogPages = blog.map((post) => ({
    url: `${base}/blog/${post.id}/`,
    lastmod: post.data.updated ?? post.data.pubDate,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const urls = [...staticPages, ...blogPages];

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (entry) => `
        <url>
          <loc>${entry.url}</loc>
          ${entry.lastmod ? `<lastmod>${new Date(entry.lastmod).toISOString()}</lastmod>` : ''}
          ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
          ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
        </url>`
        )
        .join('')}
    </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
