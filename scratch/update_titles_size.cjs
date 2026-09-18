const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx', 'About.jsx'];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace the specific text sizes
    content = content.replace(/font-sora font-\[500\] text-\[#faf6fd\] text-\[18px\] leading-\[23px\]/g, 'font-sora font-[600] text-[#faf6fd] text-[35px] leading-[46px]');
    
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Title sizes updated successfully.');
