# Literacia Cosmética

Um site educativo baseado em evidência científica sobre rosácea, saúde da pele e cuidados cosméticos.

## 🌐 Pages (Páginas)

- **Home** (`/`) - Página inicial com visão geral
- **O que é Rosácea?** (`/o-que-e-rosacea`) - Definição, características e informações gerais
  - Visão Geral
  - Manifestações
  - Classificação
  - Diagnóstico
  - Gatilhos
  - Patogénese
- **Ingredientes** (`/ingredientes`) - Ingredientes recomendados e a evitar
- **Rotina** (`/modo-aplicacao`) - Rotinas matinal e noturna de cuidados
- **Referências** (`/refs`) - Fontes e referências bibliográficas

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.7 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Playfair Display + Lora (Google Fonts)
- **Build Tool:** Turbopack

## 🎨 Design System

- **Colors:** 9 CSS variables (cream, rose, burgundy, gold, taupe, etc.)
- **Typography:** Fluid scaling with Playfair Display (headings) + Lora (body)
- **Light Mode:** Enforced across all browsers (color-scheme: light)
- **Grain Texture:** SVG filter overlay for editorial aesthetic

## 🚀 Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
literacia-cosmetica/
├── app/
│   ├── (pages)/          # Main content pages
│   ├── layout.tsx        # Root layout with Navigation & Footer
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles & design system
├── components/
│   ├── Navigation.tsx    # Top navigation bar
│   ├── Footer.tsx        # Footer
│   └── SidebarNav.tsx    # Internal navigation for "O que é Rosácea?"
├── public/               # Static assets
└── package.json
```

## 📋 Content Basis

All medical content is based on:
- Global ROSacea COnsensus (ROSCO) guidelines
- National Rosacea Society Expert Committee (2017)
- Evidence-based dermatology standards

## ⚕️ Disclaimer

This website provides educational information only. Consult a dermatologist for professional diagnosis and treatment.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
