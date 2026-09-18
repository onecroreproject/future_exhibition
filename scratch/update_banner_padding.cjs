const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx'];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace padding
    content = content.replace(/py-\[120px\] md:py-\[180px\]/g, 'py-[120px] md:py-[150px]');
    
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Banner padding updated successfully.');
