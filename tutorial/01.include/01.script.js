// На страницу нужно включить:
//  - собранный скрипт графара: <script src="/js/libs/grafar.js"></script>
//  - сам этот скрипт:          <script src="/js/01-include/script.js"></script>

// API можно вызывать просто через grafar:
var x = grafar.range(0, 1).select();
console.log(x);

// Или через window.grafar:
console.log(window.grafar);
