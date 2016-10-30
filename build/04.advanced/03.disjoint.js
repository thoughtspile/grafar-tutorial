'use strict';

// Что делаем: строим график тангенса, обходя разрывы.
// Напоминаю: разрывы у тангенса в 2kπ ± π / 2

// Небольшое значение, чтобы отойти на столько от разрывов.
var eps = .00001;
// Это середины отрезков, на которых тангенс непрерывен: {kπ | k in N}
var mid = grafar.map(grafar.ints(-20, 20).select(), function (i) {
  return Math.PI * i;
});
// Вокруг каждой середины ходим туда-сюда на π/2 - eps
var t = grafar.range(-Math.PI / 2 + eps, Math.PI / 2 - eps, 30).select();

// Собираем домен: t непрерывные, mid дискретные, значит получится множество отрезков с небольшими дырами.
var x = grafar.map([mid, t], function (mid, t) {
  return mid + t;
});
// И теперь просто отображаем:
var y = grafar.map([x], function (x) {
  return Math.tan(x);
});

// Цепляем как обычно. Обратите внимание, что панель двумерная.
var pan2d = new grafar.Panel(document.getElementById('render'), {}).setAxes(['x', 'y']);
pan2d.camera.position.set(0, 25, 0);
grafar.pin([x, y], pan2d);

// Пара трюков -- и можно устроить то же самое для поверхности: z = -1 / (x^2 + y^2 - 1)
// Параметризуем, чтобы один из параметров был константой на разрыве.
var phi = grafar.range(-Math.PI, Math.PI, 50).select();
// По одному индексу для каждой непрерывной области:
var iArea = grafar.set([0, 1]).select();
var iValue = grafar.range(eps, 1 - eps, 50).select();
// Самое ловкое: в зависимости от индекса части применяем разные отображения
var r = grafar.map([iArea, iValue], function (a, val) {
  return a === 0 ? val : a / val;
});

var xs = grafar.map([phi, r], function (phi, r) {
  return r * Math.sin(phi);
});
var ys = grafar.map([phi, r], function (phi, r) {
  return r * Math.cos(phi);
});
var zs = grafar.map([xs, ys], function (x, y) {
  return -.1 / (x * x + y * y - 1);
});

var pan3d = new grafar.Panel(document.getElementById('surf'), {});
grafar.pin([xs, ys, zs], pan3d);