# AI Rules for Starbots Website

This document outlines the technical stack and guidelines for making changes to the Starbots website. The goal is to maintain consistency, simplicity, and performance.

## Tech Stack Overview

*   **Core Technologies:** HTML5 for structure, CSS3 for styling, and Vanilla JavaScript for interactivity.
*   **Styling:** Pure CSS, leveraging CSS variables, Flexbox, and Grid for responsive layouts. No external CSS frameworks are currently in use.
*   **Interactivity:** All dynamic behavior and DOM manipulation are handled with Vanilla JavaScript.
*   **Typography:** Google Fonts (Inter) for general text and a custom font (Nasalization) loaded via `@font-face` for branding elements.
*   **Image Handling:** Native browser lazy loading (`loading="lazy"`) is preferred for images.
*   **Local Development:** A simple Python `http.server` is used to serve the static files locally.
*   **Deployment:** The site is configured for deployment on Vercel, with specific `vercel.json` settings for routing and caching.
*   **No Frameworks:** This project does *not* use any front-end frameworks like React, Vue, Angular, nor does it use TypeScript.

## Library and Tooling Guidelines

To ensure maintainability and keep the project lightweight, please adhere to the following rules:

*   **HTML, CSS, JavaScript First:** Always prioritize implementing features using native HTML, CSS, and Vanilla JavaScript.
*   **Styling:**
    *   **DO NOT** introduce CSS frameworks (e.g., Tailwind CSS, Bootstrap, Material UI). All styling should be done in `styles.css` using standard CSS.
    *   Utilize CSS variables for consistent theming.
    *   Ensure designs are fully responsive using Flexbox and CSS Grid.
*   **JavaScript:**
    *   **DO NOT** introduce JavaScript frameworks (e.g., React, Vue, Angular) or libraries (e.g., jQuery).
    *   All client-side scripting should be written in Vanilla JavaScript in `script.js`.
*   **Fonts:** Continue to use Google Fonts for body text and the custom 'Nasalization' font for headings/logos.
*   **Icons:** If icons are needed, prefer SVG icons or a lightweight icon font. **DO NOT** introduce heavy icon libraries or React-specific icon libraries like `lucide-react`.
*   **No Build Process:** This is a static site. **DO NOT** introduce build tools, bundlers (e.g., Webpack, Vite), or transpilers (e.g., Babel).
*   **No TypeScript:** This project is pure JavaScript. **DO NOT** introduce TypeScript.
*   **No Shadcn/UI or Radix UI:** These are React component libraries and are not applicable to this static HTML/CSS/JS project. **DO NOT** attempt to use them.
*   **Performance:** Keep file sizes small and optimize assets where possible.