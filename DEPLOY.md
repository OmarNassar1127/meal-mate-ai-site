# 🚀 Deploying to GitHub Pages

## Prerequisites
- Git repository initialized and pushed to GitHub
- Node.js and npm installed

## Deployment Steps

### 1. Initialize Git Repository (if not already done)
```bash
cd /Users/omarnassar/Documents/meal-mat-ai-site
git init
git add .
git commit -m "Initial commit - MealMate AI Landing Page"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `meal-mat-ai-site`
3. Don't initialize with README (we already have one)

### 3. Connect Local Repo to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/meal-mat-ai-site.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Build and deployment**:
   - Source: **GitHub Actions**

### 5. Deploy the Site
The site will automatically deploy when you push to the main branch!

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

### 6. Access Your Site
After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/meal-mat-ai-site
```

## Manual Deployment (Alternative)
If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## Updating the Site
Whenever you make changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

The GitHub Action will automatically rebuild and deploy your site!

## Troubleshooting

### Site not showing up?
1. Check Actions tab in GitHub - ensure the workflow completed successfully
2. Wait 5-10 minutes for GitHub Pages to update
3. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Images not loading?
- All image paths are automatically handled by the `getAssetPath` utility
- Ensure all images are in the `public` folder

### 404 errors?
- Make sure you've enabled GitHub Pages in repository settings
- Check that the deployment workflow completed successfully

## Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain