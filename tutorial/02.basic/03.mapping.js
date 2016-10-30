// Я готов расцеловать отображения в новом графаре.
// Построим параметрическую кривую:
const t = grafar.range(0, 2 * Math.PI, 2000).select();
const curve = [
  grafar.map(t, t => Math.sin(t)),
  grafar.map(t, t => Math.cos(t)),
  grafar.map(t, t => Math.sin(t) * Math.cos(t))
];
grafar.pin(curve, new grafar.Panel(document.getElementById('curve')));


// Теперь явную поверхность:
const x = grafar.range(-1, 1, 100).select();
const y = grafar.range(-1, 1, 100).select();
const z = grafar.map([x, y], (x, y) => Math.cos(x) * Math.sin(y));
grafar.pin([x, y, z], new grafar.Panel(document.getElementById('surf')));


// Возможно, парочку параметрических поверхносей?
const p = grafar.range(-1, 1, 100).select();
const q = grafar.range(0, 2, 100).select();
const i = grafar.ints(0, 2).select();

const xp = grafar.map([p, q], (p, q) => p - q);
const yp = grafar.map([p, q], (p, q) => p + q);
const zp = grafar.map([p, q, i], (p, q, i) => Math.sin(q + p) + i);

grafar.pin([xp, yp, zp], new grafar.Panel(document.getElementById('psurf')));
