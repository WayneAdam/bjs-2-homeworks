/**Задача 1.1 */
function parseCount(parseValue) {
  //присваевает результат парсинга в переменную
  let parseResult = null;
  parseResult = Number.parseFloat(parseValue);

  //выбрасывает исключение с ошибкой
  if (Number.isNaN(parseResult)) {
    throw new Error("Невалидное значение");
  }

  //возвращает результат
  return parseResult;

};
/**для проверки */
// console.log(parseCount("dfgd"));

/**Задача 1.2 */
function validateCount(parseValue) {
  try {
    return parseCount(parseValue);
  } catch (error) {
    return error;
  }

};
/**для проверки задачи 1 */
// console.log(validateCount("sgds"));

/**Задача 2.1 */
//создает класс "треугольник"
class Triangle {
  constructor(sideA, sideB, sideC) {
    //выбрасывает ошибку если правила существования треугольника нарушены
    if ((sideA + sideB) < sideC ||
        (sideA + sideC) < sideB ||
        (sideB + sideC) < sideA) {
      throw new Error("Треугольник с такими сторонами не существует");

    }

    //считает периметр
    this._perimeter = sideA + sideB + sideC;

    //считает полупериметр
    let samiP = (sideA + sideB + sideC) / 2;
    
    //считает площадь треугольника
    let a = Math.sqrt(samiP * (samiP - sideA) * (samiP - sideB) * (samiP - sideC)).toFixed(3);
    this._area = parseFloat(a);

  }

  //возвращает периметр треугольника
  get perimeter() {
    return this._perimeter;

  }

  //возвращает площадь треугольника
  get area() {
    return this._area;
  }

};
/**для проверки задачи 2.1 */
// console.log(new Triangle(13, 14, 30)); // ошибка
// console.log(new Triangle(13, 14, 15).perimeter); // 42
// console.log(new Triangle(13, 14, 15).area); // 84.000

/**Задача 2.2 */
function getTriangle(sideA, sideB, sideC) {
  try {
    //возвращает объект треугольника
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    function Object() {
      return newObj = {
        get area() {
          return "Ошибка! Треугольник не существует";

        },

        get perimeter() {
          return "Ошибка! Треугольник не существует";

        }
      }

    }
    //возвращает объект с двумя геттерами
    return Object();
  }

};