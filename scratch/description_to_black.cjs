const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx'];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace text-white with text-black in <p> tags
    content = content.replace(/<p\s+([^>]*?)className="([^"]*?)"/g, (match, prefix, classes) => {
      // We only want to change text-white to text-black for description text.
      // The description text usually has 'font-manrope' and 'font-[400]'.
      if (classes.includes('font-manrope') && classes.includes('text-white')) {
        let newClasses = classes.replace(/\btext-white\b/g, 'text-black');
        return `<p ${prefix}className="${newClasses}"`;
      }
      return match;
    });

    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Descriptions updated to black successfully.');
