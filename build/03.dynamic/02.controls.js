'use strict';

// Значением этой переменной будет управлять польователь.
// Объявление никак не отличается от статичного.
var p = grafar.constant(0).select();

var x = grafar.range(-2, 2, 500).select();
var y = grafar.map([x, p], function (x, p) {
  return 2 * Math.sin(x + p);
});

grafar.pin([x, y], new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']));

// Добавим интерактивности.
// Как обычно, берем управляющий дом-элемент:
var control = document.getElementById('ctrl__p');
// Эта функция перекладывает значение из интерфейса в `p`.
var update = function update() {
  var val = Number(control.value);
  // Создаем графар-переменную с ним:
  grafar.constant(val)
  // Но вместо .select(), который создает новое измерение, записываем в `p`.
  .into(p);
};
// Снова обычные дом-манипуляции
control.addEventListener('input', update);
update();

// Еще раз, если gvar -- графар-переменная, то ее можно обновить так:
// grafar.<любой генератор>.into(gvar);