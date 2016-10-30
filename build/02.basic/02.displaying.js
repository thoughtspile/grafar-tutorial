'use strict';

// Просто пара генераторов из прошлой части, ничего интересного.
var x = grafar.range(-1, 1, 20).select();
var y = grafar.range(-1, 1, 20).select();
var z = grafar.set([-1, 0, 1]).select();

// Выбираю элемент, в котором буду отображать графики. Важно, чтобы у него была
// собственная высота.
var container = document.getElementById('render');
// Создаю в нем область для рисования:
var pan = new grafar.Panel(container);

var graphs = {};
// Отобразим не очень веселый график.
// Первый параметр -- координаты точек, второй -- панель.
graphs.plain = grafar.pin([x, y, z], pan);

// Развеселим наш график цветами. Теперь первый параметр -- объект из
// координат (axes) и цветов ([r, g, b]).
graphs.color = grafar.pin({ axes: [x, y, z], color: [x, y, z] }, pan);

// hide(state) -- единственный полезный метод класса Рin.
// hide(true) прячет график, hide(false) показывает его.
// Добавим легкий интерактивчик:
var control = document.getElementById('type');
var selectVisible = function selectVisible(value) {
  Object.keys(graphs).forEach(function (key) {
    graphs[key].hide(control.value !== key);
  });
};
selectVisible();
control.addEventListener('change', selectVisible);