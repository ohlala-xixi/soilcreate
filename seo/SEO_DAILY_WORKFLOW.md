# SoilCreate SEO Daily Workflow

This document is the operating checklist for maintaining and improving SoilCreate SEO after launch.

Production site:

- Main domain: https://soilcreate.com
- WWW domain: https://www.soilcreate.com
- Sitemap: https://soilcreate.com/sitemap.xml
- GitHub repository: https://github.com/ohlala-xixi/soilcreate
- Google Search Console property: soilcreate.com

## 1. Daily Checklist

Spend 15-30 minutes per day. Do not change everything at once. Small, consistent improvements are better for a new site.

### 1.1 Check The Site Is Healthy

Open these URLs:

- https://soilcreate.com
- https://www.soilcreate.com
- https://soilcreate.com/sitemap.xml
- https://soilcreate.com/products/
- https://soilcreate.com/contact/

Confirm:

- Homepage loads as the full SoilCreate website, not a blank GitHub page.
- Sitemap shows XML and is not 404.
- Header navigation works.
- Product pages open.
- Contact form opens and submits correctly when you test it.

### 1.2 Check GitHub Actions

Open:

- https://github.com/ohlala-xixi/soilcreate/actions

Confirm the latest workflow is green:

- Deploy VitePress site to Pages

If it is red:

- Open the failed workflow.
- Screenshot the failed step.
- Do not keep pushing repeatedly before the cause is understood.

### 1.3 Check Google Search Console

Open Google Search Console:

- https://search.google.com/search-console

Daily checks:

- Indexing > Pages
- Indexing > Sitemaps
- Performance > Search results
- URL Inspection for one important page

For a new site, it is normal to see "Processing data" for the first 1-2 days.

### 1.4 Request Indexing For Key Pages

Use the URL inspection box at the top of Search Console.

Start with these URLs:

- https://soilcreate.com/
- https://soilcreate.com/products/
- https://soilcreate.com/contact/
- https://soilcreate.com/about/
- https://soilcreate.com/case-study/
- https://soilcreate.com/products/geotechnical-monitoring/inclinometer-sensor/
- https://soilcreate.com/products/geotechnical-monitoring/piezometer-sensor/

If Google says the URL is not on Google, click:

- Request indexing

Do not submit too many URLs in one day. For a new site, 3-5 important URLs per day is enough.

### 1.5 Record What Changed

Keep a simple log:

- Date
- Page changed
- What was changed
- Why it was changed
- Whether indexing was requested

Example:

```text
2026-05-26
Updated /products/geotechnical-monitoring/inclinometer-sensor/
Replaced placeholder image, improved title and imageAlt.
Requested indexing in Google Search Console.
```

## 2. Weekly Checklist

Do this once per week.

### 2.1 Review Search Console Performance

Look at:

- Total clicks
- Total impressions
- Average CTR
- Average position
- Queries
- Pages

Questions to ask:

- Which product terms are getting impressions?
- Which pages have impressions but low clicks?
- Which pages have no impressions?
- Which country traffic is appearing?

If a page has impressions but low CTR, improve:

- Page title
- Meta description
- First screen wording
- Product image

### 2.2 Review Indexed Pages

Open:

- Indexing > Pages

Check:

- Indexed pages
- Not indexed pages
- Crawl errors
- Duplicate without user-selected canonical
- Discovered, currently not indexed
- Crawled, currently not indexed

For important pages that are not indexed:

- Improve content depth.
- Add internal links to that page.
- Request indexing again after improvement.

### 2.3 Add Or Improve One Content Asset

Each week, improve at least one of:

- One product page
- One case study
- One product image
- One datasheet PDF
- One internal link cluster
- One page title/meta description

## 3. Monthly Checklist

Do this once per month.

- Replace more placeholder images.
- Add one real case study.
- Add or improve one product datasheet.
- Review all product titles and descriptions.
- Check that sitemap still works.
- Check that GitHub Actions still deploys successfully.
- Review GA4/GTM lead events.
- Review Search Console queries and plan new product content.

## 4. Important URLs And Tools

### 4.1 Public Website

- Homepage: https://soilcreate.com
- Product catalog: https://soilcreate.com/products/
- About: https://soilcreate.com/about/
- Contact: https://soilcreate.com/contact/
- Case study listing: https://soilcreate.com/case-study/
- Sitemap: https://soilcreate.com/sitemap.xml

### 4.2 Local Development

Local dev server:

- http://127.0.0.1:5174/

Run locally:

```bash
npm run dev -- --host 127.0.0.1
```

Build before publishing:

```bash
npm run build
```

Deploy:

```bash
git add .
git commit -m "Update site content"
git push
```

GitHub Actions will deploy automatically after `git push`.

### 4.3 Generators

Product Markdown generator:

- Live after deploy: https://soilcreate.com/tools/product-md-generator.html
- Source file: `docs/public/tools/product-md-generator.html`

Case Study Markdown generator:

- Live after deploy: https://soilcreate.com/tools/case-study-md-generator.html
- Source file: `docs/public/tools/case-study-md-generator.html`

Use the generators to create Markdown content, then place the generated `.md` file into the correct folder.

## 5. Where To Edit Content

Only edit source files, not generated files.

### 5.1 Main Pages

Homepage:

- Page entry: `docs/index.md`
- Main design component: `docs/.vitepress/theme/components/HomePage.vue`

About page:

- Page entry: `docs/about.md`
- Main design component: `docs/.vitepress/theme/components/AboutPage.vue`

Contact page:

- Page entry: `docs/contact.md`
- Main design component: `docs/.vitepress/theme/components/ContactPage.vue`
- Contact form component: `docs/.vitepress/theme/components/ContactInquiryForm.vue`

Case study listing page:

- Page entry: `docs/case-study.md`
- Main design component: `docs/.vitepress/theme/components/CaseStudyPage.vue`

Product catalog page:

- Page entry: `docs/products/index.md`
- Product list component: `docs/.vitepress/theme/components/ProductsList.vue`
- Product database: `docs/.vitepress/theme/data/products.json`

### 5.2 Product Detail Pages

Product page template:

- `docs/.vitepress/theme/components/ProductLayout.vue`

Existing product Markdown files:

- `docs/products/geotechnical-monitoring/inclinometer-sensor.md`
- `docs/products/geotechnical-monitoring/piezometer-sensor.md`
- `docs/products/geotechnical-monitoring/vibration-monitoring-station.md`

When adding a new product:

1. Use the product generator.
2. Save the generated `.md` under `docs/products/geotechnical-monitoring/`.
3. Add or update product listing data in `docs/.vitepress/theme/data/products.json`.
4. Put images under `docs/public/images/products/`.
5. Put PDFs under `docs/public/specs/`.

### 5.3 Case Study Pages

Case study detail template:

- `docs/.vitepress/theme/components/CaseStudyLayout.vue`

Existing case study Markdown files:

- `docs/solutions/sydney-metro-tunnel.md`
- `docs/solutions/norway-hydro-dam.md`

When adding a new case study:

1. Use the case study generator.
2. Save the generated `.md` under `docs/solutions/`.
3. Link the case study from relevant products using `relatedCaseStudies`.
4. If it should appear on the case study listing page, update `docs/.vitepress/theme/components/CaseStudyPage.vue`.

## 6. Image And File Paths

### 6.1 Current Hero And Background Images

Home hero background:

- Website path: `/images/hero/home-hero.svg`
- Source file: `docs/public/images/hero/home-hero.svg`

About hero background:

- Website path: `/images/hero/about-hero.svg`
- Source file: `docs/public/images/hero/about-hero.svg`

Case Study hero background:

- Website path: `/images/hero/case-study-hero.svg`
- Source file: `docs/public/images/hero/case-study-hero.svg`

About middle image:

- Website path: `/images/about/facility.svg`
- Source file: `docs/public/images/about/facility.svg`

Trust CTA background:

- Website path: `/images/factory-bridge-placeholder.svg`
- Source file: `docs/public/images/factory-bridge-placeholder.svg`

Header logo icon:

- Website path: `/images/logo/soilcreate-icon.png`
- Source file: `docs/public/images/logo/soilcreate-icon.png`

Product placeholder:

- Website path: `/images/product-placeholder.svg`
- Source file: `docs/public/images/product-placeholder.svg`

### 6.2 Recommended New Folders

Create these folders as the site grows:

```text
docs/public/images/products/
docs/public/images/solutions/
docs/public/images/factory/
docs/public/images/certificates/
docs/public/specs/
```

Recommended product image path:

```text
docs/public/images/products/mems-in-place-inclinometer-sensor.jpg
```

Use in Markdown:

```yaml
image: /images/products/mems-in-place-inclinometer-sensor.jpg
imageAlt: MEMS in-place inclinometer sensor for tunnel and slope monitoring
```

Recommended case study image path:

```text
docs/public/images/solutions/sydney-metro-tunnel-monitoring.jpg
```

Use in Markdown:

```yaml
image: /images/solutions/sydney-metro-tunnel-monitoring.jpg
imageAlt: Tunnel excavation monitoring with in-place inclinometers and piezometers
```

Recommended PDF path:

```text
docs/public/specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf
```

Use in Markdown:

```yaml
specPdf: /specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf
```

## 7. Product Markdown Fields

Every product page should have these fields:

```yaml
---
layout: product
title: "MEMS In-Place Inclinometer Sensor"
description: "Automated MEMS in-place inclinometer for slope, tunnel, dam, and excavation deformation monitoring."
category: "Inclinometers"
subcategory: "IPI"
model: "SC-IPI-100"
image: "/images/products/mems-in-place-inclinometer-sensor.jpg"
imageAlt: "MEMS in-place inclinometer sensor for slope and tunnel deformation monitoring"
specPdf: "/specs/sc-ipi-100-in-place-inclinometer-datasheet.pdf"
head:
  - - meta
    - name: keywords
      content: "MEMS in-place inclinometer, IPI sensor, slope monitoring inclinometer, tunnel deformation sensor"
features:
  - "Automated borehole deformation monitoring for long-term projects"
applications:
  - "Slope stability monitoring"
specs:
  - label: "Product type"
    value: "In-place inclinometer chain"
related:
  - label: "4-20mA Piezometer Sensor"
    href: "/products/geotechnical-monitoring/piezometer-sensor"
    sku: "SC-PZ-420"
relatedCaseStudies:
  - title: "Sydney Metro Underground Excavation"
    href: "/solutions/sydney-metro-tunnel"
    category: "Tunnels"
    summary: "Automated deformation and pore pressure monitoring during tunnel excavation."
    image: "/images/solutions/sydney-metro-tunnel-monitoring.jpg"
    imageAlt: "Tunnel excavation monitoring case study"
---

Write a useful product overview here. Include project fit, monitoring target, output signal, installation notes, and RFQ information.
```

SEO priority for products:

- Specific product name
- Monitoring application
- Output signal or technology
- Buyer use case
- Real imageAlt
- Related product links
- Related case study links

## 8. Case Study Markdown Fields

Every case study should have:

```yaml
---
layout: case-study
title: "Sydney Metro Underground Excavation"
description: "Automated inclinometer and piezometer monitoring for tunnel excavation settlement control."
category: "Tunnels"
location: "Sydney, Australia"
projectType: "Underground excavation monitoring"
monitoringScope: "Ground movement, pore water pressure, and structural stability"
image: "/images/solutions/sydney-metro-tunnel-monitoring.jpg"
imageAlt: "Tunnel excavation monitoring with SoilCreate geotechnical instruments"
challenge: "Describe the engineering risk and monitoring problem."
solution: "Describe the SoilCreate instruments and monitoring workflow."
result: "Describe the outcome in measurable or practical terms."
metrics:
  - value: "24/7"
    label: "Automated monitoring"
---
```

Good case studies should answer:

- What project was this?
- What was the risk?
- Which instruments were used?
- How was data collected?
- What improved because of the monitoring?
- Which product pages should this case study link to?

## 9. SEO Editing Rules

### 9.1 Titles

Good:

```text
MEMS In-Place Inclinometer Sensor for Slope and Tunnel Monitoring
```

Weak:

```text
Inclinometer Sensor
```

### 9.2 Meta Descriptions

Good descriptions:

- 140-160 characters when possible.
- Mention product type, application, and buyer value.
- Avoid vague marketing language.

Example:

```text
SoilCreate MEMS in-place inclinometer sensor for automated slope, tunnel, dam, and excavation deformation monitoring with telemetry integration.
```

### 9.3 Image Alt Text

Good:

```text
MEMS in-place inclinometer sensor for slope and tunnel deformation monitoring
```

Weak:

```text
product image
```

### 9.4 Internal Links

Each product page should link to:

- Product catalog
- 1-3 related products
- 1-2 related case studies
- Contact or inquiry form

Each case study should link back to:

- Related product pages
- Product catalog
- Contact page

## 10. What You Should Not Do

Do not edit these generated folders:

- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`
- `node_modules/`

Do not commit:

- `node_modules/`
- `docs/.vitepress/dist/`
- Large raw videos
- Duplicate image sets
- Private customer documents
- Unapproved certificates
- Fake case studies presented as real

Do not change these unless you know exactly why:

- `docs/.vitepress/config.mjs`
- `.github/workflows/deploy.yml`
- `scripts/generate-sitemap.mjs`
- `docs/public/CNAME`
- `docs/public/robots.txt`

Do not use:

- Public final prices on product pages
- Keyword stuffing
- Copied competitor text
- Random image filenames like `IMG_001.jpg`
- Images without `imageAlt`
- Broken PDF links
- Fake certifications
- Multiple versions of the same URL as separate canonical pages

Do not remove:

- GTM script
- Formspree endpoint
- Sitemap generation script
- CNAME file
- Product layout fields unless the template is updated too

## 11. Publishing Workflow

After editing source files:

```bash
npm run build
```

If build succeeds:

```bash
git status --short
git add .
git commit -m "Update SEO content"
git push
```

Then check:

- https://github.com/ohlala-xixi/soilcreate/actions

Wait until the deployment workflow is green.

After deployment:

- Open the updated page.
- Hard refresh.
- Check sitemap if a new page was added.
- Request indexing in Google Search Console for the updated URL.

## 12. Priority Work For SoilCreate

Start with this order:

1. Replace placeholder product images.
2. Replace placeholder case study images.
3. Add real datasheet PDFs.
4. Improve inclinometer product page.
5. Improve piezometer product page.
6. Improve vibration monitoring product page.
7. Add 2-3 real case studies.
8. Add internal links between products and case studies.
9. Improve homepage product cards with real categories.
10. Review Search Console queries after 2-4 weeks.

## 13. Quick Daily SEO Routine

Use this condensed checklist:

```text
Daily
[ ] Check site loads: https://soilcreate.com
[ ] Check sitemap: https://soilcreate.com/sitemap.xml
[ ] Check latest GitHub Action is green
[ ] Check Search Console indexing status
[ ] Inspect 1 important URL
[ ] Request indexing for 1-3 improved pages
[ ] Improve one title, description, imageAlt, or internal link
[ ] Record what changed

Weekly
[ ] Review Search Console queries
[ ] Review pages with impressions but low clicks
[ ] Replace one placeholder asset
[ ] Improve one product or case study
[ ] Add one internal link cluster

Monthly
[ ] Add one real case study
[ ] Add or update one datasheet
[ ] Review all priority product pages
[ ] Check GA4/GTM lead events
```
