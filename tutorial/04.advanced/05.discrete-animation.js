// grafar.ms() считает время по своим правилам.
// Попробуем дискретное время.

// Скажем, хочу показывать прямоугольничек с углами в этих точках:
const data = [];
for (let i = 0; i < 3; i++) {
  data.push([ Math.random(), Math.random() ]);
}

// Создадим пару графар-переменных, в которые будем их складывать:
const x = grafar.range(0, 0, 2).select();
const y = grafar.range(0, 0, 2).select();

const pan = new grafar.Panel(document.getElementById('render')).setAxes(['x', 'y']);
grafar.pin([x, y], pan);


// Вот наше диксретное время:
let t = 0;
// Теперь функция, которая все обновляет:
const up = () => {
    // увеличиваем время
    t++;

    // переложить (аккуратно берем индекс по модулю)
    grafar.range(data[t % data.length][0], data[(t + 1) % data.length][0], 2).into(x);
    grafar.range(data[t % data.length][1], data[(t + 1) % data.length][1], 2).into(y);

    // Вызвать еще раз через секунду (1000 миллисекунд)
    window.setTimeout(up, 1000);
};
// Запускаем!
up();
