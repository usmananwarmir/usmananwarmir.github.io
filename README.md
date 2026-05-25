# Usman Anwar - Portfolio

Devopslens-inspired dark portfolio for an **Infrastructure & Automation Engineer**. Built with Next.js, Tailwind CSS, and Framer Motion. Static export for **GitHub Pages** at `https://usmananwarmir.github.io`.

## Features

- Horizontal “frame” scrolling (Devopslens-style)
- English + German (`/en/`, `/de/`)
- CV content: experience, skills, education, certifications, languages
- Projects placeholder (add later in `src/lib/content/`)
- LinkedIn contact, phone, GitHub
- Impressum & Datenschutz template pages
- GitHub Actions deploy workflow

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en/`).

## Build

```bash
npm run build
```

Static output is in `out/`.

## Deploy to GitHub Pages

**One-time setup** (GitHub CLI):

```powershell
gh auth login -h github.com -p https -w
.\scripts\deploy.ps1
```

Or manually:

1. Create public repo **`usmananwarmir.github.io`** on GitHub.
2. Push `main` branch to that repo.
3. **Settings → Pages → Build and deployment** → source: **GitHub Actions**.

Live URL: `https://usmananwarmir.github.io/en/`

## Customize

| Item | Location |
|------|----------|
| Copy EN/DE | `src/lib/content/en.ts`, `de.ts` |
| Links, phone | `src/lib/constants.ts` |
| Profile photo | Replace `public/profile-placeholder.svg` or add `public/profile.jpg` and update `HeroFrame.tsx` |
| Projects | `src/lib/content/*.ts` + `ProjectsFrame.tsx` |
| Analytics | Add later; note in `datenschutz` pages |
| Legal text | `src/app/[locale]/impressum/`, `datenschutz/` |

## Photo

Drop your image at `public/profile.jpg` and update the `Image` `src` in `src/components/frames/HeroFrame.tsx`.
