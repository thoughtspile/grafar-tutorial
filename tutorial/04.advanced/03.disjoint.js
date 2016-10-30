// Что делаем: строим график тангенса, обходя разрывы.
// Напоминаю: разрывы у тангенса в 2kπ ± π / 2

// Небольшое значение, чтобы отойти на столько от разрывов.
const eps = .00001;
// Это середины отрезков, на которых тангенс непрерывен: {kπ | k in N}
const mid = grafar.map(grafar.ints(-20, 20).select(), i => Math.PI * i);
// Вокруг каждой середины ходим туда-сюда на π/2 - eps
const t = grafar.range(-Math.PI / 2 + eps, Math.PI / 2 - eps, 30).select();

// Собираем домен: t непрерывные, mid дискретные, значит получится множество отрезков с небольшими дырами.
const x = grafar.map([mid, t], (mid, t) => mid + t);
// И теперь просто отображаем:
const y = grafar.map([x], x => Math.tan(x));

// Цепляем как обычно. Обратите внимание, что панель двумерная.
const pan2d = new grafar.Panel(document.getElementById('render'), {}).setAxes(['x', 'y']);
pan2d.camera.position.set(0, 25, 0);
grafar.pin([x, y], pan2d);


// Пара трюков -- и можно устроить то же самое для поверхности: z = -1 / (x^2 + y^2 - 1)
// Параметризуем, чтобы один из параметров был константой на разрыве.
const phi = grafar.range(-Math.PI, Math.PI, 50).select();
// По одному индексу для каждой непрерывной области:
const iArea = grafar.set([0, 1]).select();
const iValue = grafar.range(eps, 1 - eps, 50).select();
// Самое ловкое: в зависимости от индекса части применяем разные отображения
const r = grafar.map([iArea, iValue], (a, val) => a === 0? val: a / val);

const xs = grafar.map([phi, r], (phi, r) => r * Math.sin(phi));
const ys = grafar.map([phi, r], (phi, r) => r * Math.cos(phi));
const zs = grafar.map([xs, ys] , (x, y) => -.1 / (x*x + y*y - 1));

const pan3d = new grafar.Panel(document.getElementById('surf'), {});
grafar.pin([xs, ys, zs], pan3d);
