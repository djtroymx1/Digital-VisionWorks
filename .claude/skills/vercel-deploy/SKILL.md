---
name: vercel-deploy
description: Manages Git operations and Vercel deployments for the DigitalVisionWorks project. Use when initializing repositories, committing changes, pushing to GitHub, or verifying deployments. Triggers on deployment requests, git operations, or publish requests.
---

# Vercel Deploy Skill

Manage the complete deployment workflow from local changes to live production on Vercel.

## Project Configuration

### Repository Details
- **GitHub**: https://github.com/djtroymx1/Digital-VisionWorks
- **Production URL**: https://digitalvisionworks.vercel.app
- **Branch**: main
- **Auto-deploy**: Enabled (push to main triggers deploy)

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## Deployment Workflow

### 1. Pre-Deployment Checklist

Before deploying, verify:

- [ ] All changes are saved
- [ ] No TypeScript errors (`npm run build`)
- [ ] No console errors in browser
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] Environment variables set (if needed)

### 2. Initialize Git (First Time Only)

```bash
# Initialize repository
git init

# Add remote
git remote add origin https://github.com/djtroymx1/Digital-VisionWorks.git

# Verify remote
git remote -v
```

### 3. Stage Changes

```bash
# Check status
git status

# Stage all changes
git add .

# Or stage specific files
git add path/to/file.tsx
```

### 4. Commit Changes

```bash
# Commit with descriptive message
git commit -m "feat: add new feature description

- Detail 1
- Detail 2

🤖 Generated with Claude Code"
```

#### Commit Message Format
```
<type>: <short description>

[optional body with details]

🤖 Generated with Claude Code
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `style`: Styling changes
- `docs`: Documentation
- `perf`: Performance improvement
- `a11y`: Accessibility improvement
- `chore`: Maintenance tasks

### 5. Push to GitHub

```bash
# Push to main branch
git push origin main

# First push (set upstream)
git push -u origin main
```

### 6. Verify Deployment

After push:
1. Check Vercel dashboard for build status
2. Wait for "Ready" status
3. Visit production URL to verify
4. Check for any build errors in Vercel logs

## Environment Variables

### Required Variables
```
GEMINI_API_KEY=your-api-key  # For AI image generation
```

### Setting in Vercel
1. Go to Project Settings → Environment Variables
2. Add variable name and value
3. Select environments (Production, Preview, Development)
4. Redeploy for changes to take effect

## Build Verification

### Local Build Test
```bash
# Run production build locally
npm run build

# Preview production build
npm run preview
```

### Expected Output
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
    └── [all images]
```

## Troubleshooting

### Build Failures

#### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

#### Missing Dependencies
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

#### Environment Variables
- Ensure all required env vars are set in Vercel
- Check for typos in variable names
- Verify values are correct

### Deployment Issues

#### Cache Problems
- Trigger redeploy in Vercel dashboard
- Clear build cache in Project Settings

#### 404 on Routes
- Ensure proper routing configuration
- Check vercel.json for rewrites

## Git Commands Reference

### Status & History
```bash
git status           # Show changed files
git log --oneline    # Show commit history
git diff             # Show unstaged changes
git diff --staged    # Show staged changes
```

### Branching
```bash
git branch           # List branches
git checkout -b new-branch  # Create and switch
git checkout main    # Switch to main
git merge branch     # Merge branch into current
```

### Undoing Changes
```bash
git checkout -- file.tsx  # Discard changes
git reset HEAD file.tsx   # Unstage file
git reset --soft HEAD~1   # Undo last commit (keep changes)
```

### Remote Operations
```bash
git fetch origin     # Fetch remote changes
git pull origin main # Pull and merge
git push origin main # Push to remote
```

## Deployment Checklist

### Pre-Push
- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Changes tested locally
- [ ] Commit message is descriptive

### Post-Push
- [ ] Vercel build started
- [ ] Build completed successfully
- [ ] Production URL is accessible
- [ ] Changes visible on live site
- [ ] No runtime errors in console

## Vercel CLI (Optional)

### Installation
```bash
npm i -g vercel
```

### Commands
```bash
vercel            # Deploy preview
vercel --prod     # Deploy to production
vercel logs       # View deployment logs
vercel env pull   # Pull env vars to .env.local
```

## Rollback Procedure

If deployment causes issues:

1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Verify rollback is successful
5. Fix issues locally and redeploy

## Security Notes

- Never commit `.env` files
- Keep API keys in Vercel environment variables
- Use `.gitignore` to exclude sensitive files
- Review changes before pushing to public repo
