# Philippine Airlines Portal Clone

Static, single-page recreation of the Philippine Airlines homepage hero portal with a booking widget, promotional banners, destination highlights, and support utilities.

## Stack Recommendation

**Chosen option:** Static HTML/CSS/Vanilla JS (current build)  
**Why:** The deliverable is a single, content-heavy landing page with bespoke PAL visual fidelity. A static stack keeps the deployment footprint small, works on any CDN/Netlify/Vercel/GitHub Pages target, and avoids hydration overhead while still allowing rich interactivity (sticky nav, autocomplete, validation, tabbed navigation, etc.). If you later need reusable components or server rendering, you can lift this markup into React/Vite or Next.js since the structure already follows semantic sections and isolated modules.

## Project Structure

```
/index.html       Semantic HTML5 layout and components
/styles.css       CSS Grid/Flexbox, custom properties, responsive rules
/script.js        Vanilla JS interactivity and accessibility hooks
/images/          Optimized WebP assets with JPEG fallbacks
/fonts/           Placeholder directory for self-hosted font files
/VISUAL_REFERENCE.md  Design cues provided by PAL reference
```

## Getting Started

1. Serve locally via any static server (e.g., `npx serve .` or VS Code Live Server).
2. Open `http://localhost:3000` (or whichever port your server uses).
3. Update content/images as needed inside `images/` (keep filenames to preserve `srcset` references).

## Hosting

- **Netlify / Vercel / GitHub Pages:** Drag-and-drop or push the folder; no build step required.
- **Other static hosts:** Copy the folder contents to the target document root.

If you migrate to React (Vite) or Next.js later, keep the current `images/` and `fonts/` folders and import the CSS variables into component-scoped styles for consistency.

## Accessibility & UX Checklist

- Semantic landmarks (`header`, `main`, `section`, `footer`) with descriptive labels.
- Skip link for keyboard users.
- Booking tabs & trip-type radios support keyboard navigation/ARIA attributes.
- Autocomplete inputs expose `role="listbox"` suggestions and announce state with `aria-expanded`.
- Date pickers enforce `min` attributes; inline status messages use `aria-live`.
- Buttons/links meet contrast ratios using PAL palette.
- Responsive breakpoints at 480px, 768px, 1024px, 1440px with touch-friendly tap targets.

## Assets

- Generated gradient placeholders that mimic PAL photography style located in `images/` as `.webp` + `.jpg`.
- Add production-ready assets by replacing files (keep matching filenames or update `index.html` references).
- `fonts/` holds a `.gitkeep` so you can drop self-hosted Inter or other brand fonts later if needed.

