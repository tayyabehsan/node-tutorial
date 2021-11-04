const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second);

//Node will create a file. If file already exists it will overwrite

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`
// );
//If you want to append pass a third argument which is a property. 
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one');