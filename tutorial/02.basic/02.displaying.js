// Просто пара генераторов из прошлой части, ничего интересного.
const x = grafar.range(-1, 1, 20).select();
const y = grafar.range(-1, 1, 20).select();
const z = grafar.set([-1, 0, 1]).select();

// Выбираю элемент, в котором буду отображать графики. Важно, чтобы у него была
// собственная высота.
const container = document.getElementById('render');
// Создаю в нем область для рисования:
const pan = new grafar.Panel(container);

const graphs = {};
// Отобразим не очень веселый график.
// Первый параметр -- координаты точек, второй -- панель.
graphs.plain = grafar.pin([x, y, z], pan);

// Развеселим наш график цветами. Теперь первый параметр -- объект из
// координат (axes) и цветов ([r, g, b]).
graphs.color = grafar.pin({ axes: [x, y, z], color: [x, y, z] }, pan);

// hide(state) -- единственный полезный метод класса Рin.
// hide(true) прячет график, hide(false) показывает его.
// Добавим легкий интерактивчик:
const control = document.getElementById('type');
const selectVisible = value => {
  Object.keys(graphs).forEach(key => {
    graphs[key].hide(control.value !== key);
  });
};
selectVisible();
control.addEventListener('change', selectVisible);
