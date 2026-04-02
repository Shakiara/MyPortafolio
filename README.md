# Main_Portafolio

Personal portfolio site built with plain HTML, CSS, and JavaScript. The repository contains a main portfolio page and a separate UI showcase page with interactive component demos.

## Overview

This project presents a frontend portfolio for Shakiara Feliciano. It is designed as a static site, so there is no build step or framework dependency. The main page highlights an introduction, about section, skills, projects, and contact area. The showcase page is a playground for UI patterns such as buttons, forms, navigation, overlays, feedback states, and utility widgets.

## Features

- Responsive portfolio layout with desktop and mobile navigation
- Animated hero section and reveal effects on scroll
- Skills section with progress indicators
- Dynamic projects grid rendered from JavaScript data
- Contact section with form markup and contact details
- Dedicated UI showcase page with reusable component examples

## Project Structure

- `pages/index.html` - main portfolio page
- `pages/ui-showcase.html` - UI component showcase page
- `scripts/portafolio.js` - portfolio behavior and project rendering
- `scripts/ui-showcase.js` - interactions for the UI showcase page
- `styles/style.css` - main portfolio styles
- `styles/ui.css` - shared UI showcase styles
- `media/` - assets and media files
- `docs/` - reserved for documentation
- `packages/` - reserved for future packages or modules

## How To Run

Because this is a static site, you can open the HTML files directly in a browser. For the best result, use a local server so relative paths load correctly.

### Option 1: Open Directly

Open `pages/index.html` in your browser.

### Option 2: Use A Local Server

If you have VS Code Live Server or any simple static server, open the `pages/` folder and serve the site from there.

Examples:

- Live Server in VS Code
- Python simple server: `python -m http.server`

## About The Repo

This repository is focused on frontend practice and personal branding. It shows how the site is structured, how interactive sections are built with vanilla JavaScript, and how reusable UI components can be explored in a separate showcase page.

## Notes

- The project does not currently use a framework or package manager.
- External icons are loaded from Font Awesome via CDN.
- Several demo project links still point to placeholder URLs and can be replaced with real deployments or GitHub repositories later.