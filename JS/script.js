"use strict";
//console.log();


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'over9k');




const personalMovieDB = {
    count: numberOfFilms,        
    movies:{},
    actors: null,
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько оцените его?');
    
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }