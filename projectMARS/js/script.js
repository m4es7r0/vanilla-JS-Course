/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advToggle = () => document.querySelectorAll('.promo__adv img').forEach(i => i.remove());
advToggle();

const changeGenre = () => document.querySelector('.promo__genre').textContent = 'Драма';
changeGenre();

const changePoster = () => document.querySelector('.promo__bg').style.background = 'url(./img/bg.jpg)';
changePoster();

const addMovieList = ({ movies }) => {
    const movieList = document.querySelector('.promo__interactive-list');
    movieList.innerHTML = '';
    movies.sort().forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>`
    });
}
addMovieList(movieDB);