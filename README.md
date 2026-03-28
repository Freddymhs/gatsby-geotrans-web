# Geotrans Landing Page

Landing page para Geotrans, empresa de arriendo de maquinarias y servicios de construccion en Arica, Chile. Sitio bilingue (ES/EN) con datos desde SQLite.

## Tech Stack

- **Framework**: Gatsby 5 (React 18)
- **Styling**: Bootstrap 5 + styled-components 6
- **i18n**: gatsby-plugin-react-i18next (ES default, EN)
- **Data**: SQLite (gatsby-source-sqlite)
- **Forms**: Fetch a AWS Lambda (emailjs-com legacy)
- **Deploy**: Vercel
- **Node**: 22.12.0

## Setup

```bash
# Instalar dependencias (requiere --legacy-peer-deps)
npm i --legacy-peer-deps

# Desarrollo
npx gatsby develop
# → http://localhost:8000

# Build produccion
npx gatsby build

# Limpiar cache
npx gatsby clean
```

## Variables de Entorno

Crear `.env.development` y `.env.production`:

```
GATSBY_API_AWS_FORM=<url-lambda-formulario-contacto>
```

## Estructura

```
src/
├── pages/           # Rutas (index, nosotros, contacto, 404)
├── componentsv2/    # Componentes actuales
│   ├── layout/      # Layout wrapper
│   ├── homepage/    # Secciones homepage
│   ├── aboutpage/   # Secciones nosotros
│   ├── contactpage/ # Formulario y secciones contacto
│   └── shared/      # Reutilizables (Seo, Texts, Separador)
├── old-componentss/ # Componentes legacy (en migracion)
├── assetsv2/        # Imagenes, videos, fonts, styles
├── locales/         # Traducciones JSON (es/, en/)
└── data/            # SQLite database
```

## Estado

- Status: Produccion
- Repo: github.com/Freddymhs/gatsby-geotrans-web
