/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {

}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {

  if (!x)
    return 0;

  let sum_elements = x;

  f = function sum1(x1){
    if (x1) {
     sum_elements += x1;
      return f;
    }
    return sum_elements;
  };

  return f;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {

  if (first.length !== second.length) 
    return false;

  if(first.split('').sort().join() === second.split('').sort().join())
    return true;
  
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {

  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {

    if (new_arr.indexOf(arr[i]) === -1) {
      new_arr.push(arr[i]);
    }

  }
  return new_arr.sort(function(a, b) {
    return a - b;
  });
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {

  first = getUnique(first);
  second = getUnique(second);
  new_arr = [];

  for(let i = 0; i < first.length; i++) {

    if(second.indexOf(first[i]) !== -1) {
      new_arr.push(first[i]);
    }

  }

  return new_arr.sort(function(a, b) {
    return a - b;
  });
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {

  if (left.length !== right.length) 
    return false;

  let diff_char = 0;

  for (let i = 0; i < left.length; i++) {

    if (left[i] !== right[i]) 
      diff_char++;

    if(diff_char >= 2)
      return false;
  }

  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
