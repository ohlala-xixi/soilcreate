# SoilCreate SoilCreate-Style Product Import Rule

This rule is used when a product page should keep the original SoilCreate-style HTML product-page structure instead of the original SoilCreate Markdown product uploader.

## When To Use

Use this rule when:

- The source material is a finished HTML prototype from the SoilCreate product folder.
- The page should keep the original SoilCreate product-story structure: hero, model line, key metrics, diagrams, SVG explanations, overview, working principle, data output, features, applications, and specifications.
- The product belongs to the geotechnical monitoring product center and should appear in the `/products/` catalog.

Do not use this rule when:

- You only need a simple product Markdown page using `layout: product`.
- The product needs the original SoilCreate ProductLayout with Markdown body editing only.

## Files To Update

Product data:

- `docs/.vitepress/theme/data/importedProducts.js`
- `docs/.vitepress/theme/data/soilcreateProductPages.js`

Product catalog:

- `docs/.vitepress/theme/data/products.json`

Product page shell:

- `docs/products/{category-folder}/{product-slug}.md`

Product images:

- `docs/public/images/products/{product-slug}/`

Template:

- `docs/.vitepress/theme/components/ImportedProductPage.vue`

Style layer:

- `docs/.vitepress/theme/style.css`
- Section marker: `Imported SoilCreate product pages recolored for SoilCreate`

## Required Data Fields

Each product in `importedProducts.js` should include:

- `title`
- `seoTitle`
- `description`
- `category`
- `subcategory`
- `model`
- `image`
- `imageAlt`
- `lead`
- `overviewHeading`
- `overview`
- `metrics`
- `features`
- `applications`
- `specs`
- Optional `downloads`
- Optional `relatedProducts`
- Optional `relatedSolutions`

Each product in `soilcreateProductPages.js` stores the extracted original HTML body from the SoilCreate page.

## SoilCreate HTML Import Rules

When importing a SoilCreate product page:

1. Extract only the product body inside `<main id="main-content">`.
2. Remove the original SoilCreate header and footer.
3. Remove the original SoilCreate CTA section.
4. Remove the original SoilCreate related-products section.
5. Keep the original hero, diagrams, SVG explanations, product images, feature blocks, data-output sections, FAQ, and specifications.
6. Remove icon-only decoration blocks when they make the page feel heavy or inconsistent with SoilCreate.
7. Remove the original SoilCreate `Delivery & Support` / order-to-O&M CTA section.
8. Keep English content only. Hide or remove Chinese text in imported SVGs and bilingual labels.
9. Replace image paths from `../assets/img/` to `/images/products/{product-slug}/`.
10. Replace SoilCreate blue color styling with SoilCreate colors:
   - Dark slate gray: `#3A474E`
   - Industrial orange: `#D96B3A`
   - Medium gray: `#888A8D`
   - Light gray background: `#f8f9fa`
   - Light border gray: `#eaedf0`

## Product Page Design Rules

Use the current Sliding Inclinometer page as the reference sample:

- Page content width: imported content and bottom business modules should align to the same 1200 px container.
- Hero: keep the original SoilCreate product hero structure, but use SoilCreate dark slate background and the softer SoilCreate orange `#D96B3A`.
- Model line: display as plain text, not an orange pill or filled badge.
- Diagrams and SVGs: hide Chinese labels; keep English labels legible; use SoilCreate orange for strokes and highlights.
- Tables: use a bordered, horizontally scrollable table wrapper; header background should be a very light orange tint; first column should be muted and bold.
- Product cards / feature cards: remove large standalone icon graphics unless the icon is essential to explain the product.
- Gallery images: use real images where available, `object-fit: contain`, fixed visual rhythm, and concise captions.
- Do not show public prices.
- Keep all images lazy-loadable where the template controls the image tag.

## SoilCreate Bottom Modules

After the imported SoilCreate body, keep SoilCreate's original business modules:

- `Downloads & Resources`
- `Related Products`
- `Related Case`
- `Related Solutions`
- `Make an enquiry`
- `Back to Product Catalog`

Related case studies and solutions should:

- Use existing SoilCreate `/case`, `/solution`, or `/case-studies` content.
- Be relevant to the product.
- Show no more than 4 items per module.
- Be separated into two modules: industry cases go under `Related Case`; SEO articles, guides, and solution pages go under `Related Solutions`.
- Link both ways where possible: product to case/solution, and case/solution back to related products.

## Markdown Shell Example

```md
---
layout: page
title: "Sliding Inclinometer | SoilCreate"
description: "Smart Bluetooth portable sliding inclinometer for manual borehole surveys."
head:
  - - meta
    - name: keywords
      content: "sliding inclinometer, Bluetooth inclinometer, manual borehole inclinometer survey"
---

<ImportedProductPage product="sliding-inclinometer" />
```

## Catalog Rule

Every imported product must also be added to `products.json` with:

- `sku`
- `name`
- `categoryId`
- `subcategoryId`
- `category`
- `subcategory`
- `image`
- `imageAlt`
- `href`
- `summary`
- `keywords`
- `updatedAt`

## Validation

After adding or editing imported products:

1. Run `npm run build`.
2. Check `/products/`.
3. Open the new product detail URL.
4. Confirm product card, hero, gallery, and detail images load from `/images/products/{product-slug}/`.
5. Confirm images in imported HTML also use the same product-level folder instead of legacy shared import folders.
6. Confirm the original SoilCreate CTA is not present.
7. Confirm SoilCreate enquiry, downloads, related products, and related case/solution modules appear at the bottom.
8. Confirm the product appears under the correct collapsible left-side category.
