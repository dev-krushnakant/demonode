//Modules - Encapsulated code ( Only share minimum )
// Node uses CommonJS under the hood, so every file is a module in Node

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternateWay');
require('./7-alternative-way');

const {n1 , n2 } = names;

sayHi(n1);
sayHi(n2);
sayHi('Brother');

console.log(data);