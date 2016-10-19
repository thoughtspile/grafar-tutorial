// Для ES6 графар импортируется через default:
import grafar from 'grafar';
// Также нужно:
//   1. Поставить графар через npm install --save grafar
//   2. После прогнать свои программы через webpack + babel или что хотите
//   3. Не забыть включить сборку на страницу.

const i = grafar.set([-1, 1]).select();
console.log(i);
