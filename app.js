//NODE PACKAGE MANAGER
//npmjs.com

//npm  - global command, comes with node
//npm --version TO CHECK THE NPM VERSION

//local dependency - use it only in this particular project
//npm i <packagename>

//global dependecy - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores imporant info about project/package)
//manual approach (creat package.json in the root, create properties etc.)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require ('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);


