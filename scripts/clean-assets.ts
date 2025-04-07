const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all image files in assets
const assetFiles = glob.sync('src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}');

// Get all source files
const sourceFiles = glob.sync('src/**/*.{ts,html,css,scss}');

// Read all source files content
const sourceContent = sourceFiles.map((file: any) => fs.readFileSync(file, 'utf8')).join('');

// Find unused assets
const unusedAssets = assetFiles.filter((assetPath: any) => {
  const filename = path.basename(assetPath);
  return !sourceContent.includes(filename);
});

// Log or remove unused assets
console.log('Unused assets:', unusedAssets.length);

// Uncomment to remove files
unusedAssets.forEach((file:any) => fs.unlinkSync(file));

