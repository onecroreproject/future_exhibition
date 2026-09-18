const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const excludeFiles = ['Home.jsx'];

const substrings = [
  "Showcase your institution",
  "Choose from Space Only",
  "Every booth comes with carpeting",
  "Your brand featured across the",
  "Explore the full exhibition layout",
  "Explore leading educational institutions",
  "Future Exhibition & Conferences",
  "100000139583",
  "BH51BIBB00100000139583",
  "BIBBHBMINV",
  "Bahrain Islamic Bank",
  "Building 722, Al Salam Tower",
  "Have a question about exhibiting",
  "Block 1062, Road 6204, Sakhir",
  "+973 17311212",
  "+973 36004542",
  "+973 36734442",
  "futureexhibitions@gmail.com",
  "Exhibition World Bahrain"
];

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jsx') && !excludeFiles.includes(file)) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Regex to match <p ...> ... </p> (non-greedy)
    content = content.replace(/<p([^>]*)>([\s\S]*?)<\/p>/g, (match, pAttrs, pContent) => {
      // Check if pContent includes any of the substrings
      const shouldRevert = substrings.some(sub => pContent.includes(sub));
      
      if (shouldRevert && pAttrs.includes('text-black')) {
        const newAttrs = pAttrs.replace(/\btext-black\b/g, 'text-white');
        return `<p${newAttrs}>${pContent}</p>`;
      }
      return match;
    });
    
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log('Specific texts reverted to white successfully.');
