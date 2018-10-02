/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */

function getMinMax(string) 
{
  //const reg = new RegExp('-?\d+(\.\d+)?', 'g');      
  const reg = new RegExp('-?[0-9]+(\.[0-9]+)?', 'g');
  const num = string.match(reg);

  return { min: Math.min.apply(null, num), max: Math.max.apply(null, num) }
}

//console.log(getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028'));

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciSimple(x) 
{
  if (x === 0 || x === 1) 
    return x;     
  else 
    return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);	
}


/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

const cache = new Map();

function fibonacciWithCache(x) 
{
  if(!cache.has(x))
  {
    //console.log('without cache');

    if (x === 0 || x === 1)
    {
      cache.set(x, x);  
      return cache.get(x);
    }   
    else 
    {
      cache.set(x, fibonacciSimple(x - 1) + fibonacciSimple(x - 2));	
      return cache.get(x);
    }
  }
  else 
  {
    //console.log('cache');
    return cache.get(x);
  }
}


/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */

function printNumbers(max, cols) 
{
  const rows = Math.ceil(max / cols);

  let table = '';

  for (let i = 0; i < rows; i++) 
  {
    for (let j = 0; j < cols; j++) 
    { 
        let number = i + (j * rows);
        if(number <= max)
          table += `${number}`.padStart(2) +' ';
    }

    if(i != rows - 1)
      table += '\n';
  }

  return table;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */

function rle(input) 
{
  let sum = 1;

  let str_rle = '';

  for (let i = 0; i < input.length; i++) 
  {
    if (input[i] === input[i + 1]) 
      sum++;
    else
    {
      if(sum > 1)
        str_rle += input[i] + sum;
      else  
        str_rle += input[i];
      
      sum = 1;
    }
  }
  return str_rle;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/
