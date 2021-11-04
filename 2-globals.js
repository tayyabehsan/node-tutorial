//GLOBALS  - NO WINDOW //
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module
// process - info about environment where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);


setTimeout(() => {
    console.log('hello setTimeout');
}, 1000);
setInterval(() => {
    console.log('setInterval')
}, 500);

