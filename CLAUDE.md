# Digital VisionWorks - Project Configuration

## Project Overview

**Digital VisionWorks LLC** is a premium software development agency landing page.

- **Live Site:** https://digitalvisionworks.vercel.app
- **GitHub:** https://github.com/djtroymx1/Digital-VisionWorks
- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion

## Quick Reference

### Key Files
- `App.tsx` - Root application component
- `components/LandingSections.tsx` - All page sections (Hero, Services, Portfolio, etc.)
- `components/Layout.tsx` - Navbar and Footer
- `components/UI.tsx` - Reusable UI components (Button, Card, animations)
- `index.html` - HTML template with meta tags
- `vite.config.ts` - Build configuration

### Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

### Deployment
Push to `main` branch → GitHub → Vercel auto-deploys

---

## Available Skills

This project has 11 custom skills that are automatically triggered based on your requests:

### Design & Styling

| Skill | Trigger Keywords | Purpose |
|-------|-----------------|---------|
| **frontend-design** | "design", "UI", "styling", "look better", "visual", "aesthetic" | Create distinctive interfaces avoiding generic AI aesthetics |
| **theme-factory** | "theme", "colors", "styling", "brand", "consistent" | Apply DigitalVisionWorks dark/cyan theme |
| **animation-library** | "animate", "motion", "transition", "framer", "scroll effect" | Framer Motion presets and animation patterns |

### Development

| Skill | Trigger Keywords | Purpose |
|-------|-----------------|---------|
| **artifacts-builder** | "build section", "create component", "new feature" | Generate multi-component React artifacts |
| **component-gen** | "scaffold", "boilerplate", "generate component" | Create component files with TypeScript |
| **react-quality** | "code review", "best practices", "TypeScript", "anti-pattern" | Enforce React/TS quality standards |

### Quality & Testing

| Skill | Trigger Keywords | Purpose |
|-------|-----------------|---------|
| **design-audit** | "audit", "accessibility", "WCAG", "a11y", "contrast" | Check UI/UX and accessibility compliance |
| **webapp-testing** | "test", "verify", "screenshot", "form works" | Browser-based UI testing |

### Optimization

| Skill | Trigger Keywords | Purpose |
|-------|-----------------|---------|
| **image-enhancer** | "optimize images", "lazy load", "WebP", "performance" | Image optimization and formats |
| **seo-optimizer** | "SEO", "meta tags", "sitemap", "Open Graph" | Search engine optimization |

### Deployment

| Skill | Trigger Keywords | Purpose |
|-------|-----------------|---------|
| **vercel-deploy** | "deploy", "push", "commit", "Vercel", "production" | Git and Vercel deployment workflow |

---

## Design System

### Brand Colors
```
Background:   #0a0a0a (primary), #050505 (darker), #1a1a1a (elevated)
Accent:       #06b6d4 (cyan-500), #22d3ee (cyan-400)
Text:         #ffffff (primary), #a1a1aa (secondary), #71717a (muted)
Borders:      rgba(255,255,255,0.1) subtle, rgba(255,255,255,0.2) hover
```

### Typography
- **Font:** Manrope (Google Fonts)
- **Weights:** 400 (body), 600 (subheadings), 700-800 (headings)

### Component Patterns
```tsx
// Primary Button
className="bg-cyan-500 text-black font-bold px-8 py-4 hover:bg-cyan-400"

// Secondary Button
className="border border-white/20 text-white hover:border-cyan-500"

// Card
className="bg-[#111111] border border-white/10 rounded-sm p-6"

// Section
className="py-32 px-6 md:px-12 lg:px-24"
```

---

## Coding Standards

### Always Follow
1. **Use TypeScript** - All components must be typed
2. **Use unique keys** - Never use array index as React key
3. **Add ARIA labels** - All interactive elements need accessibility
4. **Follow the theme** - Use colors from Theme Factory skill
5. **Support reduced motion** - Check `prefers-reduced-motion`
6. **Add focus states** - Visible focus rings on interactive elements

### Component Template
```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### Avoid
- Generic fonts (Inter, Roboto, Arial)
- Purple/blue gradient clichés
- `any` types in TypeScript
- `dangerouslySetInnerHTML`
- Inline styles (use Tailwind)
- Console.log in production code

---

## Current Issues (Audit Results)

### Critical (Fix First)
- [ ] Missing ARIA labels on mobile menu
- [ ] No skip-to-content link
- [ ] Form labels not associated with inputs
- [ ] Missing meta description and OG tags
- [ ] React keys using array index
- [ ] No Error Boundary

### High Priority
- [ ] Tailwind loaded via CDN (should be build-time)
- [ ] Images lack lazy loading
- [ ] No focus states on buttons
- [ ] TypeScript strict mode disabled

---

## Skill Usage Examples

### "Make the hero section more visually striking"
→ Triggers: `frontend-design`, `theme-factory`, `animation-library`

### "Add a new testimonials section"
→ Triggers: `artifacts-builder`, `component-gen`, `theme-factory`

### "Check if the site is accessible"
→ Triggers: `design-audit`

### "Review the code quality"
→ Triggers: `react-quality`

### "Optimize the images for performance"
→ Triggers: `image-enhancer`

### "Add SEO meta tags"
→ Triggers: `seo-optimizer`

### "Deploy the changes to production"
→ Triggers: `vercel-deploy`

---

## File Structure

```
Digital-VisionWorks-main/
├── .claude/
│   └── skills/           # 11 custom skills
│       ├── frontend-design/
│       ├── theme-factory/
│       ├── artifacts-builder/
│       ├── design-audit/
│       ├── webapp-testing/
│       ├── react-quality/
│       ├── vercel-deploy/
│       ├── component-gen/
│       ├── image-enhancer/
│       ├── seo-optimizer/
│       └── animation-library/
├── components/
│   ├── LandingSections.tsx
│   ├── Layout.tsx
│   └── UI.tsx
├── public/
│   └── images/           # AI-generated images
├── scripts/
│   └── generateImages.js # Gemini API image generation
├── App.tsx
├── index.tsx
├── index.html
├── CLAUDE.md             # This file
├── vite.config.ts
├── tsconfig.json
└── package.json
```
