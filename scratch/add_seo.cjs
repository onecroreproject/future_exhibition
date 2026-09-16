const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if SEO is already imported
  if (!content.includes('import SEO')) {
    // Add import after the very first import statement
    content = content.replace(/^(import .*? from ['"].*?['"];?\n)/m, '$1import SEO from "../components/SEO";\n');
  }

  // Determine title and description based on filename
  const pageName = file.replace('.jsx', '');
  const title = pageName === 'Home' ? 'Home' : pageName;
  const description = `Explore the ${pageName} page of SMART EDU EXPO - your premier educational exhibition and conference.`;

  // Insert <SEO ... /> after <main>
  if (!content.includes('<SEO title=')) {
    content = content.replace(/<main>/, `<main>\n      <SEO title="${title}" description="${description}" />`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Added SEO tags to all pages');
