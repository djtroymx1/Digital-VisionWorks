---
name: seo-optimizer
description: Implements SEO best practices including meta tags, structured data, sitemaps, and search optimization. Use when improving search visibility, adding meta tags, creating sitemaps, or implementing structured data. Triggers on SEO requests, meta tag additions, or search optimization needs.
---

# SEO Optimizer Skill

Implement comprehensive SEO for maximum search engine visibility.

## Project SEO Configuration

### Site Information
- **URL**: https://digitalvisionworks.vercel.app
- **Business**: Digital VisionWorks LLC
- **Type**: Software Development Agency
- **Location**: [Add location]

## Essential Meta Tags

### index.html Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>Digital VisionWorks | Premium Software Development Agency</title>
  <meta name="title" content="Digital VisionWorks | Premium Software Development Agency">
  <meta name="description" content="Build smarter. Launch faster. Premium software development agency specializing in web applications, mobile apps, cloud solutions, and AI integration.">
  <meta name="keywords" content="software development, web development, mobile apps, cloud solutions, AI integration, custom software, digital agency">
  <meta name="author" content="Digital VisionWorks LLC">
  <meta name="robots" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://digitalvisionworks.vercel.app/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://digitalvisionworks.vercel.app/">
  <meta property="og:title" content="Digital VisionWorks | Premium Software Development Agency">
  <meta property="og:description" content="Build smarter. Launch faster. Premium software development agency specializing in web applications, mobile apps, cloud solutions, and AI integration.">
  <meta property="og:image" content="https://digitalvisionworks.vercel.app/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Digital VisionWorks">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://digitalvisionworks.vercel.app/">
  <meta name="twitter:title" content="Digital VisionWorks | Premium Software Development Agency">
  <meta name="twitter:description" content="Build smarter. Launch faster. Premium software development agency specializing in web applications, mobile apps, cloud solutions, and AI integration.">
  <meta name="twitter:image" content="https://digitalvisionworks.vercel.app/images/og-image.png">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <!-- Theme Color -->
  <meta name="theme-color" content="#0a0a0a">
  <meta name="msapplication-TileColor" content="#0a0a0a">
</head>
```

## Structured Data (JSON-LD)

### Organization Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital VisionWorks LLC",
  "url": "https://digitalvisionworks.vercel.app",
  "logo": "https://digitalvisionworks.vercel.app/images/logo.png",
  "description": "Premium software development agency specializing in web applications, mobile apps, cloud solutions, and AI integration.",
  "sameAs": [
    "https://twitter.com/digitalvisionworks",
    "https://linkedin.com/company/digitalvisionworks",
    "https://github.com/digitalvisionworks"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@digitalvisionworks.com"
  }
}
</script>
```

### Local Business Schema (if applicable)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Digital VisionWorks LLC",
  "image": "https://digitalvisionworks.vercel.app/images/logo.png",
  "url": "https://digitalvisionworks.vercel.app",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "ST",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "priceRange": "$$$",
  "openingHours": "Mo-Fr 09:00-17:00"
}
</script>
```

### Service Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Digital VisionWorks LLC"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions"
        }
      }
    ]
  }
}
</script>
```

## robots.txt

```
# /public/robots.txt

User-agent: *
Allow: /

# Sitemap
Sitemap: https://digitalvisionworks.vercel.app/sitemap.xml

# Disallow development/admin areas (if any)
# Disallow: /admin/
# Disallow: /api/
```

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://digitalvisionworks.vercel.app/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://digitalvisionworks.vercel.app/#services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://digitalvisionworks.vercel.app/#portfolio</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://digitalvisionworks.vercel.app/#about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://digitalvisionworks.vercel.app/#contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## manifest.json (PWA)

```json
{
  "name": "Digital VisionWorks",
  "short_name": "DVW",
  "description": "Premium Software Development Agency",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#06b6d4",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Heading Hierarchy

Ensure proper heading structure:

```
h1: Digital VisionWorks (only one per page)
├── h2: Services
│   └── h3: Individual service titles
├── h2: Why Choose Us
│   └── h3: Benefit titles
├── h2: Portfolio
│   └── h3: Project titles
├── h2: Our Process
│   └── h3: Step titles
├── h2: About Us
└── h2: Contact Us
```

## SEO Checklist

### Technical SEO
- [ ] Page title unique and descriptive (50-60 chars)
- [ ] Meta description compelling (150-160 chars)
- [ ] Canonical URL set
- [ ] robots.txt in place
- [ ] sitemap.xml created and submitted
- [ ] SSL certificate active (HTTPS)
- [ ] Mobile-friendly design
- [ ] Fast page load speed (<3s)

### On-Page SEO
- [ ] One H1 per page
- [ ] Heading hierarchy logical
- [ ] Images have alt text
- [ ] Internal links present
- [ ] External links have rel="noopener"
- [ ] Content is original and valuable

### Social SEO
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] OG image is 1200x630px
- [ ] Preview tested on social platforms

### Local SEO (if applicable)
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Google Business Profile claimed
- [ ] Local schema markup added
- [ ] Location pages if multiple locations

## Testing Tools

- **Google Search Console**: Indexing and search performance
- **Google Rich Results Test**: Structured data validation
- **Facebook Sharing Debugger**: OG tags preview
- **Twitter Card Validator**: Twitter cards preview
- **PageSpeed Insights**: Performance metrics
- **Mobile-Friendly Test**: Responsive validation

## OG Image Guidelines

Create `/public/images/og-image.png`:
- Size: 1200x630px
- Include: Logo, tagline, visual branding
- Text: Large, readable at small sizes
- Contrast: Ensure visibility on any background
