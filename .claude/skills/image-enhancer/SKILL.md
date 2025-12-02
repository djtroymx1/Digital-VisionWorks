---
name: image-enhancer
description: Optimizes images for web performance including format conversion, lazy loading, responsive sizing, and quality enhancement. Use when adding new images, optimizing existing assets, or implementing image components. Triggers on image optimization requests, performance improvements, or asset management.
---

# Image Enhancer Skill

Optimize images for maximum web performance while maintaining visual quality.

## Image Optimization Strategies

### 1. Format Selection

| Format | Use Case | Browser Support |
|--------|----------|-----------------|
| WebP | Photos, general images | 97%+ |
| AVIF | High-quality photos | 85%+ |
| PNG | Transparency, graphics | 100% |
| SVG | Icons, logos, illustrations | 100% |
| JPEG | Photos (fallback) | 100% |

### Modern Format Strategy
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### 2. Responsive Images

```html
<!-- Responsive with srcset -->
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w,
    image-1600.jpg 1600w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Description"
>
```

### Breakpoint Guidelines
| Viewport | Image Width | Suggested Sizes |
|----------|-------------|-----------------|
| Mobile | 100vw | 400w, 800w |
| Tablet | 50-100vw | 800w, 1200w |
| Desktop | 33-50vw | 800w, 1200w, 1600w |
| Full-width | 100vw | 1200w, 1600w, 2400w |

### 3. Lazy Loading

```tsx
// Native lazy loading
<img
  src="image.jpg"
  alt="Description"
  loading="lazy"
  decoding="async"
/>

// React component with lazy loading
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
};
```

### 4. Placeholder Strategies

#### Blur-up Placeholder
```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressiveImageProps {
  src: string;
  placeholder: string;  // Tiny blurred version
  alt: string;
  className?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholder,
  alt,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
        aria-hidden="true"
      />

      {/* Full image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full object-cover"
      />
    </div>
  );
};
```

#### Skeleton Placeholder
```tsx
export const ImageWithSkeleton: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
```

### 5. Dimension Attributes

Always include width and height to prevent layout shift:

```tsx
<img
  src="image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"  // CSS overrides for responsive
/>
```

### 6. Alt Text Best Practices

| Image Type | Alt Text |
|------------|----------|
| Informative | Describe content and purpose |
| Decorative | Empty alt="" |
| Functional | Describe action |
| Complex | Detailed description or link to description |

**Examples:**
```tsx
// Informative
<img src="team.jpg" alt="Digital VisionWorks team collaborating in modern office" />

// Decorative
<img src="pattern.png" alt="" aria-hidden="true" />

// Functional (button/link)
<img src="arrow.svg" alt="View project details" />

// Background (decorative)
<div
  className="bg-cover"
  style={{ backgroundImage: `url(${bgImage})` }}
  role="presentation"
/>
```

## React Image Component

```tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;  // Disable lazy loading for above-fold
  overlay?: boolean;
  overlayOpacity?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  overlay = false,
  overlayOpacity = 0.5,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Preload priority images
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
    }
  }, [src, priority]);

  if (error) {
    return (
      <div className={`bg-[#1a1a1a] flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1a1a1a] ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[#222]" />
      )}

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05,
        }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover"
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
        />
      )}
    </div>
  );
};
```

## Image Optimization Checklist

### Before Adding Images
- [ ] Choose appropriate format (WebP preferred)
- [ ] Resize to maximum display size
- [ ] Compress without visible quality loss
- [ ] Create multiple sizes for responsive
- [ ] Generate tiny placeholder if using blur-up

### In Code
- [ ] Add width and height attributes
- [ ] Include descriptive alt text
- [ ] Use loading="lazy" for below-fold
- [ ] Use loading="eager" for above-fold
- [ ] Add decoding="async"

### Performance Targets
- [ ] Hero images < 200KB
- [ ] Content images < 100KB
- [ ] Thumbnails < 30KB
- [ ] Icons as SVG when possible

## Compression Tools

### Online Tools
- Squoosh (https://squoosh.app)
- TinyPNG (https://tinypng.com)
- ImageOptim (Mac app)

### Build-time Optimization
```bash
# Install vite-plugin-imagemin
npm install vite-plugin-imagemin -D
```

```ts
// vite.config.ts
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      webp: { quality: 80 },
      avif: { quality: 65 },
    }),
  ],
};
```

## Current Project Images

Located in `/public/images/`:
- hero-bg.png
- problem-speed.png
- problem-workspace.png
- service-*.png (6 images)
- why-us-sculpture.png
- portfolio-*.png (2 images)
- about-team.png
- contact-bg.png
- process-bg.png

### Optimization Recommendations
1. Convert all PNG to WebP
2. Add responsive variants (800w, 1200w, 1600w)
3. Create blur placeholders for hero images
4. Implement lazy loading for below-fold images
5. Add explicit dimensions to prevent CLS
