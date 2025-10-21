# Eat Different RD - Metabolic Health & Nutrition Therapy Website

Evidence-based nutrition therapy website for Eliana Witchell, MSc, RD, CDE - Chief Dietitian at the Institute for Personalized Therapeutic Nutrition.

## About

This website provides information about personalized nutrition therapy services for Type 2 Diabetes, Prediabetes, PCOS, and metabolic health. Built with Next.js 15, React 19, and Tailwind CSS v4.

## Live Demo

- **Development:** http://localhost:3001
- **Production:** [To be deployed]

## Tech Stack

- **Framework:** Next.js 15.1.6
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter, Libre Baskerville (Google Fonts)
- **Build Tool:** Turbopack
- **Language:** TypeScript
- **Animations:** Framer Motion

## Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at http://localhost:3001

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (site)/            # Main site pages
│   ├── globals.css        # Global styles with brand colors
│   └── providers.tsx      # Client-side providers
├── components/            # React components
│   ├── Hero/             # Homepage hero section
│   ├── About/            # About Eliana section
│   ├── Features/         # Evidence-based approach
│   ├── Footer/           # Site footer
│   └── Header/           # Navigation header
├── public/
│   └── images/           # Brand assets
│       ├── logo-with-text.png
│       ├── logo-no-text.png
│       └── eliana-headshot.webp
└── types/                # TypeScript definitions
```

## Features

### Completed

- ✅ Custom branding with Eat Different RD colors and logos
- ✅ Real content from existing eatdifferentrd.com website
- ✅ Professional headshot integration
- ✅ Evidence-based approach showcase (6 key points)
- ✅ Eliana's credentials and research partnerships
- ✅ Contact information and booking CTAs
- ✅ Social media integration
- ✅ Responsive design for all devices
- ✅ Dark mode support
- ✅ Hydration error fixes for browser extensions

### Pending

- ⏳ Full service descriptions with pricing
- ⏳ Individual client testimonials
- ⏳ Blog integration
- ⏳ Podcast showcase
- ⏳ Literature review section
- ⏳ Online course listings
- ⏳ Deployment to production

## Brand Colors

```css
--color-teal: #0d7680;        /* Primary brand color */
--color-sage: #6b9080;        /* Secondary/Meta color */
--color-terracotta: #e07a5f;  /* Accent color */
--color-coral: #f4a58a;       /* Accent color */
```

## Documentation

- [Content Extraction](./CONTENT-EXTRACTED.md) - All content from existing website
- [Migration Status](./MIGRATION-STATUS.md) - Completed vs pending work
- [Images Needed](./IMAGES-NEEDED.md) - Image asset documentation
- [Build Log](./BUILD_LOG.md) - Development history and decisions

## Contact & Social

- **Website:** https://eatdifferentrd.com
- **Email:** eliana@eatdifferentrd.com
- **Phone:** +1-647-456-7952
- **Booking:** https://eatdifferentrd.janeapp.com
- **Instagram:** @eatdifferentrd
- **Twitter:** @eatdifferentrd
- **LinkedIn:** Eliana Witchell, MSc, RD
- **Facebook:** eliana.witchell

## License

© 2025 Eat Different RD. All rights reserved.

## Credits

Built with Claude Code by Anthropic
Template: Solid NextJS by NextJSTemplates
