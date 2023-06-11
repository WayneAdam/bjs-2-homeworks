"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  // нахождение дискриминанта
  const d = b ** 2 - 4 * a * c;
  // если дискриминант меньше нуля
  if (d < 0) {
      return arr;
  }
  // если дискриминант равен нулю
  if (d === 0) {
      arr.push(-b / (2 * a));
      return arr;
  }
  // если дискриминант большде нуля
  if (d > 0) {
      arr.push((-b + Math.sqrt(d)) / (2 * a));
      arr.push((-b - Math.sqrt(d)) / (2 * a));
      return arr;
  }
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // 2. преобразование процентной ставки
  percent = percent / 100;
  // 3. расчёт тела кредита
  let loanBody = amount - contribution;
  // расчет ежемесячной процентной ставки
  let monthlyPercent = percent / 12;

  // 4. расчёт ежемесячной платы
  let monthlyPayment = 
      loanBody * 
      (monthlyPercent + (monthlyPercent / 
      (((1 + monthlyPercent)**countMonths) - 1)));
  // 5. расчёт общей суммы, которую заплатит клиент
  let clientTotalAmount = monthlyPayment * countMonths;
  // 6. округлить результат общей суммы для двух зн. посл. запятой
  clientTotalAmount = Math.round(clientTotalAmount * 100) / 100;

  //вернуть результат из функции
  return clientTotalAmount;
};