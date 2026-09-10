---
name: C. Sethia — Brand & Product Data Structure
description: How productsData is structured and which pages consume it; key conventions.
---

## Brand Keys (order matters — it drives sidebar order)
SANT → Honeywell → HGuru → Resistoflex → SantAirSystem → Tyco

## BrandData Interface
```ts
interface BrandData {
  name: string;          // display name
  description: string;
  logo: string;          // path relative to /public, e.g. "/brand-logos/sant.png"
  categories: ProductCategory[];
  endNote?: string;      // shown after all categories (e.g. "Other products on demand")
}
```
Logo field is **required** — removing it breaks TypeScript.

## Pages That Consume productsData
- `src/pages/products.tsx` — brand sidebar + header logo + product cards
- `src/pages/brands.tsx` — one card per brand with large logo + description
- `src/pages/home.tsx` — brands grid uses a separate `brands` array (must be kept in sync manually when adding a new brand)

## Home Page brands[] Array
Lives in `home.tsx` top-level const — NOT derived from productsData. When adding a new brand to productsData, also add it to the `brands` array in home.tsx.

## Product Images
New XLSX images live in `/public/product-images-new/image{N}.jpg`. The original `/public/product-images/` folder still exists but is no longer used.

## Resistoflex Products Source
Full product list from `Resistoflex_product_list_1785661468865.xlsx` — single sheet "Resistoflex Products". Categories: Expansion Joints (Rubber, Metal, Flexible Duct), Anti Vibration Mounts (Rubber Mounting, Spring Isolator, Bonded Buffers, Hangers, Rubber Pads & Mats, Spring Viscous Damper System).
