export function GET({ site }) {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}
