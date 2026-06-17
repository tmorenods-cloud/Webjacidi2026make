const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src/app');

// Recursive function to get all .tsx and .ts files
function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

if (!fs.existsSync(srcDir)) {
  console.error(`Error: Directory not found at ${srcDir}`);
  process.exit(1);
}

const files = getFiles(srcDir);

const imageReplacements = [
  {
    variable: 'imgClientLogo',
    file: 'b7b5eced762fc65fe3bd76a4742c9db6ad95a62d.png',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo1',
    file: 'c0277f15dd06af820ab8d7faefbd135cf318a958.png',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo2',
    file: '0a2e79bcd47a4aacb95357549ff5939bc54d20c9.png',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo3',
    file: 'ca17513dda698dffd51ce63384294861c38ef6f9.png',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo4',
    file: '49323ca07b7b9e5a4dd41cc31534a5a142a1f7bd.png',
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo5',
    file: 'b327c2ebc988cb10d48418f8c40002212dd2ae59.png',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo6',
    file: '9424d751efc36ee0a920f89ac42d391784837c2a.png',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo7',
    file: '4cdad886271045d8c1cdc9da83383af6b1080c60.png',
    url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgClientLogo8',
    file: '4c2426829019e5977540fd18b894ac50ee3c374e.png',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgColumn',
    file: '46b4059ae7c44eb9d6289c0001726e236e172cae.png',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgColumn1',
    file: '9249e5057a24c153b07287f7f65477c6e06a63c5.png',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgImage',
    file: '70ba5425a7dc220227b68ba509e823370c72311e.png',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgImage1',
    file: 'a56b2ff5ab4dfbbad342e0ca02ad65a24d06e42d.png',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgImage1',
    file: 'b015235e5475370934f59180c5fbb8ccd83e8811.png',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgIntroductionImage',
    file: '9249e5057a24c153b07287f7f65477c6e06a63c5.png',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuHero',
    file: '9249e5057a24c153b07287f7f65477c6e06a63c5.png',
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg1',
    file: '66b381c88d7442b6d6fca575946066896a67f6db.png',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg2',
    file: '9e7b46c63fdba6029bb6b0c5dcbad267af6872c3.png',
    url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg3',
    file: '5f13ab3a3ff74801724cf7df07cb6e319f7d172b.png',
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg4',
    file: 'd20450c1482411a33f137fb6cfa8f3d5f8b9d22b.png',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg5',
    file: '46b4059ae7c44eb9d6289c0001726e236e172cae.png',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuImg6',
    file: '6cf4fcea852e1ca1101ec3481dbf18e1adc99b16.png',
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuThumb1',
    file: '695b352afdca68e345698611f5c1cf7c0ca8ca6a.png',
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuThumb2',
    file: 'a5c29d5aa98abcf3f657c27901d2abbe55dec97c.png',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop'
  },
  {
    variable: 'imgNavicuThumb3',
    file: '5865a5dbc3a18e7ea9e2a2fe6916a3068f547ead.png',
    url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600&auto=format&fit=crop'
  }
];

let totalModifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let fileModifiedCount = 0;

  for (const replacement of imageReplacements) {
    // Matches: import <variable> from "@/imports/<any-folder>/<file>";
    // with flexible whitespace, single/double quotes and optional semicolon.
    const importPattern = new RegExp(
      `import\\s+${replacement.variable}\\s+from\\s+['"]@/imports/[^'"]+/${replacement.file}['"];?\\s*`,
      'g'
    );

    const replacementText = `const ${replacement.variable} = "${replacement.url}";\n`;

    if (importPattern.test(content)) {
      content = content.replace(importPattern, replacementText);
      fileModifiedCount++;
      totalModifiedCount++;
    }
  }

  if (fileModifiedCount > 0) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Successfully replaced ${fileModifiedCount} broken imports with premium Unsplash URLs in ${path.relative(path.resolve(__dirname, '..'), file)}.`);
  }
}

if (totalModifiedCount === 0) {
  console.log('No broken imports found. All files are already clean or contain no matching patterns.');
}
