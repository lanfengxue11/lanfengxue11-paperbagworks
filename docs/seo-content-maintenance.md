# SEO / GEO content maintenance

Build with `npm run build` (or `pnpm run build`) and deploy `dist/`. The build now runs Vite followed by `scripts/prerender.mjs`, which emits the initial React view as HTML and maps imported images through Vite's manifest. The browser hydrates the same view. Missing asset mappings fail the build.

The first batch covers seven pages: homepage, products hub, kraft category, gift category, bread scenario, luxury gift scenario and kraft bags with handles. New categories live in `public/kraft-paper-bags.html` and `public/paper-gift-bags.html`, sharing `public/assets/category-pages.css`.

Maintain deployed static pages in `public/` and keep matching legacy root copies synchronized. The older Python page generators contain earlier copy and claims: do not regenerate without comparing their output to the maintained public pages. Keep visible content, internal links, canonicals and sitemap aligned. Production extensionless URLs depend on `vercel.json`; `.html` links remain compatible with the static build.

Only use material, certification, price, capacity, customer and delivery claims supported by product and business evidence. Homepage aggregate price offers were removed because no matching visible offer substantiated them. Other inherited certification, review, customer and lead-time claims require business verification. New category structured data represents visible collections and breadcrumbs.

Verification: build; seven routes at desktop/mobile widths; missing images/resources; browser errors; static homepage without JavaScript; all 22 sitemap destinations. Local checks do not establish production Core Web Vitals or Google indexing.
