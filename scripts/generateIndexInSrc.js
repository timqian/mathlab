import fs from 'fs';

const allFiles = fs.readdirSync('./src/')
let indexContent = ''
allFiles.forEach(filename => {
  // TODO: check if js file
  const functionName = filename.slice(0, -3)
  indexContent += `export ${functionName} from './${functionName}'\n`
})
fs.writeFileSync('./src/index.js', indexContent)