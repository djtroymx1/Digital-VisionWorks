---
name: animation-library
description: Provides Framer Motion animation presets, CSS animations, and motion design patterns for the DigitalVisionWorks site. Use when adding animations, creating transitions, or implementing scroll effects. Triggers on animation requests, motion design needs, or transition implementations.
---

# Animation Library Skill

Create smooth, performant animations using Framer Motion and CSS for the DigitalVisionWorks website.

## Framer Motion Presets

### Basic Transitions

#### Fade In
```tsx
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};
```

#### Fade In Up
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

#### Fade In Down
```tsx
const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

#### Fade In Left
```tsx
const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};
```

#### Fade In Right
```tsx
const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};
```

#### Scale In
```tsx
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};
```

### Stagger Animations

#### Stagger Container
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
```

#### Stagger Item
```tsx
const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

#### Usage Example
```tsx
<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-Triggered Animations

#### Viewport Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Content appears when scrolled into view
</motion.div>
```

#### Parallax Effect
```tsx
import { useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div style={{ y }}>
      Parallax content
    </motion.div>
  );
};
```

### Hover Animations

#### Scale on Hover
```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  Hover me
</motion.div>
```

#### Lift on Hover
```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3 }}
>
  Hover to lift
</motion.div>
```

#### Color Change on Hover
```tsx
<motion.div
  whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
  transition={{ duration: 0.3 }}
>
  Hover for color
</motion.div>
```

### Tap/Click Animations

#### Scale on Tap
```tsx
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1 }}
>
  Click me
</motion.button>
```

### Spring Animations

#### Bouncy Spring
```tsx
const bouncySpring = {
  type: 'spring',
  stiffness: 400,
  damping: 10
};
```

#### Smooth Spring
```tsx
const smoothSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 20
};
```

#### Snappy Spring
```tsx
const snappySpring = {
  type: 'spring',
  stiffness: 700,
  damping: 25
};
```

### Text Animations

#### Text Reveal
```tsx
const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99]
  }
};
```

#### Character Stagger
```tsx
const TextStagger: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: { staggerChildren: 0.03 }
        }
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
```

## CSS Animations

### Keyframes

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

#### Shimmer
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-shimmer {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
```

#### Spin
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

### Tailwind Animation Classes

```css
/* In your CSS or tailwind.config.js */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out forwards;
}
```

## Reduced Motion Support

### CSS
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### React Hook
```tsx
import { useReducedMotion } from 'framer-motion';

const AnimatedComponent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      Content
    </motion.div>
  );
};
```

### Custom Hook
```tsx
const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();

  return {
    fadeInUp: shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },

    duration: shouldReduceMotion ? 0.1 : 0.6,

    stagger: shouldReduceMotion ? 0 : 0.1,
  };
};
```

## Animation Components

### AnimatedSection
```tsx
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### ScrollProgress
```tsx
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
```

## Performance Tips

1. **Use `transform` and `opacity`** - GPU-accelerated, won't trigger layout
2. **Avoid animating `width`, `height`, `margin`** - Triggers expensive reflows
3. **Use `will-change` sparingly** - Only on elements about to animate
4. **Prefer CSS for simple animations** - Less JavaScript overhead
5. **Use `viewport={{ once: true }}`** - Prevents re-animation on scroll
6. **Batch animations** - Use stagger containers instead of individual delays

## Animation Timing Reference

| Interaction | Duration | Easing |
|-------------|----------|--------|
| Micro-interaction | 100-200ms | ease-out |
| Button hover | 200-300ms | ease-in-out |
| Page transition | 300-500ms | ease-in-out |
| Modal open/close | 200-400ms | ease-out |
| Scroll reveal | 500-800ms | ease-out |
| Hero animation | 600-1000ms | custom cubic-bezier |

## Custom Easing

```tsx
// Smooth deceleration
const smoothEase = [0.4, 0, 0.2, 1];

// Quick start, slow end
const emphasisEase = [0.6, -0.05, 0.01, 0.99];

// Bouncy
const bouncyEase = [0.68, -0.55, 0.265, 1.55];
```
