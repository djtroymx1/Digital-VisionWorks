---
name: frontend-design
description: Creates distinctive, production-grade web interfaces that avoid generic AI aesthetics. Use when building components, pages, or applications that need bold, intentional design with character. Triggers on requests for UI design, component styling, landing pages, or visual improvements.
---

# Frontend Design Skill

Create distinctive, production-grade frontend interfaces that stand out from generic AI-generated designs.

## Design Thinking Process

Before writing any code, establish a bold aesthetic direction:

### 1. Purpose
- What problem does this solve?
- Who is the target audience?
- What emotion should it evoke?

### 2. Tone
Commit to an extreme direction. Options include:
- **Brutalist**: Raw, unpolished, intentionally rough
- **Maximalist**: Rich, layered, visually dense
- **Retro-futuristic**: Nostalgic tech meets modern
- **Organic**: Natural, flowing, biomorphic
- **Luxury**: Premium, refined, sophisticated
- **Playful**: Fun, energetic, whimsical
- **Editorial**: Magazine-style, typographic
- **Art Deco**: Geometric, glamorous, bold
- **Industrial**: Mechanical, utilitarian, stark
- **Soft/Dreamy**: Gentle, ethereal, calming

### 3. Constraints
- Technical requirements (React, Tailwind, etc.)
- Performance budgets
- Accessibility requirements
- Browser support needs

### 4. Differentiation
- What makes this unforgettable?
- What's the "signature element"?
- How does it break expectations?

## Implementation Guidelines

### Typography

**DO:**
- Choose fonts that are beautiful, unique, and interesting
- Pair a bold display font with a refined body font
- Use dramatic size contrasts (hero text vs body)
- Experiment with letter-spacing and line-height

**DON'T:**
- Use generic fonts: Inter, Roboto, Arial, Helvetica, Open Sans
- Default to system fonts without intention
- Use more than 2-3 font families

**Font Resources:**
- Google Fonts (curated selections)
- Adobe Fonts
- Font Squirrel
- Variable fonts for dynamic typography

### Color & Theme

**DO:**
- Commit to a cohesive color story
- Use CSS variables for theming
- Create dominant + accent color relationships
- Consider dark mode from the start

**DON'T:**
- Use clichéd purple/blue gradients
- Default to generic gray palettes
- Ignore color contrast for accessibility

**Color Approach:**
```css
:root {
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #1a1a1a;
  --color-accent: #06b6d4;
  --color-accent-hover: #22d3ee;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a1a1aa;
}
```

### Motion & Animation

**DO:**
- Focus on high-impact moments (page loads, transitions)
- Use orchestrated animations with staggered reveals
- Prefer CSS animations for performance
- Support `prefers-reduced-motion`

**DON'T:**
- Animate everything
- Use jarring or distracting motion
- Ignore users who prefer reduced motion

**Motion Principles:**
- Entrance animations: fade + slight transform
- Micro-interactions: subtle scale/color changes
- Page transitions: coordinated element choreography

### Spatial Composition

**DO:**
- Employ unexpected layouts
- Use asymmetry intentionally
- Create visual hierarchy through spacing
- Break the grid when it serves the design

**DON'T:**
- Default to symmetric, predictable layouts
- Use uniform spacing everywhere
- Ignore whitespace as a design element

**Layout Techniques:**
- Overlapping elements
- Diagonal flow
- Grid-breaking hero sections
- Varied section heights

### Visual Details & Atmosphere

**DO:**
- Create atmosphere through layered effects
- Use gradients, textures, and patterns
- Add depth with shadows and borders
- Consider grain/noise overlays for texture

**DON'T:**
- Leave backgrounds flat and boring
- Ignore the power of subtle details
- Over-apply effects until cluttered

**Atmosphere Elements:**
- Gradient backgrounds (subtle, not clichéd)
- Glassmorphism (frosted glass effects)
- Grain/noise textures
- Custom cursor effects
- Parallax scrolling

## What to Avoid

### Generic AI Aesthetics
- Overused typefaces (Inter, Roboto)
- Purple-to-blue gradients
- Predictable card layouts
- Cookie-cutter hero sections
- Generic stock imagery feel

### Common Mistakes
- Starting with code before design direction
- Copying trends without understanding them
- Inconsistent design language
- Ignoring mobile-first approach
- Forgetting accessibility

## Quality Checklist

Before considering the design complete:

- [ ] Typography is distinctive and intentional
- [ ] Color palette is cohesive and accessible
- [ ] Animations are smooth and purposeful
- [ ] Layout breaks expectations in interesting ways
- [ ] Details add atmosphere without clutter
- [ ] Mobile experience is equally considered
- [ ] Accessibility standards are met (WCAG AA)
- [ ] Performance is optimized
- [ ] The design has a clear "signature element"

## Key Principle

> "Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity."

Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code; minimalist designs require restraint and precision.
