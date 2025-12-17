#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Step 1: Push latest changes to GitHub
echo "Pushing changes to GitHub..."
git push
echo "Changes pushed to GitHub successfully."

# Step 2: Build the site locally
echo "Building the site locally from committed changes..."
npm run build
echo "Site built successfully."

# Step 3: Deploy to Vercel
echo "Deploying to Vercel production..."
npx vercel --prod --token "${VERCEL_TOKEN:?Set VERCEL_TOKEN or run 'npx vercel login' first}"
echo "Deployment to Vercel completed!"
