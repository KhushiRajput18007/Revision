# HTML Notes & Cheat Sheet

## 1. Basics & Building Blocks
- HTML = structure of a webpage.
- `<!DOCTYPE html>` — tells browser to use HTML5.
- `<html>` — root of document.
- `<head>` — metadata.
- `<body>` — visible content.
- Elements = tags + content. Attributes give extra info (`class`, `id`, `src`, `href`).
- Void elements: `img`, `br`, `input`, `meta`.
- Use UTF-8 encoding for global languages.

Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

## 2. Document Metadata
Used inside `<head>`:
- `<title>` — page title.
- `<meta charset="UTF-8">` — encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1">` — responsive design.
- `<meta name="description">` — SEO.
- `<link rel="stylesheet" href="style.css">` — stylesheet.
- `<link rel="icon">` — favicon.
- Preload, prefetch, preconnect — performance optimizations.

## 3. Text & Inline Elements
- Headings: `<h1>`–`<h6>`.
- Paragraph: `<p>`.
- Inline formatting: `strong` vs `b`, `em` vs `i`.
- Other inline: `mark`, `small`, `code`, `kbd`, `time`, `abbr`.

Example:
```html
<p>Press <kbd>Ctrl + C</kbd> to copy.</p>
```

## 4. Grouping & Sectioning
- Semantic structure: `<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`.
- Media with captions: `<figure>` + `<figcaption>`.
- Use semantic tags for SEO & accessibility.

Example layout:
```html
<main>
    <article>
        <h2>Blog Title</h2>
        <p>Content...</p>
    </article>
</main>
```

## 5. Lists & Tables
Lists:
- Ordered: `<ol>`.
- Unordered: `<ul>`.
- Definition: `<dl>` with `<dt>` and `<dd>`.

Tables:
- Structure: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`.
- Accessibility: `<th scope="col">`, `<th scope="row">`.
- Avoid using tables for layout.

## 6. Links & Navigation
- Create links: `<a href="...">`.
- `target="_blank"` opens new tab — use `rel="noopener noreferrer"`.
- Special links: `mailto:`, `tel:`.
- Use `<nav>` for main navigation.
- Fragment links: `<a href="#section">`.

## 7. Images & Media
- Images: `<img src="" alt="">` — `alt` required for accessibility.
- Responsive images: `srcset`, `sizes`, `<picture>`.
- Lazy loading: `loading="lazy"`.
- Video/audio example:
```html
<video controls>
    <source src="video.mp4">
</video>
```
- Use `<track>` for captions.

## 8. Forms & Input Elements
- Form basics: `<form action="" method="">` (GET / POST).
- Input types: `text`, `email`, `password`, `number`, `date`, `file`, `checkbox`, `radio`.
- Always use `<label for="">`.
- Validation attributes: `required`, `pattern`, `min`, `max`.
- File upload: `enctype="multipart/form-data"`.
- Group related fields: `<fieldset>`.

## 9. Semantic HTML & SEO
- Semantic tags help search engines understand structure.
- Maintain correct heading hierarchy.
- Use structured data (JSON‑LD) to improve search results.
- Open Graph tags improve social sharing.

## 10. Accessibility (A11y)
- Prefer semantic HTML; use ARIA only when necessary.
- Common ARIA roles: `role="dialog"`, `role="alert"`.
- Ensure keyboard accessibility (Tab, Enter, Space).
- Manage focus with `element.focus()`.
- Provide alt text, captions, and labels.

## 11. HTML5 APIs
Built-in browser APIs:
- Canvas API — drawing, games.
- `localStorage` (persistent) vs `sessionStorage` (tab-only).
- Geolocation API.
- Drag & Drop API.
- Fullscreen API.
- Notifications API.
- Clipboard API.
- History API — SPA routing.

## 12. Web Components
- Reusable custom elements.
- Custom Elements — define your own tags.
- Shadow DOM — isolated DOM & scoped CSS.
- `<template>` — reusable markup.
- `<slot>` — project external content.
- Lifecycle callbacks: `connectedCallback`, `disconnectedCallback`.

## 13. Progressive Web Apps (PWAs)
- Manifest file: name, icons, theme, display.
- Service Worker — offline caching, push notifications.
- Works offline; requires HTTPS.
- Can be "Add to Home Screen".

## 14. Performance Optimization
- Use `async` and `defer` for scripts.
- Preload critical assets: `<link rel="preload">`.
- Lazy load images & iframes.
- Minify CSS/JS.
- Core Web Vitals: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), FID (First Input Delay).

## 15. Security in HTML
- Prevent XSS: avoid `innerHTML` with untrusted input.
- Use Content Security Policy (CSP) to block unsafe scripts.
- `rel="noopener"` prevents tab hijacking.
- Use `iframe sandbox` to restrict external content.
- Use HTTPS for APIs and sensitive data.

## 16. Internationalization (i18n)
- Set language: `<html lang="en">`.
- `dir="rtl"` for right-to-left languages.
- Use UTF-8 for full language & emoji support.
- Avoid embedding text in images.
- Use `<time>` for machine-readable dates.

## 17. Multimedia Accessibility
- Provide alt text and captions.
- Provide transcripts for audio-only content.
- Avoid autoplay audio.
- Avoid flashing animations.

## 18. Print Styles
- Use `@media print` for printable layout.
- Hide non-essential sections (nav, ads).
- Use page-break rules for multipage prints.
- Show link URLs for print.

## 19. Deprecated Elements
Avoid old HTML:
- Elements: `<font>`, `<center>`, `<marquee>`, `<big>`, `<u>`, `<tt>`.
- Deprecated attributes: `bgcolor`, `border`, `align`.
- Replace with modern CSS and semantic HTML.

## 20. Tools, Debugging & Deployment
- DevTools — inspect & debug.
- W3C Validator — validate HTML.
- Lighthouse — SEO, accessibility, performance.
- Deployment: Netlify, Vercel, GitHub Pages.
- Use Git for version control.

---

# 🌟 HTML Cheat Sheet — One Page Summary

## 1. Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page Title</title>
</head>
<body>
    <!-- Content -->
</body>
</html>
```

## 2. Common Tags
- Text & Headings: `<h1>`–`<h6>`, `<p>`, `<br>`, `<hr>`, `<span>`, `<strong>`, `<em>`, `<mark>`, `<code>`, `<pre>`
- Lists: `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
- Links: `<a href="url" target="_blank" rel="noopener">Link</a>`
- Images: `<img src="img.jpg" alt="desc" loading="lazy">`

## 3. Semantics
`<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`, `<figure>`, `<figcaption>`  
Use semantic tags for SEO & accessibility.

## 4. Forms (Essentials)
```html
<form action="" method="POST" enctype="multipart/form-data">
    <label for="email">Email</label>
    <input id="email" type="email" required>

    <input type="file" multiple>
    <textarea></textarea>

    <button type="submit">Submit</button>
</form>
```
Important attrs: `required`, `pattern`, `placeholder`, `name`, `min`, `max`, `step`

## 5. Media
Video:
```html
<video controls>
    <source src="v.mp4" type="video/mp4">
</video>
```
Audio:
```html
<audio controls>
    <source src="a.mp3">
</audio>
```
Captions:
```html
<track kind="captions" src="subs.vtt">
```

## 6. Responsive Images
```html
<img
    src="img-600.jpg"
    srcset="img-600.jpg 600w, img-1200.jpg 1200w"
    sizes="(max-width:600px) 600px, 100vw"
    alt="desc">
```
Use `<picture>` for art direction.

## 7. Metadata & SEO
- `<meta name="description" content="...">`
- Open Graph: `<meta property="og:title" content="">`
- `<link rel="canonical" href="URL">`
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`

## 8. Accessibility (A11y)
- Alt text, labels, semantic tags, ARIA when needed.
- Ensure keyboard navigation & focus management.

## 9. HTML5 APIs (Quick)
- Canvas, `localStorage`, `sessionStorage`, Geolocation, Clipboard, Fullscreen, `navigator.clipboard.writeText(...)`, `element.requestFullscreen()`

## 10. Performance Essentials
- `async` — load & execute asap.
- `defer` — load async, run after HTML.
- Lazy load images: `<img loading="lazy">`
- Preload: `<link rel="preload" as="style" href="style.css">`

## 11. Security Essentials
- Avoid `innerHTML` with untrusted data.
- Use `rel="noopener noreferrer"` for external links.
- CSP example:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```
- Use HTTPS and `iframe sandbox` as needed.

## 12. Deprecated HTML
Avoid: `<font>`, `<center>`, `<big>`, `<tt>`, `<marquee>`, `<blink>` and deprecated attributes; use CSS instead.
 



# 1 — Introduction to CSS

Kya hai: CSS = styling language jo HTML ka look/layout control karti hai.

Why use: HTML structure, CSS presentation — separation of concerns.

Ways to include:

- Inline: style="color:red" (quick, but bad practice).
- Internal: <style> head mein (page-specific).
- External: <link rel="stylesheet" href="styles.css"> (best — cacheable, maintainable).

Syntax: selector { property: value; } — selector pe apply hota hai.

Tip: External CSS use karo for real projects.



# 2 — CSS Selectors

Element / Class / ID: p {}, .btn {}, #nav {} — ID zyada specific hota hai.

Universal & Grouping: * {} aur h1, h2 {} — multiple selectors ek rule mein.

Combinators:

- Descendant: div p (nested anywhere),
- Child: div > p (direct child),
- Adjacent: h1 + p (immediately next),
- General sibling: h1 ~ p (later siblings).

Attribute selectors: input[type="text"] ya [href^="https"] etc. Useful for targeting without extra classes.

Pseudo-classes: :hover, :focus, :nth-child(2) — state-based styling.

Pseudo-elements: ::before, ::after — element ke andar extra content add karne ke liye.

Use-case: Selector choose karte waqt specificity socho — cleaner CSS banega.



# 3 — Specificity & Cascade

Specificity order: inline > id > class/attr/pseudo-class > element/pseudo-element.

Cascade: agar same property multiple jagah define ho to specificity + order decide karta hai kaunsa apply hoga.

!important: force apply karta hai — avoid karo, last-resort ke liye.

Inheritance: kuch properties automatically child elements ko milte hain (e.g., color, font-family).

Tip: Clean naming + predictable order rakho, !important minimal use.



# 4 — Box Model

Parts: content → padding → border → margin.

Width rule: default box-sizing: content-box (padding/border add ho jate width mein). box-sizing: border-box recommended — width includes padding & border, layout simple hota hai.

Margin collapse: vertically adjacent margins collapse ho sakte hain (max of two).

Practical: layout calculate karte waqt box-sizing: border-box laga ke rakho.



# 5 — Display & Visibility

display types: block (new line), inline (same line), inline-block (inline but with width/height), none (remove from flow), flex, grid.

visibility: visible / hidden — hidden space leta hai; display: none bilkul hatata hai.

opacity: opacity:0 invisible hota hai but clickable rah sakta.

Use: choose display wisely for layout and accessibility.



# 6 — Positioning

static: default.

relative: element normal jagah pe rahega but top/left use kar sakte.

absolute: nearest positioned ancestor ko reference leke position hota hai; flow se remove hota.

fixed: viewport relative — scroll ke baad bhi same jagah.

sticky: scroll ke pehle relative behave, threshold ke baad stick.

z-index: stacking order — sirf positioned elements pe kaam karta.



# 7 — Flexbox (one-dimensional)

Enable: display: flex;

Axis: main axis row/column — flex-direction.

Alignment: justify-content (main axis), align-items (cross axis).

Flex grow/shrink/basis: flex: 1 etc.

Gap: items ke beech gap.

Use-case: single-row ya single-column responsive layouts (navbars, cards).



# 8 — CSS Grid (two-dimensional)

Enable: display: grid;

Template columns/rows: grid-template-columns: 1fr 2fr;

Areas: grid-template-areas se named layout.

auto-fill/auto-fit + minmax(): responsive grids create karne ke liye.

Subgrid: child grid parent grid ke tracks follow karta.

Use-case: complex layouts (dashboards, magazines).



# 9 — Sizing & Spacing

Units: px, %, em, rem, vw/vh, fr.

min-width, max-width: responsive constraints.

aspect-ratio: maintain element ratio (e.g., 16/9).

clamp(): clamp(min, preferred, max) for fluid sizing.

Tip: rem typography, %/fr layout.



# 10 — Typography

Font-family: font stack — "Inter", system-ui, sans-serif.

Line-height: 1.5 for readability.

Letter/word spacing: for readability.

Web fonts: Google Fonts ya @font-face (performance impact — preload).

Text transform/decoration: uppercase, underline.

Best practice: accessibility & readability.



# 11 — Backgrounds & Borders

background-image: background: url(...) no-repeat center/cover;

border-radius: rounded corners.

box-shadow: modern elevation.

multiple backgrounds: comma separated.

Practical: subtle shadows & radii for modern UI.



# 12 — Colors, Gradients & Effects

Formats: hex, rgb(), rgba(), hsl().

Gradients: linear-gradient, radial-gradient.

Blend modes: mix-blend-mode, background-blend-mode.

Tip: color variables use karo.



# 13 — Transitions & Animations

Transition: transition: all .3s ease;

Keyframes: @keyframes for multi-step animation.

Performance: transform + opacity animate karo; width/height nahi (reflows).



# 14 — Transformations

translate, rotate, scale, skew: transform: translateX(10px) rotate(10deg);

transform-origin: pivot point.

3D transforms: perspective, rotateX/Y.

Use-case: micro interactions, hover effects, modals.



# 15 — Responsive Web Design (RWD)

Media queries: @media (max-width: 768px);

Fluid images: max-width:100%.

srcset: responsive images.

Breakpoints: content-based.

Mobile-first approach recommended.



# 16 — CSS Variables (Custom Properties)

Declare: :root { --primary: #06f }

Use: color: var(--primary);

Advantages: runtime theming, easy overrides.

Fallback: var(--x, fallback).



# 17 — CSS Functions

calc(), min(), max(), clamp().

url(), var(), rgb() etc.

Use-case: dynamic layouts without JS.



# 18 — Filters & Visual Effects

filter: blur(), brightness(), grayscale().

backdrop-filter: glass effect.

Performance heavy — use sparingly.



# 19 — Modern CSS (New Features)

:has() selector: parent selector.

Container queries: container-based responsiveness.

Subgrid: inherits grid tracks.

Logical properties: margin-inline, padding-block.

accent-color: style native inputs.



# 20 — Best Practices, Architecture & Tools

Architectures: BEM, OOCSS, ITCSS.

Preprocessors: Sass, Less.

PostCSS + Autoprefixer: vendor prefixes.

Avoid !important.

Minify & bundle production CSS.

Accessibility: contrast, readable fonts.

Cross-browser & responsive testing (Lighthouse).



# 1 — Introduction to CSS

CSS ek styling language hai jo HTML elements ka look, design aur layout control karti hai. HTML structure deta hai, CSS usko beautiful banata hai. CSS ko inline, internal ya external file se add kar sakte ho — projects mein hamesha external stylesheet use karna best hota hai.

# 2 — CSS Selectors

Selectors decide karte hain ki CSS kisko target karegi — element, class, ID, attribute, pseudo-classes (hover, focus) aur pseudo-elements (::before, ::after). Combinators (>, +, ~, space) se relationships target karte ho. Selector choice coding clean banati hai.

# 3 — Specificity & Cascade

Specificity battatha hai kaunsa rule apply hoga: inline > ID > class > element. Cascade ka matlab hai ki last wala rule strong hota hai agar specificity same ho. Kuch properties inherit bhi hoti hain jaise font-family. !important use avoid karo.

# 4 — Box Model

Har element content + padding + border + margin se banta hai. Default content-box width padding/border add karta hai. border-box use karne se layout simple hota hai. Margin collapse vertically ho sakta hai.

# 5 — Display & Visibility

Display decide karta hai element ka behavior: block, inline, inline-block, none, flex, grid. visibility: hidden space rakhta hai but hide karta. display: none element ko completely hata deta. opacity:0 invisible but clickable hota hai.

# 6 — Positioning

Static default position hoti hai. Relative element ko thoda sa shift karne deta. Absolute positioned ancestor ke hisaab se set hota hai. Fixed viewport se chipka rehta hai. Sticky scroll ke baad stick ho jata hai. Z-index stacking order control karta hai.

# 7 — Flexbox (One-Dimension Layout)

Flexbox ek powerful layout system hai for row ya column layout. justify-content main axis pe align karta, align-items cross axis pe. flex:1 elements ko expand/shrink karne deta. Cards, navbars ke liye best hai.

# 8 — Grid (Two-Dimension Layout)

CSS Grid rows + columns mein layout banata hai. fr units flexible space deti hain. grid-template-areas se named layouts bante hain. auto-fit & minmax() responsive grids allow karte. Complex dashboards ke liye perfect.

# 9 — Sizing & Spacing

CSS units jaise px, %, em, rem, vw, vh aur fr layout control karte hain. min-width, max-width responsive behavior dete. clamp() min/max ke beech fluid sizing deta. REM typography ke liye best hota hai.

# 10 — Typography

Fonts, size, weight, line-height aur spacing text ko readable banate hain. Web fonts @font-face ya Google Fonts se load karte. Line-height 1.5 readability improve karta. Text-transform aur decoration stylization ke liye.

# 11 — Backgrounds & Borders

Backgrounds images/color add karte. background-size: cover responsive background deta. Borders shape/outline dete. border-radius rounded corners banata. box-shadow depth/elevation create karta. Modern UIs mein subtle shadows trend hain.

# 12 — Colors, Gradients & Effects

Colors hex, rgb, rgba ya hsl format mein hote. Gradients smooth color transitions banate. Blend modes elements ko creatively mix karte. Variables se colors consistent rehte project mein.

# 13 — Transitions & Animations

Transitions smooth changes banate (hover). Animations @keyframes se multi-step effects possible hote. Best practice hai sirf transform & opacity animate karo — ye GPU optimized hote hain.

# 14 — Transformations

Transforms element ko move (translate), rotate, scale ya skew karte hain. 3D transforms depth effect dete. Hover animations ya modals ke liye widely used.

# 15 — Responsive Web Design

RWD ensure karta hai ki website mobile, tablet aur desktop sab par perfect lage. Media queries breakpoints define karte. Mobile-first approach best hota: pehle chhote screens ke liye CSS, baad mein larger screens ke liye enhancements.

# 16 — CSS Variables

Custom properties (variables) styling ko dynamic aur maintainable banate. :root mein declare karo aur var() se use karo. Dark/light themes, spacing systems easily ban sakte.

# 17 — CSS Functions

Functions jaise calc(), min(), max(), clamp() dynamic layouts banate. url() images ke liye, var() variables ke liye. JS ke bina responsive logic possible hota.

# 18 — Filters & Visual Effects

Filters blur, brightness, contrast waghera apply karte. Backdrop-filter glass effect deta. Ye visually attractive hote but heavy ho sakte performance par.

# 19 — Modern CSS Features

New CSS abilities jaise :has() (parent selector), container queries (component-level responsiveness), subgrid (grid inheritance), logical properties (RTL support), accent-color (form controls styling). Yeh modern UI development ko easy karte.

# 20 — Best Practices & Architecture

Use BEM/OOCSS naming for clean scalable CSS. Sass/Less preprocessors maintainability improve karte. Autoprefixer browser support ensure karta. Avoid !important. Build tools CSS ko minify/bundle karte. Accessibility & performance hamesha test karo.
