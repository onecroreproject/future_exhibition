const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx', 'About.jsx'];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace the className string for <h2> tags that have text-[35px]
    // The regex captures everything before and after the text color/size parts
    // E.g., <h2 className="text-[35px] leading-[46px] font-sora font-semibold text-[#5b1a8c] mb-[16px]">
    // We want to replace text-[35px], leading-[46px], font-semibold/font-[600], and the color with the new values.

    content = content.replace(/<h2 className="([^"]*?text-\[35px\].*?)"/g, (match, classes) => {
      // Split the classes
      let classList = classes.split(/\s+/);
      
      // Filter out the ones we are replacing
      classList = classList.filter(c => {
        return !c.startsWith('text-[35px]') 
            && !c.startsWith('leading-[46px]')
            && !c.startsWith('font-semibold')
            && !c.startsWith('font-[600]')
            && !c.startsWith('text-white')
            && !c.startsWith('text-[#5b1a8c]')
            && !c.startsWith('font-sora') // we'll add it back to ensure order
      });

      // Add the new ones
      // font-sora font-[500] text-[#faf6fd] text-[18px] leading-[23px]
      const newClasses = ['font-sora', 'font-[500]', 'text-[#faf6fd]', 'text-[18px]', 'leading-[23px]', ...classList];
      
      return `<h2 className="${newClasses.join(' ')}"`;
    });

    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Section titles updated successfully.');
