const path = require ('path');

//returns path seperator
console.log(path.sep);

//returns a normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

//returns a absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);