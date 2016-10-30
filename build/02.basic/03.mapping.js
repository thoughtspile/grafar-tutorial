'use strict';

// Я готов расцеловать отображения в новом графаре.
// Построим параметрическую кривую:
var t = grafar.range(0, 2 * Math.PI, 2000).select();
var curve = [grafar.map(t, function (t) {
  return Math.sin(t);
}), grafar.map(t, function (t) {
  return Math.cos(t);
}), grafar.map(t, function (t) {
  return Math.sin(t) * Math.cos(t);
})];
grafar.pin(curve, new grafar.Panel(document.getElementById('curve')));

// Теперь явную поверхность:
var x = grafar.range(-1, 1, 100).select();
var y = grafar.range(-1, 1, 100).select();
var z = grafar.map([x, y], function (x, y) {
  return Math.cos(x) * Math.sin(y);
});
grafar.pin([x, y, z], new grafar.Panel(document.getElementById('surf')));

// Возможно, парочку параметрических поверхносей?
var p = grafar.range(-1, 1, 100).select();
var q = grafar.range(0, 2, 100).select();
var i = grafar.ints(0, 2).select();

var xp = grafar.map([p, q], function (p, q) {
  return p - q;
});
var yp = grafar.map([p, q], function (p, q) {
  return p + q;
});
var zp = grafar.map([p, q, i], function (p, q, i) {
  return Math.sin(q + p) + i;
});

grafar.pin([xp, yp, zp], new grafar.Panel(document.getElementById('psurf')));