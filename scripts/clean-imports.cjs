const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/app/App.tsx');

if (!fs.existsSync(filePath)) {
  console.error(`Error: File not found at ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

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
  }
];

let modifiedCount = 0;

for (const replacement of imageReplacements) {
  // Matches: import <variable> from "@/imports/Home-1/<file>";
  // with flexible whitespace, single or double quotes, and optional trailing semicolon.
  const importPattern = new RegExp(
    `import\\s+${replacement.variable}\\s+from\\s+['"]@/imports/Home-1/${replacement.file}['"];?\\s*`,
    'g'
  );

  const replacementText = `const ${replacement.variable} = "${replacement.url}";\n`;

  if (importPattern.test(content)) {
    content = content.replace(importPattern, replacementText);
    modifiedCount++;
  }
}

if (modifiedCount > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully replaced ${modifiedCount} broken imports with premium Unsplash URLs.`);
} else {
  console.log('No broken imports found. The file is already clean or contains no matching patterns.');
}
