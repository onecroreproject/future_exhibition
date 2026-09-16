const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Zallaq, Kingdom of Bahrain
      content = content.replace(/Zallaq, Kingdom of Bahrain/g, 'Block 1062, Road 6204, Sakhir, Bahrain');
      
      // 2. Hall 2, Zallaq, <br /> Kingdom of Bahrain
      content = content.replace(/Hall 2, Zallaq,(\s*<br \/>\s*)Kingdom of Bahrain/g, 'Hall 2, Block 1062,$1Road 6204, Sakhir, Bahrain');
      
      // 3. Hall 2, Zallaq, Kingdom of Bahrain
      content = content.replace(/Hall 2, Zallaq, Kingdom of Bahrain/g, 'Hall 2, Block 1062, Road 6204, Sakhir, Bahrain');
      
      // 4. Any remaining "Zallaq" in "in Zallaq" or "heart of Zallaq"
      content = content.replace(/in Zallaq/g, 'in Sakhir');
      content = content.replace(/heart of Zallaq/g, 'heart of Sakhir');
      
      // 5. Sep 29 – 30 & Oct 1 – 2, 2026 • Hall 2, Zallaq, Kingdom of Bahrain
      // (already covered by #1 mostly, but let's be careful about dots)
      // If it's already caught by #1 it will become:
      // Sep 29 – 30 & Oct 1 – 2, 2026 • Hall 2, Block 1062, Road 6204, Sakhir, Bahrain
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(srcDir);
console.log('Location updated successfully.');
