# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

### Development Commands
- **Start dev server**: `npm run dev` or `gatsby develop` (opens at `http://localhost:8000`)
- **Build for production**: `npm run build` or `gatsby build`
- **Clean build artifacts**: `gatsby clean && gatsby develop` (full reset)
- **Clear cache only**: `npm run removecache`
- **Fresh install**: `npm run clean && npm run installpackages` (uses `--legacy-peer-deps`)
- **List all scripts**: `npm run list:scripts`
- **Check dependencies**: `npm run check` or `npm run analyze:unused`

**Important**: Always use `--legacy-peer-deps` when installing packages (Gatsby 5 has peer dependency conflicts).

## Project Overview

**Geotrans Landing Page** — A Gatsby 5 site for equipment rental and construction services in Arica, Chile.
- **Type**: Gatsby static site with i18n support
- **Languages**: Spanish (default) and English
- **Stack**: React 18, Gatsby 5, Bootstrap 5, styled-components, i18next
- **Data**: SQLite database with product/service/area data
- **Node version**: 22.12.0 (see `package.json` engines)

## Architecture & Directory Structure

### Folder Layout
```
src/
├── pages/              # Gatsby file-based routing (auto-routes)
│   ├── index.js        # Homepage
│   ├── nosotros.js     # About page
│   ├── contacto.js     # Contact page
│   └── 404.js          # Custom 404 page
├── componentsv2/       # Current components (preferred; use this)
│   ├── layout/         # Layout wrapper (Header, Nav, Footer)
│   ├── homepage/       # Homepage sections (Portada, Maquinarias)
│   ├── aboutpage/      # About page sections
│   ├── contactpage/    # Contact form & sections
│   └── shared/         # Reusable: Seo, Texts, Separador, etc.
├── old-componentss/    # Legacy components (being migrated out)
│   └── layout/         # Old Header, Nav, Footer, etc.
├── assetsv2/           # Static assets
│   ├── images/         # Images (optimized via gatsby-plugin-sharp)
│   ├── videos/         # Video files
│   ├── fonts/          # Custom fonts
│   ├── styles/         # Global CSS/styled-components
│   └── favicons/       # PWA icons
├── locales/            # i18n JSON files (es.json, en.json per namespace)
└── data/
    └── geotransbd.sqlite  # SQLite database with tables:
                           # area, producto, servicio,
                           # generadorproducto, generadorservicio
```

### Key Architectural Patterns

1. **File-based Routing**: Pages in `src/pages/` auto-create routes (e.g., `pages/contacto.js` → `/es/contacto/` and `/en/contacto/`).

2. **GraphQL Queries in Pages**: Each page component exports a `query` named `${PageName}Query($language: String!)` to fetch data:
   - Locales from `allLocale` (handled by gatsby-plugin-react-i18next)
   - Images from `allFile` (from gatsby-source-filesystem)
   - SQLite data from auto-generated nodes (e.g., `SqliteMysqlTodosLosProductos`)

3. **Internationalization**:
   - Two languages: `es` (default), `en`
   - Handled by `gatsby-plugin-react-i18next`
   - Use `useTranslation()` hook in components: `const { t } = useTranslation()`
   - Access keys: `t("namespace.key")` (e.g., `t("portada.paragraph1")`)
   - Translation JSON files are in `src/locales/` (schema defined by plugin)

4. **Styling**:
   - Bootstrap 5 (via `react-bootstrap` components)
   - styled-components for custom styles
   - Inline styles for dynamic spacing/positioning (common pattern here)
   - Custom text components in `componentsv2/shared/Texts.js` (TextoGrande, TextoGrandeBold, etc.)

5. **Image Optimization**:
   - Handled by `gatsby-plugin-sharp` and `gatsby-image`
   - Queries use `.childImageSharp.fluid()` to get optimized responsive images
   - Images auto-served from `src/assetsv2/images/`

6. **Data Source**:
   - SQLite database at `src/data/geotransbd.sqlite`
   - Configured in `gatsby-config.js` with gatsby-source-sqlite
   - Tables: `area`, `producto`, `servicio`, `generadorproducto`, `generadorservicio`
   - Each table creates a GraphQL node type (e.g., `SqliteMysqlTodosLosProductos`)

### Webpack Path Aliases

Clean imports via aliases defined in `gatsby-node.js`:
```javascript
"@": "src/",
"@pages": "src/pages",
"@components": "src/components",        // Old folder (legacy)
"@componentsv2": "src/componentsv2",   // New folder (use this)
"@styles": "src/assetsv2/styles",
"@fonts": "src/assetsv2/fonts",
"@bd": "src/data",
"@images": "src/assetsv2/images",
"@videos": "src/assetsv2/videos",
"@favicons": "src/assetsv2/favicons"
```

**Usage**: `import Portada from "@componentsv2/homepage/portada"` (instead of relative `../../`)

## Code Style & Conventions

### Component Structure
- Components are **functional** (prefer hooks like `useTranslation()`)
- Use **React bootstrap components** for grid/layout: `<Container>`, `<Row>`, `<Col>`
- Extract sub-components within the file if they are UI-only and not reused
- **Named exports** for utilities; **default export** for page/layout components

### Example Component
```javascript
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container, Row, Col } from "react-bootstrap";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1>{t("my.key")}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
```

### Naming Conventions
- Component files: **PascalCase** (e.g., `Portada.js`, `ContactForm.js`)
- Utility/helper files: **camelCase** (e.g., `helpers.js`, `constants.js`)
- Styled-components: Define near component or in `@styles` folder
- i18n keys: **dot-separated** namespace structure (e.g., `portada.paragraph1`, `contact.form.name`)

### GraphQL in Pages
- Query name must be `${PageName}Query` (Gatsby convention)
- Always include `$language: String!` parameter for i18n
- Always fetch `locales: allLocale(filter: { language: { eq: $language } })` to ensure translations load

### CSS & Styling
- Prefer Bootstrap utility classes (e.g., `className="d-flex justify-content-center"`)
- Use styled-components for component-scoped styles when Bootstrap classes are insufficient
- Inline styles acceptable for dynamic values (see `portada.js` for examples)
- Global styles in `src/assetsv2/styles/` if needed

## Important Configuration Details

### gatsby-config.js
- **DEV_SSR**: Set to `false` to avoid dev inconsistencies
- **siteMetadata**: Title, description, author, siteUrl
- **Plugins**:
  - `gatsby-source-filesystem`: Sources images and locale JSON files
  - `gatsby-plugin-react-i18next`: i18n setup (languages: es, en; default: es)
  - `gatsby-source-sqlite`: Loads SQLite tables as GraphQL nodes
  - `gatsby-plugin-sharp` / `gatsby-transformer-sharp`: Image optimization
  - `gatsby-plugin-manifest`: PWA manifest
  - `gatsby-plugin-offline`: Service worker for offline support

### Environment Variables
- Load via `dotenv` in `gatsby-config.js`
- File: `.env.${process.env.NODE_ENV}` (e.g., `.env.development`, `.env.production`)
- Create these files if needed for sensitive config

### SQLite Database
- Path: `src/data/geotransbd.sqlite`
- Tables exposed as GraphQL nodes via `gatsby-source-sqlite` queries:
  - `area` → `SqliteMysqlTodasLasAreas`
  - `producto` → `SqliteMysqlTodosLosProductos`
  - `servicio` → `SqliteMysqlTodosLosServicios`
  - `generadorproducto` → `SqliteMysqlTodosLosProductores`
  - `generadorservicio` → `SqliteMysqlTodosLosServidores`

## Component Reusability & DRY

### Shared Components
- `src/componentsv2/shared/Seo.js` — SEO meta tags (use in all pages)
- `src/componentsv2/shared/Texts.js` — Typography components (TextoGrande, TextoGrandeBold, etc.)
- `src/componentsv2/shared/Separador.js` — Section dividers
- `src/componentsv2/layout/layout.jsx` — Main layout wrapper

### Legacy Code Migration
- `src/old-componentss/` contains outdated components
- Gradually migrate to `src/componentsv2/` (new structure)
- When refactoring pages, replace old imports with new equivalents
- Don't duplicate components; reuse or create new in `componentsv2`

## Testing & Quality

- **No test suite currently configured** — consider adding if needed
- **Linting**: Run `npm run analyze:unused` to check for dead dependencies
- **Audit**: Run `npm run audit` to check security vulnerabilities
- **Build verification**: Always run `npm run build` after changes to ensure production build succeeds

## Git & Deployment

- **Main branch** is the primary branch
- **Vercel integration** via `vercel-build` script (runs `gatsby build`)
- Ensure `gatsby build` completes successfully before pushing to main

## Troubleshooting

### Build Fails
1. Clear cache: `gatsby clean && npm run removecache`
2. Reinstall: `npm run clean && npm run installpackages`
3. Check `.env.${NODE_ENV}` file exists and is valid

### i18n Not Working
- Verify locale JSON files exist in `src/locales/`
- Check `gatsby-plugin-react-i18next` config in `gatsby-config.js` matches file structure
- Rebuild with `gatsby clean && gatsby develop`

### Images Not Optimized
- Ensure images are in `src/assetsv2/images/`
- Add to page GraphQL query via `allFile` filter
- Verify `gatsby-plugin-sharp` is running (should be automatic)

### SQLite Queries Return Empty
- Verify database file path in `gatsby-config.js` matches actual path
- Check table names and field names match database schema
- Run `gatsby clean && gatsby develop` to force re-source

## Performance Notes

- PWA enabled (`gatsby-plugin-offline`) — works offline with service worker
- Image optimization automatic via Sharp
- Static generation at build time (no runtime queries)
- For large datasets, consider GraphQL filters and limiting results
