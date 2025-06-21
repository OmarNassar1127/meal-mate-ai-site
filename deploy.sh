#!/bin/bash

echo "🚀 MealMate AI - GitHub Pages Deployment Script"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - MealMate AI Landing Page"
    echo ""
    echo "⚠️  Please create a repository on GitHub named 'meal-mat-ai-site'"
    echo "Then run this script again to continue deployment."
    echo ""
    echo "👉 Go to: https://github.com/new"
    exit 1
fi

# Check if remote is set
if ! git remote | grep -q origin; then
    echo "🔗 Please add your GitHub remote:"
    echo "Run: git remote add origin https://github.com/YOUR_USERNAME/meal-mat-ai-site.git"
    echo ""
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🏗️  Building the site..."
npm run build

echo ""
echo "🚀 Pushing to GitHub..."
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin main

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your repository settings on GitHub"
echo "2. Navigate to Pages section"
echo "3. Under 'Build and deployment', select 'GitHub Actions' as the source"
echo "4. Wait 5-10 minutes for the deployment to complete"
echo ""
echo "🌐 Your site will be available at:"
echo "https://YOUR_USERNAME.github.io/meal-mat-ai-site"
echo ""
echo "Replace YOUR_USERNAME with your GitHub username"