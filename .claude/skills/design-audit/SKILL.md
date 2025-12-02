---
name: design-audit
description: Conducts comprehensive UI/UX and accessibility audits of React components and pages. Use when reviewing designs for quality, checking WCAG compliance, verifying responsive behavior, or validating color contrast. Triggers on audit requests, accessibility checks, or design reviews.
---

# Design Audit Skill

Perform comprehensive UI/UX and accessibility audits to ensure production-quality interfaces.

## Audit Categories

### 1. Accessibility (WCAG 2.1)

#### Level A (Minimum)
- [ ] **1.1.1 Non-text Content**: All images have meaningful alt text
- [ ] **1.3.1 Info and Relationships**: Form labels associated with inputs (htmlFor)
- [ ] **1.3.2 Meaningful Sequence**: Reading order is logical
- [ ] **2.1.1 Keyboard**: All functionality available via keyboard
- [ ] **2.1.2 No Keyboard Trap**: Focus can move freely
- [ ] **2.4.1 Bypass Blocks**: Skip-to-content link present
- [ ] **2.4.2 Page Titled**: Descriptive page title exists
- [ ] **2.4.4 Link Purpose**: Link text describes destination
- [ ] **3.1.1 Language**: Page has lang attribute
- [ ] **4.1.1 Parsing**: Valid HTML structure
- [ ] **4.1.2 Name, Role, Value**: ARIA labels on custom controls

#### Level AA (Target)
- [ ] **1.4.3 Contrast (Minimum)**: 4.5:1 for normal text, 3:1 for large text
- [ ] **1.4.4 Resize Text**: Works at 200% zoom
- [ ] **1.4.11 Non-text Contrast**: 3:1 for UI components
- [ ] **2.4.6 Headings and Labels**: Descriptive headings
- [ ] **2.4.7 Focus Visible**: Clear focus indicators
- [ ] **3.2.3 Consistent Navigation**: Navigation is consistent

### 2. Interactive Elements

#### Buttons
- [ ] Has visible focus state
- [ ] Has hover state
- [ ] Has aria-label if icon-only
- [ ] Touch target minimum 44x44px
- [ ] Disabled state is clear

#### Links
- [ ] Distinguishable from regular text
- [ ] External links indicated (icon or text)
- [ ] Has focus state
- [ ] Opens in new tab has warning

#### Forms
- [ ] Labels associated with inputs
- [ ] Required fields indicated
- [ ] Error messages accessible
- [ ] Success feedback provided
- [ ] Validation is clear

### 3. Color & Contrast

#### Contrast Ratios
| Element | Minimum Ratio | Target |
|---------|--------------|--------|
| Body text | 4.5:1 | 7:1 (AAA) |
| Large text (18pt+) | 3:1 | 4.5:1 |
| UI components | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | 4.5:1 |

#### Color Blindness
- [ ] Information not conveyed by color alone
- [ ] Works in grayscale
- [ ] Test with color blindness simulators

### 4. Typography

- [ ] Font size minimum 16px for body
- [ ] Line height minimum 1.5
- [ ] Paragraph max-width ~65-75 characters
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] No skipped heading levels
- [ ] Font is readable and accessible

### 5. Responsive Design

#### Breakpoints to Test
- 320px (small mobile)
- 375px (iPhone)
- 768px (tablet)
- 1024px (small desktop)
- 1280px (desktop)
- 1536px (large desktop)

#### Checklist
- [ ] No horizontal scroll
- [ ] Touch targets adequate size
- [ ] Text readable without zoom
- [ ] Images scale appropriately
- [ ] Navigation works on mobile
- [ ] Forms usable on mobile

### 6. Motion & Animation

- [ ] Respects `prefers-reduced-motion`
- [ ] No auto-playing video
- [ ] Animations can be paused
- [ ] No flashing content (seizure risk)
- [ ] Motion is purposeful, not distracting

### 7. Images & Media

- [ ] All images have alt text
- [ ] Decorative images have empty alt=""
- [ ] Images have explicit dimensions
- [ ] Lazy loading implemented
- [ ] WebP/modern formats used
- [ ] Responsive images (srcset)

### 8. Performance

- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms
- [ ] No render-blocking resources
- [ ] Images optimized

## Audit Process

### Step 1: Automated Testing
Run these tools:
- axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- WAVE (browser extension)
- pa11y (CLI)

### Step 2: Manual Testing
1. **Keyboard Navigation**
   - Tab through entire page
   - Verify focus order is logical
   - Test Enter/Space on interactive elements
   - Test Escape to close modals

2. **Screen Reader**
   - Test with NVDA (Windows)
   - Test with VoiceOver (Mac)
   - Verify content reads logically
   - Check ARIA labels

3. **Visual Inspection**
   - Check color contrast
   - Verify responsive layouts
   - Test at 200% zoom
   - Check in Windows High Contrast mode

### Step 3: Device Testing
- Test on real mobile devices
- Test on different browsers
- Test on different OS

## Scoring System

### Category Scores (0-100)

| Score | Rating | Action |
|-------|--------|--------|
| 90-100 | Excellent | Minor refinements |
| 70-89 | Good | Address high priority |
| 50-69 | Needs Work | Significant fixes needed |
| 0-49 | Critical | Immediate action required |

### Priority Levels

- **P0 (Critical)**: Blocks users, legal risk
- **P1 (High)**: Major usability issue
- **P2 (Medium)**: Moderate impact
- **P3 (Low)**: Minor enhancement

## Report Template

```markdown
# Design Audit Report

## Summary
- **Overall Score**: XX/100
- **Critical Issues**: X
- **High Priority**: X
- **Medium Priority**: X
- **Low Priority**: X

## Category Scores
- Accessibility: XX/100
- Color & Contrast: XX/100
- Typography: XX/100
- Responsive: XX/100
- Performance: XX/100

## Critical Issues (P0)
1. [Issue description]
   - File: `path/to/file.tsx`
   - Line: XX
   - Fix: [Recommended fix]

## High Priority (P1)
...

## Recommendations
1. [Recommendation]
2. [Recommendation]

## Tools Used
- axe DevTools vX.X
- Lighthouse vX.X
- Manual testing
```

## Common Issues & Fixes

### Missing ARIA Label
```tsx
// Before
<button onClick={toggle}><Menu /></button>

// After
<button onClick={toggle} aria-label="Open navigation menu">
  <Menu />
</button>
```

### Missing Form Association
```tsx
// Before
<label>Email</label>
<input type="email" />

// After
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Missing Focus State
```tsx
// Before
className="bg-cyan-500 text-black"

// After
className="bg-cyan-500 text-black focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-cyan-400"
```

### Missing Skip Link
```tsx
// Add at top of page
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4
             focus:left-4 focus:z-50 focus:bg-cyan-500 focus:text-black
             focus:px-4 focus:py-2"
>
  Skip to main content
</a>
```

### Missing Reduced Motion
```tsx
// Add to animations
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Or in CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```
