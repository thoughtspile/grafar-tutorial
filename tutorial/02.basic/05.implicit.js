// Что делаем: строим неявную поверхность

// Сначала строим поверхность. параметры передаются в
// функцию в массиве (по техническим причинам)
const surf = grafar.vsolve(
    // Нули какой функции искать. x^3 + y^2 + z^2 == 2, но в векторной форме
    v => Math.pow(v[0], 3) + Math.pow(v[1], 2) + Math.pow(v[2], 2) - 2,
    // Сколько решений найти (сейчас 50000 точек)
    50000,
    // Размерность системы: сейчас решаем для 3 нейзвестных
    3
).select();

// Показать как обычно
grafar.pin(surf, new grafar.Panel(document.getElementById('render')));