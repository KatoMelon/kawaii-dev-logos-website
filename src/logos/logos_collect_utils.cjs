const fs = require('fs-extra');
const path = require('path');

const assetsPath = path.join(__dirname, 'assets');
const outputPath = path.join(__dirname, 'public', 'logos');
const tsFilePath = path.join(__dirname, 'imageInfo.ts');
const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg']);

let imageIndex = 0;
const imagesInfo = [];

async function collectImages(dir, relativePath = '') {
  const files = await fs.readdir(dir);
  
  for (let file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await collectImages(fullPath, path.join(relativePath, file));
    } else if (allowedExtensions.has(path.extname(file).toLowerCase())) {
      const newFileName = `img${imageIndex}${path.extname(file)}`;
      imageIndex++;
      const newFilePath = path.join(outputPath, newFileName);
      await fs.copy(fullPath, newFilePath);

      const dirName = path.basename(relativePath);
      const author = path.basename(path.dirname(relativePath));
      imagesInfo.push({
        image: `./public/logos/${newFileName}`,
        dirName,
        author
      });
    }
  }
}

async function generateTsFile() {
  const imports = imagesInfo.map((info, index) => 
    `import img${index} from '${info.image}';`
  ).join('\n');

  const imageInfo = `export const image_info = [\n  ${
    imagesInfo.map((info, index) => 
      `{ image: img${index}, dirName: '${info.dirName}', author: '${info.author}' }`
    ).join(',\n  ')
  }\n];`;

  await fs.writeFile(tsFilePath, `${imports}\n\n${imageInfo}`);
}

async function run() {
  await fs.ensureDir(outputPath);
  await collectImages(assetsPath);
  await generateTsFile();
}

run().catch(console.error);
