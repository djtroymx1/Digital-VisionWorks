---
name: artifacts-builder
description: Creates elaborate, multi-component React artifacts using modern frontend technologies (React, Tailwind CSS, Framer Motion). Use when building new pages, sections, or complex component hierarchies. Triggers on requests for new features, landing sections, or UI components.
---

# Artifacts Builder Skill

Create production-ready, multi-component React artifacts using the DigitalVisionWorks tech stack.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build**: Vite

## Component Architecture

### File Structure
```
components/
├── sections/           # Page sections (Hero, Services, etc.)
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── ui/                 # Reusable UI primitives
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── layout/            # Layout components
│   ├── Navbar.tsx
│   └── Footer.tsx
└── shared/            # Shared utilities
    ├── AnimatedSection.tsx
    └── Container.tsx
```

### Component Template

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentNameProps {
  // Define props with TypeScript
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      {children}
    </motion.div>
  );
};
```

## Building Sections

### Section Container Pattern

```tsx
<section id="section-id" className="relative py-32 overflow-hidden">
  {/* Background Layer */}
  <div className="absolute inset-0 bg-[#0a0a0a]">
    {/* Optional: Background image, gradient, or effects */}
  </div>

  {/* Content Layer */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
    {/* Section content */}
  </div>
</section>
```

### Hero Section Pattern

```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl px-6">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
    >
      Your Headline Here
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-6 text-xl text-gray-400"
    >
      Supporting text goes here.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-10 flex gap-4 justify-center"
    >
      <Button variant="primary">Primary CTA</Button>
      <Button variant="secondary">Secondary CTA</Button>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
      />
    </div>
  </motion.div>
</section>
```

### Grid Section Pattern

```tsx
<section className="py-32 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Section Title
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Section description text.
      </p>
    </motion.div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#111111] border border-white/10 rounded-sm p-6
                     hover:border-white/20 transition-all duration-300"
        >
          {/* Card content */}
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

## Building UI Components

### Button Component

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}) => {
  const baseStyles = `
    relative px-8 py-4 font-bold tracking-wide uppercase
    transition-all duration-300 rounded-sm inline-block text-center
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-cyan-500 focus-visible:ring-offset-2
    focus-visible:ring-offset-black
  `;

  const variants = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400',
    secondary: 'border border-white/20 text-white hover:border-cyan-500 hover:text-cyan-400',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
};
```

### Card Component

```tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-[#111111] border border-white/10',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  };

  return (
    <div className={`rounded-sm p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
```

### Input Component

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-semibold text-gray-400 uppercase tracking-wider"
      >
        {label}
        {props.required && <span className="text-cyan-400 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        className={`
          w-full bg-[#0a0a0a] border p-4 text-white rounded-sm
          transition-all duration-300
          focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500
          ${error ? 'border-red-500' : 'border-white/10 hover:border-white/20'}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
};
```

## Animation Presets

### Fade In Up
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### Stagger Container
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Scale on Hover
```tsx
const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.3 }
};
```

## Best Practices

1. **Use semantic HTML** - section, article, nav, header, footer, main
2. **Add unique keys** - Never use array index as key
3. **Include ARIA labels** - For all interactive elements
4. **Implement focus states** - Visible focus rings
5. **Support reduced motion** - Check `prefers-reduced-motion`
6. **Optimize images** - Use lazy loading, proper alt text
7. **Follow the theme** - Use Theme Factory colors/typography
8. **Type everything** - Full TypeScript coverage
