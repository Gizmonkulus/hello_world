"use strict";
//console.log();

//1st lesson
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'over9k');

// const personalMovieDB = {
//     count: numberOfFilms,        
//     movies:{},
//     actors: null,
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?'),
//     b = prompt('На сколько оцените его?'),
//     c = prompt('Один из последних просмотренных фильмов?'),
//     d = prompt('На сколько оцените его?');
    
//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



//2nd lesson

// if (4==9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num =50;
// if (num < 49){
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('too much!');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('error');

// const num =50;
// switch (num) {
//     case 49: 
//         console.log('Error!');
//         break;
//     case 100:
//         console.log('Error!');
//         break;
//     case '50':
//         console.log('ok!');
//         break;
//     default:
//         console.log('try later!');
//         break;
// }


//Циклы
// let num =50;

// while (num <=55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <=55);

// for (let i = 1; i <= 10; i++) {   
//     if (i%2 == 1) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }

//3rd lesson
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,        
//     movies:{},
//     actors: null,
//     genres: [],
//     privat: false
// };


// for (let i = 1; i <= 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 5 && b.length < 5 ) {                
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         }         
//             else {
//                 console.log('error');
//                 i--;
                
//             }
// }  
// console.log(personalMovieDB);

// console.log(personalMovieDB.count);

// if (personalMovieDB.count < 10) {
//                alert('Просмотрено довольно мало фильмов');
//      } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) { 
//                alert('Вы классический зритель');
//      } else if (personalMovieDB.count > 30) {
//                alert('Вы киноман');
//     } else {
//                 alert('Произошла ошибка');
//             }



// || (a.str.lenght || b.str.lenght >= 50 )


//----------ФУНКЦИИ

// let num = 20;
// function showFirstMassage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassage('Hello_world');
// console.log(num);

// function calc (a, b){
//     return (a + b);
// }
// console.log(calc(1, 3));


// function ret (){
//     let num = 50;let asd= 20;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function(){
//     console.log('hello');
// };
// logger();


// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };


//_________МЕТОДЫ И СВОЙСТВА_________


// const str = 'test';
// const arr = [1, 2, 4];
// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());

// const fruit = 'Some fruit'; 
// console.log(fruit.indexOf('fruit')); // Порядковый номер элемента

// const logg = 'HEllo world';  - выделение определнённого участка 
// //console.log(logg.slice(6, 11));
// //console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 3));

// const num = 12.2;        //округление 
// console.log(Math.round(num));

// const test = '12.2px';        //Перевод в другую систему исчислений 
// console.log(parseInt(test));
// console.log(parseFloat(test));


//_____________Практика 2 (18)

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''|| numberOfFilms ==null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,        
    movies:{},
    actors: null,
    genres: [],
    privat: false
};

function rememberMyFilms(){
for (let i = 1; i <= 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 5 && b.length < 5 ) {                
            personalMovieDB.movies[a] = b;
            console.log('done');
        }         
            else {
                console.log('error');
                i--;
                
            }
}  


}
//rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) { 
        alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
} else {
         alert('Произошла ошибка');
     }
}
//detectPersonalLevel();

function writeYourGenres (){
    for (let i = 0; i <= 2; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`); 
    }
}
writeYourGenres();

// function showMyDB() {
//     (personalMovieDB.privat === false) ? console.log(personalMovieDB) : console.log('error');
// }
// showMyDB();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);