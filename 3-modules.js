
//Modules
//CommonJS (NODE USES COMMONJS) - Everyfile  is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names.js');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-gernade');

console.log(data);
console.log(names);

sayHi('Muhammad');
sayHi(names.muhammad);
sayHi(names.ehsan);
