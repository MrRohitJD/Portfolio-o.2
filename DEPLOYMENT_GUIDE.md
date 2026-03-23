# 🌐 Deployment Guide

This guide covers multiple deployment options for your Next.js portfolio.

---

## ⚡ Option 1: Vercel (Recommended)

**Best for**: Next.js projects (made by Vercel team)

### Method A: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **For Production**
```bash
vercel --prod
```

### Method B: Using Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

**Features:**
- ✅ Automatic deployments on push
- ✅ Preview deployments for PRs
- ✅ Custom domains
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Zero configuration

---

## 🎯 Option 2: Netlify

**Best for**: Static sites and JAMstack

### Steps:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Choose "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

4. **Click Deploy**

**Features:**
- ✅ Continuous deployment
- ✅ Free SSL
- ✅ Custom domains
- ✅ Form handling
- ✅ Serverless functions

---

## 🐳 Option 3: Docker + Any Platform

**Best for**: Full control and portability

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = nextConfig
```

### Build and Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

---

## ☁️ Option 4: AWS Amplify

**Best for**: AWS ecosystem integration

### Steps:

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

2. **Initialize Amplify**
```bash
amplify init
```

3. **Add Hosting**
```bash
amplify add hosting
```

4. **Deploy**
```bash
amplify publish
```

---

## 🌊 Option 5: DigitalOcean App Platform

**Best for**: Simple cloud hosting

### Steps:

1. Push code to GitHub
2. Visit [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Click "Create App"
4. Connect GitHub repository
5. Configure:
   - Environment: Node.js
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Deploy

---

## 🚀 Option 6: Static Export + Any Static Host

**Best for**: Maximum compatibility

### Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Build Static Files

```bash
npm run build
```

This creates an `out` folder with static files.

### Deploy to Any Static Host:

**GitHub Pages:**
```bash
# Install gh-pages
npm install -g gh-pages

# Deploy
gh-pages -d out
```

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

**Surge.sh:**
```bash
npm install -g surge
cd out
surge
```

---

## 🔧 Environment Variables

If you need environment variables:

### Create .env.local

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

### Configure on Platform

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Build & deploy → Environment

**Docker:**
```bash
docker run -e NEXT_PUBLIC_API_URL=... -p 3000:3000 portfolio
```

---

## 🌐 Custom Domain Setup

### For Vercel/Netlify:

1. Go to project settings
2. Add custom domain
3. Update DNS records:
   - Type: CNAME
   - Name: www
   - Value: your-project.vercel.app

### For Other Platforms:

1. Get the IP address or CNAME
2. Update your domain's DNS:
   - A Record: Point to IP
   - CNAME: Point to provided URL

---

## 📊 Performance Optimization

Before deploying, optimize your site:

```bash
# Analyze bundle size
npm run build

# Check for unused dependencies
npx depcheck

# Optimize images
# All images in Next.js are automatically optimized
```

---

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Test build locally: `npm run build && npm start`
- [ ] Update meta tags in `app/layout.js`
- [ ] Add custom favicon
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Update social media links
- [ ] Test contact form
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up error monitoring (Sentry, etc.)

---

## 🔍 Post-Deployment Testing

1. **Check all pages load**
2. **Test responsive design**
3. **Verify forms work**
4. **Check console for errors**
5. **Test on different browsers**
6. **Validate SEO** (use PageSpeed Insights)
7. **Test contact form submission**

---

## 🛠️ Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

Add to `next.config.js`:
```javascript
images: {
  domains: ['your-image-domain.com'],
}
```

### Routing Issues

Ensure all links use Next.js `Link` component:
```javascript
import Link from 'next/link'
```

---

## 📈 Monitoring & Analytics

### Add Google Analytics

1. **Install package**
```bash
npm install @next/third-parties
```

2. **Add to layout.js**
```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## 🎉 Recommended: Vercel

For your Next.js portfolio, **Vercel** is the recommended choice because:

- ✅ Made for Next.js
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Free hobby plan
- ✅ Fastest deployment

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deploy Docs: https://nextjs.org/docs/deployment

Happy deploying! 🚀
