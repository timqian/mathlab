// generate unexisted test templates

import fs from 'fs';

const allFiles = fs.readdirSync('./src/')
const existedFiles = fs.readdirSync('./test/')
const newFiles = allFiles.filter(file => !existedFiles.includes(file))

newFiles.forEach(fileName => {
  const functionName = fileName.slice(0, -3)
  const data = 
`import assert from 'assert'
import should from 'should'
import { ${functionName} } from '../lib'

describe('${functionName}', () => {
  it('', () => {
    ${functionName}().should.deepEqual()
  })
})`

  fs.writeFileSync(`./test/${fileName}`, data)
})