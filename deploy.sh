#!/bin/bash

echo "🚀 Starting deployment on Azure App Service (Linux)..."

# Clean existing content
if [ -d "$DEPLOYMENT_TARGET" ]; then
  echo "🧹 Removing existing content from $DEPLOYMENT_TARGET"
  rm -rf "$DEPLOYMENT_TARGET"
fi

# Create required folders
mkdir -p "$DEPLOYMENT_TARGET/dist"
mkdir -p "$DEPLOYMENT_TARGET/public"

# Copy prebuilt files
echo "📦 Copying 'dist' and 'public' folders..."
cp -R dist/* "$DEPLOYMENT_TARGET/dist/" || exit 1
cp -R public/* "$DEPLOYMENT_TARGET/public/" || exit 1

# Copy dependency descriptors
echo "📄 Copying package.json and package-lock.json..."
cp package.json "$DEPLOYMENT_TARGET/" || exit 1
cp package-lock.json "$DEPLOYMENT_TARGET/" || exit 1

# Switch to deployment target
cd "$DEPLOYMENT_TARGET" || exit 1

# Install only production dependencies
echo "🔧 Installing production dependencies..."
npm install --omit=dev || exit 1

# Show deployed structure
echo "📂 Final directory contents:"
ls -la "$DEPLOYMENT_TARGET"

echo "✅ Deployment complete."
