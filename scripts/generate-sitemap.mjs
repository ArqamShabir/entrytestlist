import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BASE_DOMAIN = 'https://entrytestlist.com';
const WORDPRESS_API = 'https://lightgoldenrodyellow-wildcat-247174.hostingersite.com/wp-json/wp/v2';
const STATIC_ROUTES = [
  { path: '/', priority: 1.0 },
  { path: '/tests', priority: 0.9 },
  { path: '/blog', priority: 0.9 },
  { path: '/contact', priority: 0.5 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-of-service', priority: 0.3 },
  { path: '/cookie-policy', priority: 0.3 },
  { path: '/disclaimer', priority: 0.3 }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_PATH = path.resolve(__dirname, '../public/sitemap.xml');

const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().split('T')[0];
};

const buildUrlEntry = ({ loc, lastmod, priority, changefreq = 'weekly' }) => {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>'
  ].filter(Boolean).join('\n');
};

const fetchCategoryId = async (slug) => {
  const response = await fetch(`${WORDPRESS_API}/categories?slug=${slug}&per_page=1&_fields=id`);
  if (!response.ok) {
    throw new Error(`Failed to resolve category '${slug}': ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  if (!Array.isArray(data) || data.length === 0) {
    console.warn(`Category '${slug}' not found – skipping related sitemap entries.`);
    return null;
  }
  return data[0].id;
};

const fetchPostsByCategory = async (categorySlug, routePrefix, priority) => {
  const categoryId = await fetchCategoryId(categorySlug);
  if (!categoryId) return [];

  const posts = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `${WORDPRESS_API}/posts?per_page=${perPage}&page=${page}&categories=${categoryId}&_fields=slug,modified`; 
    const response = await fetch(url);

    if (response.status === 400) {
      break; // No more pages
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch posts for category '${categorySlug}' page ${page}: ${response.status} ${response.statusText}`);
    }

    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) {
      break;
    }

    batch.forEach((post) => {
      posts.push({
        loc: `${BASE_DOMAIN}/${routePrefix}/${post.slug}`,
        lastmod: formatDate(post.modified),
        priority
      });
    });

    if (batch.length < perPage) {
      break;
    }

    page += 1;
  }

  return posts;
};

const generateSitemap = async () => {
  try {
    const urls = [...STATIC_ROUTES.map(({ path, priority }) => ({
      loc: `${BASE_DOMAIN}${path}`,
      lastmod: null,
      priority
    }))];

    const [testPosts, blogPosts] = await Promise.all([
      fetchPostsByCategory('tests', 'tests', 0.8),
      fetchPostsByCategory('blog', 'blog', 0.7)
    ]);

    urls.push(...testPosts, ...blogPosts);

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls.map(buildUrlEntry),
      '</urlset>'
    ].join('\n');

    fs.writeFileSync(OUTPUT_PATH, `${xml}\n`, 'utf8');
    console.log(`Sitemap generated with ${urls.length} URLs at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exitCode = 1;
  }
};

generateSitemap();
