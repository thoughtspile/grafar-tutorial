// Чтобы включать grafar через commonjs, нужно:
//  1. npm install --save grafar
//  2. Прогнать свои файлы через browserify
//  3. Не забыть включить сборку на страницу
var grafar = require('grafar');

var x = grafar.range(0, 1);
console.log(x);
