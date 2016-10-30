// grafar.set() может переложить в графар только одномерные данные.
// Сейчас мы трюком переложим туда важные двумерные коордниаты

// Представьте, что это правда очень важные данные
const data = [];
for (let i = 0; i < 300; i++) {
  data.push([ Math.random() - .5, Math.random() - .5 ]);
}

// Это индекс-переменная, которая поможет обойти массив (ints включает границы):
const i = grafar.ints(0, data.length - 1).select();

// А это графар-переменные с нашими данными
const x = grafar.map(i, i => data[i][0]);
const y = grafar.map(i, i => data[i][1]);

const pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
grafar.pin([x, y], pan);
