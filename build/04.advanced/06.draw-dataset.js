'use strict';

// grafar.set() может переложить в графар только одномерные данные.
// Сейчас мы трюком переложим туда важные двумерные коордниаты

// Представьте, что это правда очень важные данные
var data = [];
for (var _i = 0; _i < 300; _i++) {
  data.push([Math.random() - .5, Math.random() - .5]);
}

// Это индекс-переменная, которая поможет обойти массив (ints включает границы):
var i = grafar.ints(0, data.length - 1).select();

// А это графар-переменные с нашими данными
var x = grafar.map(i, function (i) {
  return data[i][0];
});
var y = grafar.map(i, function (i) {
  return data[i][1];
});

var pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
grafar.pin([x, y], pan);