"use strict";
var grafar_1 = require("grafar");
var pan3d = new grafar_1.default.Panel(document.getElementById('render'), {});
var i = grafar_1.default.set([-1, 1]).select();
var t = grafar_1.default.range(0, 1, 30).select();
var p = grafar_1.default.constant(0).select();
var y = grafar_1.default.range(-1, 1, 60).select();
var x = grafar_1.default.map([i, t], function (i, t) { return i + t; });
var f = grafar_1.default.map([x, y], function (x, y) { return Math.sin(x * y) / 2; });
var z = grafar_1.default.map([f, p], function (f, p) { return f * p; });
grafar_1.default.pin({ axes: [x, y, z], color: [y, i, p] }, pan3d);
var time = 0;
(function up() {
    time += .025;
    grafar_1.default.constant(Math.pow(Math.sin(time), 3)).into(p);
    grafar_1.default.refresh();
    window.requestAnimationFrame(up);
}());
