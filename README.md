# LaTour AI Landing Page

A modern, responsive landing page for LaTour AI built with Next.js, React, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, clean design with custom branding colors
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 and React 18
- 🎯 Optimized for performance and SEO
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Manual Build

```bash
npm run build
npm start
```

## Customization

### Colors
The landing page uses custom brand colors:
- Primary blue: `#3293B5`
- Accent pink: `#EC3E72`
- Stone background: `stone-50`

### Content
Edit `app/page.tsx` to modify the landing page content.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   └── ui/
│       └── button.tsx   # shadcn/ui Button component
├── lib/
│   └── utils.ts         # Utility functions
└── package.json
```

## License

Private - LaTour AI 