'use strict';

// grafar.ms() подходит для самого частого кейса -- явной зависимости от времени.
// Неявную анимацию так сделать не выйдет, потому что vsolve не может зависеть от
// других графар-переменных.

// Анимируем линию уровня такой функции:
var fun = function fun(x, y) {
    return x * Math.log(Math.pow(y, 2) + 1) + x / 2;
};
// Это фабрика генераторов линий уровня: fun === a.
var levelGen = function levelGen(a) {
    return grafar.vsolve(function (v) {
        return fun(v[0], v[1]) - a;
    }, 1000, 2);
};

// для начала просто решаем и отображаем
var levelset = levelGen(0).select();
var pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
grafar.pin(levelset, pan);

// ** Вот и сама анимация. grafar.ms() внутри делает то же самое. **
// Сперва создадим переменную, которая будет меняться:
var t = 0;
// Теперь функция, которая все обновляет:
var up = function up() {
    // сперва увеличиваем время
    t += .005;
    // Берем синус, чтобы наша линия уровня ходила по кругу, а не убегала слишком далеко.
    var p = Math.sin(t);
    // Как при управлении из интерфейса, используем <Generator>.into(<selection>)
    levelGen(p).into(levelset);
    // И просим вызвать еще раз
    window.requestAnimationFrame(up);
};
// Запускаем!
up();