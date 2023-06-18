/**задача 1 */
function getArrayParams(...arr) {
  //создание переменных и присвоение значений
  let min = +arr[0], max = +arr[0], sum = 0, count = 0, result = 0;
  //перебор массива
  for (let i = 0; i < arr.length; i++) {
    count++;
    sum += arr[i];
    /**если эллемент больше предыдущего максимума,
     * то максимум становится равен элементу */
    if (arr[i] > max) {
      max = arr[i];
    }
    /**если элемент больше предыдущего минимума,
     * то минимум становится равен элементу */
    if (arr[i] < min) {
      min = arr[i];
    }
    //вычисление среднего
    result = +(sum / count);
    avg = +(result.toFixed(2));
  }

  return { min: min, max: max, avg: avg };
};
/**задача 2 */
/**вычисление суммы элементов массива */
function summElementsWorker(...arr) {
  //проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  //создание переменной для суммирования значений массва
  let sumElementsArray = 0;
  //нахождение суммы элементов массива
  for (let i = 0; i < arr.length; i++) {
    sumElementsArray += arr[i];
  }
  //возврат суммы элементов
  return sumElementsArray;
};
/**вычичление разницы максимального и минимального значений */
function differenceMaxMinWorker(...arr) {
  //проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  //объявление переменных
  let max = 0, min = 0;
  //поиск максимального и минимального значений
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(...arr);
    min = Math.min(...arr);
    //расчёт разницы макс. и мин. значений
    let differenceMaxMin = +(max - min);
    //возврат разницы
    return differenceMaxMin;
  }
};
/**вычисление разницы чётных и нечётных элементов */
function differenceEvenOddWorker(...arr) {
  //проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  //создание переменных для четных и нечётных элементов
  let sumEvenElement = 0, sumOddElement = 0;
  //создание переменной с результатом разницы двух элементов
  let difference;
  //цикл для перебора всех элементов массива
  for(let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  //вычисление разницы двух элементов
  difference = +(sumEvenElement - sumOddElement);
  //возврат разницы разницы двух элементов
  return difference;
};
/**вычисление средних значений чётных элементов */
function averageEvenElementsWorker(...arr) {
  //проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  //объявление переменных
  let sumEvenElement = 0, countEvenElement = 0, result = 0;
  //цикл для перебора всех элементов
  for (let i = 0; i < arr.length; i++) {
    //проверка четного элемента
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  //результат деления суммы элементов на их количество
  result = +(sumEvenElement / countEvenElement);
  //возвращение результата
  return result;
};
/**задача 3 */
function makeWork(arrOfArr, func) {
  //создание переменных
  let maxWorkerResult = -Infinity;
  //цикл для перебора массива arrOfArr
  for (let i = 0; i < arrOfArr.length; i++) {
    //результат функции в константу
    const result = func(...arrOfArr[i]);
    //проверка, полученное значение больше значения maxWorkerResult?
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  //возврат максимального значения результатов насадки
  return maxWorkerResult;
};
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, differenceMaxMinWorker));