'use strict';

var x = grafar.range(-3, 3, 100).select();
var y = grafar.range(-3, 3, 100).select();

// ms() -- встроенный миллисекундный таймер. Каждый кадр значение сдвигается
// примерно на 16 (столько миллисекунд занимает один кадр).
// График автоматически обновляется.
var t = grafar.ms();

// Используйте таймер как обычную графар-выборку
// Осторожно, миллисекунды -- это довольно быстро
var z = grafar.map([x, y, t], function (x, y, t) {
  return Math.sin(x + y) * Math.cos(t / 600);
});

grafar.pin([x, y, z], new grafar.Panel(document.getElementById('render')));