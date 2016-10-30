// Теперь проделаем тот же трюк для системы неравенств:
// x^2 + y^2 <= 2 & x >= 0 & y >= 0 (четверть круга)

// Первое ограничение как в прошлый раз
const fnCirc = v => Math.pow(v[0], 2) + Math.pow(v[1], 2) - 2;
// Другие ограничения аналогично (минус, чтобы в целевой области у всех
// ограничений было отрицательное значение)
const fnHalfplaneX = v => -v[0];
const fnHalfplaneY = v => -v[1];

// Теперь собираем вместе: f(x) <= 0 & g(x) <= 0 <=> max(f(x), g(x)) <= 0
const fnArea = v => Math.max(fnCirc(v), fnHalfplaneX(v), fnHalfplaneY(v));

const area = grafar.vsolve(fnArea, 10000, 2, { neq: true }).select();
const pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
grafar.pin(area, pan);


// Что-то посложнее:  остальные 3/4 круга (с зазорчиком в 0.1) через объединение + пересечение
// x^2 + y^2 <= 2 & ( x <= -.1 | y <= -.1 )

// Вот часть с объединением: (x + .1 <= 0 | y + .1 <= 0) <=> min(x + .3, y + .3) <= 0
const fnAxes = v => Math.min(v[0] + .1, v[1] + .1);
// Пересечение:
const fnArea2 = v => Math.max(fnCirc(v), fnAxes(v));
const area2 = grafar.vsolve(fnArea2, 10000, 2, { neq: true }).select();
grafar.pin({ axes: area2, color: [area2, area2[0]] }, pan);


// Как не надо делать: в js-традиции было бы сложить функции в массив `fns` и
// свернуть: v => Math.max.apply(Math, fns.map(fn => fn(v)))
// На самом деле это мусорный кошмар: функция вызывается очень много раз,
// и каждый раз map выплевывает массив, который потом выбрасывается. Кроме того,
// apply -- дорогая функция. Описывайте свои системы руками.
