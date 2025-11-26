# Vercel Deployment Guide

## Quick Deploy (Easiest Method)

### Option 1: Deploy via Vercel Dashboard (Recommended for beginners)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. Click **"Add New Project"**
3. If your code is on GitHub/GitLab/Bitbucket:
   - Connect your repository
   - Select the repository
   - Vercel will auto-detect it's a static site
   - Click **"Deploy"**
4. If your code is NOT on Git:
   - Install Vercel CLI (see Option 2 below)
   - Or drag and drop your folder on the Vercel dashboard

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
   Or if you don't have npm:
   ```bash
   # Install Node.js first from nodejs.org, then run:
   npm install -g vercel
   ```

2. **Navigate to your project:**
   ```bash
   cd "/Users/kunalkabra04/Desktop/CSE Demo"
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
4. **Follow the prompts:**
   - Login to Vercel (if not already logged in)
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 3: Deploy via Git (Recommended for continuous deployment)

1. **Initialize Git (if not already):**
   ```bash
   cd "/Users/kunalkabra04/Desktop/CSE Demo"
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Connect to Vercel:**
   - Go to vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect and deploy
   - Every push to main/master will auto-deploy!

## Project Configuration

The `vercel.json` file is already configured with:
- Static site routing
- Cache headers for optimal performance
- SPA routing support (all routes redirect to index.html)

## Post-Deployment

After deployment, you'll get:
- A production URL: `https://your-project.vercel.app`
- Automatic HTTPS
- Global CDN distribution
- Automatic deployments on every Git push (if connected to Git)

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

- **Build errors?** Check that all file paths are correct (case-sensitive)
- **Images not loading?** Ensure image paths use relative paths (e.g., `images/logo.svg`)
- **404 errors?** The `vercel.json` should handle routing - verify it exists

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

