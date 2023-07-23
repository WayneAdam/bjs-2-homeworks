class AlarmClock{
  constructor() {
    this.alarmCollection = []; // для хранения коллекции звонков
    this.intervalId = null; // для хранения id таймера

  };

  // добавляет новый звонок
  addClock(time, callback) {
    // проверяет переданы ли параметры
    if (!time || !callback ||
        time === undefined ||
        callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");

    }

    // проверяет есить ли звонок с таким же именем
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i] == time) {
        console.warn("Уже присутствует звонок на это же время");

      }

    }

    // добавляет в массив звонков объект
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,

    })

  };

  // удаляет звонки по определенному времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(timeElement => {
        return timeElement.time !== time;

    })

  };

  // возвращает текущее время 
  getCurrentFormattedTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // проверяет формат минут
    if (hours < 10) {
      hours = "0" + hours;

    }
    //проверяет формат часов
    if (minutes < 10) {
      minutes = "0" + minutes;

    }

    let currentFormat = `${hours}:${minutes}`;
    return currentFormat;

  };

  // запускает будильник
  start() {
    //проверка наличия интервала
    if (this.intervalId !== null || this.intervalId !== undefined) {
      return;

    }

    // создает интервал
    this.intervalId = setInterval(() => {
      // перебирает все звонки
      this.alarmCollection.forEach(element => {
        // проверяет возможность запуска
        if (this.getCurrentFormattedTime() === element.time &&
            element.canCall === true) {
              element.canCall = false;
              element.callback();

        }

      })

    }, 1000)

  };

  // останавливает выполенение интервала будильника
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;

  };

  // сбрасывает возможность запуска всех звонков
  resetAllCalls() {
    this.alarmCollection.forEach((element) => {
      element.canCall = true;

    })

  };

  // удаляет все звонки
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };

};