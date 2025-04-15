const fs = require('fs');
const path = require('path');

// Directory containing the prerendered HTML files
const distDir = path.join(__dirname, 'dist/tna-website-v2-final/browser');

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix asset paths in HTML files
function fixAssetPaths(htmlFile) {
  console.log(`Processing: ${htmlFile}`);
  
  let content = fs.readFileSync(htmlFile, 'utf8');
  
  // Calculate the relative path to the root
  const relativePath = path.relative(path.dirname(htmlFile), distDir);
  const relativePrefix = relativePath ? relativePath.replace(/\\/g, '/') + '/' : '';
  
  // Fix asset paths
  content = content.replace(/href="styles-/g, `href="${relativePrefix}styles-`);
  content = content.replace(/href="assets\//g, `href="${relativePrefix}assets/`);
  content = content.replace(/src="main-/g, `src="${relativePrefix}main-`);
  content = content.replace(/src="polyfills-/g, `src="${relativePrefix}polyfills-`);
  content = content.replace(/src="scripts-/g, `src="${relativePrefix}scripts-`);
  
  // Add base tag if not present
  if (!content.includes('<base href=')) {
    content = content.replace('<head>', '<head>\n  <base href="/">');
  }
  
  fs.writeFileSync(htmlFile, content);
  console.log(`Fixed: ${htmlFile}`);
}

// Find all HTML files and fix asset paths
const htmlFiles = findHtmlFiles(distDir);
htmlFiles.forEach(fixAssetPaths);

console.log(`Fixed asset paths in ${htmlFiles.length} HTML files.`);
