import fs from 'fs';

const allFiles = fs.readdirSync('./src/')
let indexContent = ''
allFiles
  .filter(filename => {
    if(filename === 'index.js') return false
    if(filename.includes('.js')) return true
    return false
  })
  .forEach(filename => {
    // TODO: check if js file
    const functionName = filename.slice(0, -3)
    indexContent += `export ${functionName} from './${functionName}'\n`
  })

fs.writeFileSync('./src/index.js', indexContent)