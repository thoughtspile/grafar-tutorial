// Приспособим решатель уравнений для неравенств: x^2 + y^2 <= 2 (это круг).
const fnCirc = v => Math.pow(v[0], 2) + Math.pow(v[1], 2) - 2;
// Запускаем солвер с опцией neq: true
const area = grafar.vsolve(fnCirc, 10000, 2, { neq: true }).select();

const pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
// Получается область с жирной границей и точками внутри.
// Общий момент для vsolve: в area уже лежат двумерные данные, оборачивать их в массив не нужно.
grafar.pin(area, pan);
