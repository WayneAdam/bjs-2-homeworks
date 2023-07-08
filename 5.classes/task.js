/**Задача 1 */
// 1. Создание базового класса
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name,
    this.releaseDate = releaseDate,
    this.pagesCount = pagesCount,
    this._state = 100,
    this.type = null

  }

  //метод увеличивающий в 1.5 раза свойство _state
  fix() {
    this._state *= 1.5;
    if (this._state > 100) {
      this._state = 100;
    }

  }

  //устанавливает знанчение свойству _state
  set state(stateNumber) {
    if (stateNumber < 0) {
      this._state = 0;
      return;
    } else if (stateNumber > 100) {
      this._state = 100;
      return;
    } else {
      this._state = stateNumber;
      return;
    }

  }

  //читает значение свойства _state
  get state() {
    return this._state;
  }

};

/**пример использования */
// const sherlock = new PrintEditionItem(
//   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//   2019,
//   1008
//  );
 
//  console.log("releasDate", sherlock.releaseDate); //2019
//  console.log("state", sherlock.state); //100
//  sherlock.fix();
//  console.log("fixState", sherlock.state); //100
/**------------------ */

//создает класс журналов
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }

};

//создает класс книг
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }

};

//создает класс "роман"
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }

};

//создает класс "фантастика"
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }

};

//создает класс "детектив"
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }

};

/**пример использования */
// const picknick = new FantasticBook(
//   "Аркадий и Борис Стругацкие",
//   "Пикник на обочине",
//   1972,
//   168
// );
// console.log("author", picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log("state", picknick.state); //10
// picknick.fix();
// console.log("fixState", picknick.state); //15
/**--------------------------------------------------------*/

/**Задача 2 */
//создает класс "библиотека"
class Library {
  constructor(name = "") {
    this.name = name;
    this.books = [];
    
  }

  //добавляет книгу в хранилище
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }

  }

  //возвращает книгу по искомому ключу и значению
  findBookBy(type, value) {
    //находит искомую книгу
    const result = this.books.find(book => {
      return book[type] === value;
    });

    //возвращает null если не находит кнуг
    if (result === undefined || false) {
      return null;
    }

    return result;

  }

  //удаляет книгу из библиотеки и возвращает ее
  giveBookByName(bookName) {
    //находит индекс книги с искомым именем
    const bookIndex = this.books.findIndex((book) => {
      return book.name === bookName;
    });

    //проверяет выход за пределы массива
    if (bookIndex < 0) {
      return null;
    }

    //присваевает в переменную книгу с искомым именем
    const book = this.books[bookIndex];
    //удаляет книгу из библиотеки
    this.books.splice(bookIndex, 1);
    //возвращает книгу
    return book;
  }
};

/**пример использования */
// const library = new Library("Библиотека имени Ленина");

// library.addBook(
//  new DetectiveBook(
//    "Артур Конан Дойл",
//    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//    2019,
//    1008
//  )
// );
// library.addBook(
//  new FantasticBook(
//    "Аркадий и Борис Стругацкие",
//    "Пикник на обочине",
//    1972,
//    168
//  )
// );

// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
/**--------------------------------------------------------*/