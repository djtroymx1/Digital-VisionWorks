---
name: webapp-testing
description: Tests local web applications using browser automation for UI verification, form testing, and screenshot capture. Use when validating frontend functionality, debugging UI behavior, or performing visual regression testing. Triggers on test requests, UI verification, or screenshot capture needs.
---

# Webapp Testing Skill

Test and validate web applications through automated browser interactions and visual verification.

## Testing Capabilities

### 1. Visual Verification
- Screenshot capture at different viewports
- Visual comparison for regression testing
- Element visibility checks
- Layout verification

### 2. Interaction Testing
- Click events
- Form submissions
- Navigation flows
- Modal/dropdown behavior
- Scroll interactions

### 3. Responsive Testing
- Multiple viewport sizes
- Mobile/tablet/desktop views
- Orientation changes

### 4. Accessibility Testing
- Keyboard navigation
- Focus management
- ARIA verification
- Screen reader compatibility

## Testing Viewports

| Name | Width | Height | Type |
|------|-------|--------|------|
| mobile-small | 320 | 568 | Mobile |
| mobile | 375 | 667 | Mobile |
| mobile-large | 414 | 896 | Mobile |
| tablet | 768 | 1024 | Tablet |
| desktop | 1280 | 720 | Desktop |
| desktop-large | 1920 | 1080 | Desktop |

## Test Scenarios

### Page Load Testing
```
1. Navigate to page
2. Wait for content to load
3. Verify key elements are visible
4. Check for console errors
5. Capture screenshot
```

### Navigation Testing
```
1. Load homepage
2. Click each navigation link
3. Verify correct section scrolls into view
4. Test mobile menu toggle
5. Verify menu closes on link click
```

### Form Testing
```
1. Navigate to contact form
2. Test empty submission (validation)
3. Test invalid email format
4. Test valid submission
5. Verify success/error feedback
```

### Responsive Testing
```
1. Load page at desktop size
2. Capture screenshot
3. Resize to tablet
4. Verify layout adapts
5. Capture screenshot
6. Resize to mobile
7. Verify mobile menu appears
8. Capture screenshot
```

### Animation Testing
```
1. Load page with animations
2. Wait for initial animations
3. Scroll to trigger viewport animations
4. Verify animations complete
5. Test with prefers-reduced-motion
```

## Test Checklist

### Homepage
- [ ] Hero section loads with background image
- [ ] Navigation is visible and functional
- [ ] All sections scroll smoothly
- [ ] Animations trigger on scroll
- [ ] CTAs are clickable
- [ ] Footer links work
- [ ] Mobile menu opens/closes

### Forms
- [ ] Labels associated with inputs
- [ ] Required field validation works
- [ ] Email validation works
- [ ] Submit button is enabled/disabled appropriately
- [ ] Success message displays
- [ ] Error messages display

### Navigation
- [ ] Desktop nav links work
- [ ] Mobile menu toggle works
- [ ] Menu items navigate correctly
- [ ] Active state shows current section
- [ ] Scroll to section works

### Images
- [ ] All images load
- [ ] No broken images
- [ ] Alt text is present
- [ ] Images are responsive

### Accessibility
- [ ] Tab navigation works
- [ ] Focus states visible
- [ ] Skip link functional
- [ ] ARIA labels present
- [ ] Screen reader compatible

## Error Detection

### Console Errors
Watch for:
- JavaScript errors
- Failed network requests
- Missing resources
- React warnings
- Deprecation notices

### Visual Errors
Look for:
- Layout shifts
- Overflow issues
- Broken images
- Text overflow
- Z-index problems

### Functional Errors
Test for:
- Broken links
- Non-functional buttons
- Form submission failures
- Navigation issues
- Missing interactions

## Reporting Format

```markdown
# Test Report: [Page/Feature]

## Test Environment
- Browser: Chrome/Firefox/Safari
- Viewport: [width]x[height]
- Date: [date]
- URL: [url]

## Summary
- Total Tests: X
- Passed: X
- Failed: X
- Warnings: X

## Test Results

### [Test Category]

| Test | Status | Notes |
|------|--------|-------|
| [Test name] | PASS/FAIL | [Notes] |

## Screenshots
- [screenshot-1.png]: [description]
- [screenshot-2.png]: [description]

## Issues Found
1. **[Issue Title]**
   - Severity: Critical/High/Medium/Low
   - Steps to reproduce: ...
   - Expected: ...
   - Actual: ...
   - Screenshot: [link]

## Recommendations
1. [Recommendation]
```

## Common Issues

### Layout Shift on Load
```
Issue: Content jumps after images load
Fix: Add explicit width/height to images
Test: Check CLS score in Lighthouse
```

### Mobile Menu Not Closing
```
Issue: Menu stays open after navigation
Fix: Add onClick handler to close menu
Test: Click menu item, verify menu closes
```

### Form Not Submitting
```
Issue: Form prevents default but does nothing
Fix: Implement actual submission logic
Test: Fill form, submit, verify feedback
```

### Broken Scroll Anchor
```
Issue: Navigation links don't scroll to section
Fix: Verify section IDs match href values
Test: Click nav link, verify scroll
```

### Focus Trap in Modal
```
Issue: Tab escapes modal to background
Fix: Implement focus trap
Test: Open modal, tab through, verify contained
```

## Performance Metrics

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Loading Metrics
- **TTFB** (Time to First Byte): < 600ms
- **FCP** (First Contentful Paint): < 1.8s
- **TTI** (Time to Interactive): < 3.8s

## Integration with CI/CD

### Pre-deployment Checks
1. Run visual regression tests
2. Verify all links work
3. Check for console errors
4. Validate form functionality
5. Test responsive layouts

### Post-deployment Verification
1. Verify production URL loads
2. Check SSL certificate
3. Test critical user flows
4. Verify analytics tracking
5. Monitor error rates
