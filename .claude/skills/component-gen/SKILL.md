---
name: component-gen
description: Generates React component boilerplate following DigitalVisionWorks conventions. Use when creating new components, sections, or UI elements. Triggers on component creation requests, new feature implementations, or scaffolding needs.
---

# Component Generator Skill

Generate production-ready React components following DigitalVisionWorks standards and conventions.

## Component Templates

### Basic UI Component

```tsx
import React from 'react';

interface ComponentNameProps {
  children: React.ReactNode;
  className?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};
```

### Animated UI Component

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentNameProps {
  children: React.ReactNode;
  className?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
```

### Section Component

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionNameProps {
  id?: string;
}

export const SectionName: React.FC<SectionNameProps> = ({
  id = 'section-name',
}) => {
  return (
    <section id={id} className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background (optional) */}
      <div className="absolute inset-0">
        {/* Background content */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
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
            Section description goes here.
          </p>
        </motion.div>

        {/* Section Content */}
        <div>
          {/* Content here */}
        </div>
      </div>
    </section>
  );
};
```

### Interactive Component (with state)

```tsx
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface InteractiveComponentProps {
  initialValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const InteractiveComponent: React.FC<InteractiveComponentProps> = ({
  initialValue = '',
  onChange,
  className = '',
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  }, [onChange]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className}`}
    >
      {/* Interactive content */}
    </motion.div>
  );
};
```

### Form Component

```tsx
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormComponentProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(formData);
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
    >
      {/* Form fields */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2"
        >
          Name <span className="text-cyan-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full bg-[#0a0a0a] border p-4 text-white rounded-sm
            transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500
            ${errors.name ? 'border-red-500' : 'border-white/10 hover:border-white/20'}`}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-cyan-500 text-black font-bold px-8 py-4 uppercase tracking-wide
          hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
};
```

### Card Component

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  href,
  className = '',
}) => {
  const CardWrapper = href ? motion.a : motion.div;
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`block bg-[#111111] border border-white/10 rounded-sm p-6
        hover:border-white/20 transition-colors ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-cyan-500/10 rounded-sm flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardWrapper>
  );
};
```

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `Button.tsx`, `HeroSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `types.ts` or `ComponentName.types.ts`
- Tests: `ComponentName.test.tsx`

### Components
- Use PascalCase for component names
- Use descriptive, specific names
- Prefix with category if needed (e.g., `FormInput`, `CardGrid`)

### Props
- Use camelCase for prop names
- Suffix event handlers with handler action (e.g., `onClick`, `onSubmit`)
- Use descriptive names (avoid abbreviations)

## Required Elements

### Every Component Should Have:
1. TypeScript interface for props
2. Default values for optional props
3. Proper className prop for customization
4. Accessibility attributes where needed
5. Focus states for interactive elements

### Every Section Should Have:
1. Unique `id` attribute for navigation
2. Semantic heading hierarchy
3. Responsive padding/margins
4. Motion animations with `viewport={{ once: true }}`

## File Organization

```
components/
├── ui/                    # Reusable UI primitives
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── index.ts          # Barrel export
├── sections/             # Page sections
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── index.ts
├── layout/               # Layout components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── index.ts
└── shared/               # Shared/utility components
    ├── AnimatedSection.tsx
    ├── Container.tsx
    └── index.ts
```

## Export Pattern

```tsx
// components/ui/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card } from './Card';
export type { CardProps } from './Card';
```

## Checklist for New Components

- [ ] Props interface defined
- [ ] Default props set
- [ ] className prop supported
- [ ] TypeScript types complete
- [ ] Accessibility attributes added
- [ ] Focus states implemented
- [ ] Animation added (if applicable)
- [ ] Responsive styles applied
- [ ] Theme colors used
- [ ] Exported from index
