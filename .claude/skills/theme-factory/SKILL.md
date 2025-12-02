---
name: theme-factory
description: Applies the DigitalVisionWorks professional theme to components, pages, and artifacts. Use when creating new UI elements, ensuring visual consistency, or styling components. Triggers on theming requests, style consistency checks, or new component creation.
---

# Theme Factory Skill

Apply the official DigitalVisionWorks theme for consistent, premium visual identity across all components.

## DigitalVisionWorks Theme

### Brand Identity
- **Style**: Premium dark-mode, tech-forward, sophisticated
- **Tone**: Professional yet bold, innovative, trustworthy
- **Industry**: Software development agency

### Color Palette

```css
:root {
  /* Backgrounds */
  --dvw-bg-primary: #0a0a0a;
  --dvw-bg-secondary: #050505;
  --dvw-bg-elevated: #1a1a1a;
  --dvw-bg-card: #111111;

  /* Accent Colors */
  --dvw-accent: #06b6d4;           /* cyan-500 */
  --dvw-accent-light: #22d3ee;     /* cyan-400 */
  --dvw-accent-dark: #0891b2;      /* cyan-600 */
  --dvw-accent-glow: rgba(6, 182, 212, 0.1);

  /* Text Colors */
  --dvw-text-primary: #ffffff;
  --dvw-text-secondary: #a1a1aa;   /* gray-400 */
  --dvw-text-muted: #71717a;       /* gray-500 */
  --dvw-text-accent: #06b6d4;

  /* Borders */
  --dvw-border-subtle: rgba(255, 255, 255, 0.1);
  --dvw-border-accent: rgba(6, 182, 212, 0.3);

  /* Gradients */
  --dvw-gradient-accent: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  --dvw-gradient-glow: radial-gradient(800px circle, rgba(6, 182, 212, 0.1), transparent 40%);
}
```

### Typography

**Font Family**: Manrope (Google Fonts)
```css
font-family: 'Manrope', sans-serif;
```

**Font Weights**:
- 200: Extra Light (decorative)
- 300: Light (secondary text)
- 400: Regular (body text)
- 500: Medium (UI elements)
- 600: Semi Bold (subheadings)
- 700: Bold (headings)
- 800: Extra Bold (hero text)

**Type Scale**:
```css
--dvw-text-xs: 0.75rem;    /* 12px */
--dvw-text-sm: 0.875rem;   /* 14px */
--dvw-text-base: 1rem;     /* 16px */
--dvw-text-lg: 1.125rem;   /* 18px */
--dvw-text-xl: 1.25rem;    /* 20px */
--dvw-text-2xl: 1.5rem;    /* 24px */
--dvw-text-3xl: 1.875rem;  /* 30px */
--dvw-text-4xl: 2.25rem;   /* 36px */
--dvw-text-5xl: 3rem;      /* 48px */
--dvw-text-6xl: 3.75rem;   /* 60px */
--dvw-text-7xl: 4.5rem;    /* 72px */
```

### Tailwind CSS Classes

**Backgrounds**:
```
bg-[#0a0a0a]  - Primary background
bg-[#050505]  - Footer/darker sections
bg-[#1a1a1a]  - Elevated surfaces
bg-[#111111]  - Card backgrounds
```

**Text**:
```
text-white           - Primary text
text-gray-400        - Secondary text
text-gray-500        - Muted text
text-cyan-400        - Accent text (links, highlights)
text-cyan-500        - Accent text (buttons)
```

**Borders**:
```
border-white/10      - Subtle borders
border-white/20      - Hover borders
border-cyan-500      - Accent borders
border-cyan-500/30   - Subtle accent borders
```

**Effects**:
```
backdrop-blur-xl     - Glassmorphism
bg-white/5           - Glass background
shadow-2xl           - Elevated shadows
```

### Component Patterns

**Primary Button**:
```tsx
className="bg-cyan-500 text-black font-bold px-8 py-4
           hover:bg-cyan-400 transition-all duration-300
           uppercase tracking-wide rounded-sm"
```

**Secondary Button**:
```tsx
className="border border-white/20 text-white px-8 py-4
           hover:border-cyan-500 hover:text-cyan-400
           transition-all duration-300 uppercase tracking-wide rounded-sm"
```

**Card**:
```tsx
className="bg-[#111111] border border-white/10 rounded-sm p-6
           hover:border-white/20 transition-all duration-300"
```

**Glass Card**:
```tsx
className="bg-white/5 backdrop-blur-xl border border-white/10
           rounded-sm p-6"
```

**Section Container**:
```tsx
className="py-32 px-6 md:px-12 lg:px-24"
```

**Gradient Text**:
```tsx
className="bg-gradient-to-r from-white to-cyan-400
           bg-clip-text text-transparent"
```

### Animation Patterns

**Fade In Up**:
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Stagger Children**:
```tsx
transition={{ staggerChildren: 0.1 }}
```

**Hover Scale**:
```tsx
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.3 }}
```

**Viewport Trigger**:
```tsx
viewport={{ once: true }}
```

### Spacing System

Follow Tailwind's spacing scale:
- `p-4` / `m-4` = 1rem (16px)
- `p-6` / `m-6` = 1.5rem (24px)
- `p-8` / `m-8` = 2rem (32px)
- `p-12` / `m-12` = 3rem (48px)
- `p-24` / `m-24` = 6rem (96px)
- `p-32` / `m-32` = 8rem (128px)

**Section Spacing**: `py-32` (128px vertical padding)
**Container Padding**: `px-6 md:px-12 lg:px-24`
**Card Padding**: `p-6` or `p-8`
**Grid Gaps**: `gap-6` or `gap-8`

### Visual Effects

**Mouse Follow Glow**:
```tsx
style={{
  background: `radial-gradient(800px circle at ${x}px ${y}px,
               rgba(6, 182, 212, 0.1), transparent 40%)`
}}
```

**Noise Overlay**:
```tsx
<svg className="w-full h-full opacity-[0.05]">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>
```

**Floating Orbs**:
```tsx
className="absolute w-96 h-96 rounded-full
           bg-cyan-500/10 blur-3xl pointer-events-none"
```

### Usage Guidelines

1. **Always use the defined color variables** - Never introduce new colors
2. **Maintain consistent spacing** - Use the spacing system
3. **Follow typography hierarchy** - Use appropriate font weights
4. **Apply animations consistently** - Use the animation patterns
5. **Ensure accessibility** - Maintain color contrast ratios

### Accessibility Notes

- Text contrast: white on #0a0a0a = 19.6:1 (AAA)
- Cyan text on dark: #06b6d4 on #0a0a0a = 8.6:1 (AAA)
- Gray text: #a1a1aa on #0a0a0a = 7.1:1 (AA)
- Always provide focus states for interactive elements
- Support `prefers-reduced-motion` for animations
