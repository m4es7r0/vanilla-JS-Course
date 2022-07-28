/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

4) Автоматизировать вопросы пользователю про фильмы при помощи цикла

5) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

6) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

7) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

8) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

(**) Потренироваться и переписать цикл еще двумя способами*/

// const questions = () => {
    
// }
// questions();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            alert('введите корректное значение');
            this.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    detectPersonalLvl: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('error: введите число');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastViewFilm = prompt('Один из просмотренных фильмов?', '').trim();
            const rating = +prompt('На сколько вы оценили его?', '').trim();

            if (lastViewFilm != null && rating != null && lastViewFilm != '' && rating != '' && lastViewFilm.length <= 50) {
                this.movies[lastViewFilm] = rating;
            } else {
                i--;
            }
        }
    },
    showMyDB: function () {
        if (!this.private) {
            console.log(`private: false =>`);
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.private ? this.private = false : this.private = true;
    },
    writeYourGeners: function () {
        for (let i = 0; i < 3; i++) {
            const gener = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (gener != null && gener != '' && gener.length >= 3) {
                this.genres[i] = gener;
            } else {
                alert('введите верное значение');
                i--;
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },
}