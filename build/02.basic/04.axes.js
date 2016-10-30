'use strict';

var x = grafar.range(-1, 1, 100).select();
var y = grafar.map(x, function (x) {
  return 2 * Math.sin(x);
});

var pan = new grafar.Panel(document.getElementById('render'));

// Сделаем график двухмерным и назовем оси:
pan.setAxes(['Валютные резервы США', 'Продажи мороженого на Ямале']);

// Дальше все как обычно, но нужно передать всего две координаты
grafar.pin([x, y], pan);
// Для цвета все еще три компонента:
grafar.pin({ axes: [y, x], color: [x, y, x] }, pan);