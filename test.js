
import fs from 'fs'


// const path = process.cwd() + '/store/files/symlink-test.txt'
const path = 'D:/Playground/slint-tools/symlink-test.txt'

console.log({path});
const stat = fs.statSync(path)
// console.log({stat});
console.log('ino',stat.ino);

