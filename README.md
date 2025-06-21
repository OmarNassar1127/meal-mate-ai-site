# MealMate AI Landing Page

A modern, responsive landing page for MealMate AI - an AI-powered meal planning mobile app.

## Features

### 🎨 Modern Design Elements
- **3D Interactive Components**: Mouse-tracking 3D transformations
- **Glassmorphism UI**: Frosted glass effects with backdrop blur
- **Animated Gradients**: Dynamic color transitions and movements
- **Dark Theme**: Sophisticated dark mode with vibrant accents
- **Micro-Animations**: Subtle movements that bring the UI to life

### 🚀 Interactive Features
- **Floating Action Buttons**: Appear on scroll for quick actions
- **Auto-rotating Testimonials**: Smooth carousel with indicators
- **Hover Effects**: Scale, glow, and gradient transitions
- **Parallax Backgrounds**: Mouse-responsive elements
- **Staggered Animations**: Sequential entrance animations

### 🛠️ Technical Features
- 🌐 Multi-language support (English & Dutch)
- 📱 Fully responsive design
- ⚡ Built with Next.js 14
- 🎨 Styled with Tailwind CSS
- 🎯 Modern, conversion-focused design
- ✨ Smooth animations and interactions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** JavaScript (no TypeScript)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
meal-mate-ai-site/
├── app/
│   ├── layout.js      # Root layout with metadata
│   └── page.js        # Home page
├── components/
│   ├── Navbar.js      # Navigation with language toggle
│   ├── Hero.js        # Hero section
│   ├── Features.js    # Features showcase
│   ├── Pricing.js     # Pricing plans
│   ├── Testimonials.js # User testimonials
│   ├── CTA.js         # Call to action
│   └── Footer.js      # Footer section
├── lib/
│   ├── translations.js    # All translations (EN/NL)
│   └── LanguageContext.js # Language state management
├── public/            # Static assets
└── styles/
    └── globals.css    # Global styles & Tailwind imports
```

## Key Features Implemented

1. **Language Switching**: Toggle between English and Dutch with persistent storage
2. **Responsive Navigation**: Mobile-friendly hamburger menu
3. **Modern Design**: Gradient backgrounds, card-based layouts, smooth animations
4. **Performance**: Optimized for fast loading and smooth scrolling
5. **SEO Ready**: Meta tags and semantic HTML structure

## Customization

### Adding Images

Replace the placeholder image references in the components:
- `/hero-mockup.png` - App mockup for hero section
- `/app-store.svg` - App Store download button
- `/google-play.svg` - Google Play download button
- `/og-image.png` - Open Graph image for social sharing

### Modifying Content

All text content is stored in `/lib/translations.js`. Update the translations object to change any text on the site.

### Styling

The color scheme uses Tailwind's teal palette. You can modify colors in `tailwind.config.js`.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.