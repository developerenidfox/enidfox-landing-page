# Enid Fox — Landing Page

Official "Coming Soon" landing page for **Enid Fox**:
- International BodyTalk Practitioner
- Nature's Language Practitioner
- Reiki Master
- Cranio Sacral Therapist

Built with [Next.js](https://nextjs.org/) (App Router), TypeScript, and [Tailwind CSS v4](https://tailwindcss.com/).

---

## Brand & Design Specifications

### Palette
- **Cream** (`#F4EFE8`): Primary background canvas
- **Charcoal** (`#2F2F2F`): High-contrast typography & logo
- **Olive** (`#4A5D3A`): Brand accent & "Coming Soon" calligraphy
- **Sage** (`#A7B893`): Accent divider line
- **Stone** (`#B7B7B7`): Subtle borders and structural accents

### Typography
- **Eyesome Script** (`src/fonts/Eyesome-Script.otf`): Flowing cursive script for *"Coming Soon"*
- **Montserrat**: Clean geometric sans-serif for practitioner titles
- **Geist Sans**: Modern, legible body typeface

---

## Visual Architecture

The landing page is engineered at `100dvh` viewport height with layered 4x Retina assets:
1. **Background Layer (`z-0`)**: 8K ambient sunlit garden plate (`public/images/background.png`)
2. **Portrait Layer (`z-10`)**: Transparent cutout of Enid anchored to the bottom and shifted 75px right (`public/images/enid.png`)
3. **Editorial Stack (`z-15`)**: Two-column layout with vertically centered brand logo, credentials in Montserrat, Sage divider, and Eyesome Script "Coming Soon"
4. **Foreground Leaves (`z-20`)**: Botanical overlays framing the bottom-left, top-right, and bottom-right corners

---

## Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the page.

### Production Build
```bash
npm run build
npm run start
```

---

## Repository
- **Remote**: `https://github.com/developerenidfox/enidfox-landing-page.git`
- **Branch**: `main`
