const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    let modified = false;

    // We look for elements containing bg-[#5b1a8c]
    // The easiest way is to match className string and replace padding classes
    content = content.replace(/className="([^"]*?bg-\[#5b1a8c\][^"]*?)"/g, (match, classes) => {
      // Don't reduce section padding if it's a section tag? The regex just matches the string.
      // We will blindly replace p-[...] within this className
      let newClasses = classes;
      
      if (newClasses.includes('p-[40px_20px]')) {
        newClasses = newClasses.replace('p-[40px_20px]', 'p-[20px_16px]');
        modified = true;
      }
      if (newClasses.includes('p-[40px]')) {
        newClasses = newClasses.replace('p-[40px]', 'p-[24px]');
        modified = true;
      }
      if (newClasses.includes('p-[30px]')) {
        newClasses = newClasses.replace('p-[30px]', 'p-[20px]');
        modified = true;
      }

      return `className="${newClasses}"`;
    });

    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

console.log('Padding reduced successfully.');
