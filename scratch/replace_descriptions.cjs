const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx', 'About.jsx'];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace the className string for <p> tags
    // The regex captures everything inside className="..."
    content = content.replace(/<p\s+([^>]*?)className="([^"]*?)"/g, (match, prefix, classes) => {
      // Split the classes
      let classList = classes.split(/\s+/);
      
      // Filter out typography-related classes that we are overriding
      classList = classList.filter(c => {
        return !(
          c.startsWith('text-[') || // text-[14px], text-[16px], text-[#...]
          c.match(/^text-(white|black|gray|purple|pink|blue|transparent|current|inherit|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|indigo|violet|fuchsia|rose)(-[0-9]+)?$/) ||
          c.startsWith('leading-[') || 
          c.match(/^leading-(none|tight|snug|normal|relaxed|loose)$/) ||
          c.startsWith('font-[') ||
          c.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/) ||
          c === 'font-manrope' ||
          c === 'font-sora'
        );
      });

      // Add the new ones
      // font-manrope font-[400] text-white text-[16px] leading-[26px]
      const newClasses = ['font-manrope', 'font-[400]', 'text-white', 'text-[16px]', 'leading-[26px]', ...classList];
      
      return `<p ${prefix}className="${newClasses.join(' ')}"`;
    });

    // Also handle template literals if any: className={`...`}
    content = content.replace(/<p\s+([^>]*?)className=\{`([^`]*?)`\}/g, (match, prefix, classes) => {
        let classList = classes.split(/\s+/);
        classList = classList.filter(c => {
          if (c.includes('${')) return true; // keep dynamic classes
          return !(
            c.startsWith('text-[') ||
            c.match(/^text-(white|black|gray|purple|pink|blue|transparent|current|inherit|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|indigo|violet|fuchsia|rose)(-[0-9]+)?$/) ||
            c.startsWith('leading-[') || 
            c.match(/^leading-(none|tight|snug|normal|relaxed|loose)$/) ||
            c.startsWith('font-[') ||
            c.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/) ||
            c === 'font-manrope' ||
            c === 'font-sora'
          );
        });
        const newClasses = ['font-manrope', 'font-[400]', 'text-white', 'text-[16px]', 'leading-[26px]', ...classList];
        return `<p ${prefix}className={\`${newClasses.join(' ')}\`}`;
    });

    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Descriptions updated successfully.');
