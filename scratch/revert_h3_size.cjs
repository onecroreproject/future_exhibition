const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Revert h3 and smaller tags that got caught in the crossfire
    content = content.replace(/<h3([^>]*?)font-sora font-\[600\] text-\[#faf6fd\] text-\[35px\] leading-\[46px\]/g, '<h3$1font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px]');
    
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('h3 sizes reverted successfully.');
