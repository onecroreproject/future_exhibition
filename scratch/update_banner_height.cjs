const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx', 'Contact.jsx']; // Home is excluded, Contact is already done

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace padding
    content = content.replace(/py-\[100px\] md:py-\[150px\]/g, 'py-[120px] md:py-[180px]');
    
    // Replace height (handle both min-h-[500px] and min-h-[400px] md:min-h-[500px])
    content = content.replace(/min-h-\[400px\] md:min-h-\[500px\]/g, 'min-h-[600px]');
    content = content.replace(/min-h-\[500px\]/g, 'min-h-[600px]');
    
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Banner heights updated successfully.');
