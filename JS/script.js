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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == ''|| numberOfFilms ==null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// //start();

// const personalMovieDB = {
//     count: numberOfFilms,        
//     movies:{},
//     actors: null,
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
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


// }
// //rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
// } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) { 
//         alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман');
// } else {
//          alert('Произошла ошибка');
//      }
// }
// //detectPersonalLevel();

// function writeYourGenres (){
//     for (let i = 0; i <= 2; i++) {
//     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`); 
//     }
// }
// writeYourGenres();

// // function showMyDB() {
// //     (personalMovieDB.privat === false) ? console.log(personalMovieDB) : console.log('error');
// // }
// // showMyDB();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);


//_____________Callback function
// function first() {
//     //do something
//     setTimeout(function() {
//        console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS (lang, callback) {        
//     console.log(`я учу: ${lang}`);    
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);


//_____________ОБЪЕКТЫ___________

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 768,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {        //____ФУНКЦИИ ВНУТРИ ОБЪЕКТА
//         console.log('test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


//console.log(Object.keys(options).length);      //_____Получение количества объектов 

// delete options.colors.border;   //__УДАЛЕНИЕ
// options.colors['private'] = true;   //Добавление
// console.log(options);

// let counter = 0;    //___Получение количества объектов перебором
// for (let key in options) {              //___ПЕРЕБОР ОБЪЕКТОВ
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {        //__Перебор объктов внутри объекта
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);



//_____________________МАССИВЫ_______________

//  const arr = [1, 12, 23, 26, 18];

//  arr.sort(compareNum); //__Сортировка от < 2 >
//  console.log(arr);
//  function compareNum (a, b) {
//      return a - b;
//  }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// //arr.pop();   //___Удаление последнего элемента из массива
// // arr.push(10);  //___Добавление элемента в конец массива
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// arr[99] = 0;
// // for (let value of arr) {
// //     console.log(value);
// // }
// console.log(arr.length);
// console.log(arr);


// const str = prompt("","");  // ___Создание массива из введённых данных чере ", "]]
// const products = str.split(", ");
// products.sort();
// //console.log(products);
// console.log(products.join('; '));


//_________Передача по ссылке или по значению

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Передаёт ссылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);


// function copy (mainObj) { //___Копирование
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newMumbbers = copy(numbers);
// newMumbbers.a = 10;
// newMumbbers.c.x = 10;

// console.log(newMumbbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

//  const clone = Object.assign({}, add);

//  clone.d = 20;
//  console.log(add);
//  console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1]='asdadadasd';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);  //Раскладывание объкта или массива


// const array = ['a', 'b'];
// const newArrray = [...array];


// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};



//___________ООП____________

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier); // Создание прототипных связей

// // const john = {
// //     health: 100
// // };

// //john.__proto__ = soldier;
// //Object.setPrototypeOf(john, soldier);
// //console.log(john.sayHello);
// john.sayHello();


//__________ПРАКТИКА 3 (24)___________

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: null,
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function rememberMyFilms() {
//         for (let i = 1; i <= 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?'),
//                 b = prompt('На сколько оцените его?');

//             if (a != null && b != null && a != '' && b != '' && a.length < 15 && b.length < 15) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             alert('Просмотрено довольно мало фильмов');
//         } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count > 30) {
//             alert('Вы киноман');
//         } else {
//             alert('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         (personalMovieDB.privat === false) ? (personalMovieDB.privat = true) : (personalMovieDB.privat = false);
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i <= 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);

//             // if (genre != null && genre != '') {
//             //     personalMovieDB.genres[i] = genre;
//             //     console.log('done');
//             // } else {
//             //     console.log('error');
//             //     i--;
//             // }
//         }    

//         for (let i = 0; i < 1; i++) {
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             if (genres != null && genres != '') {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }

//         }

//         personalMovieDB.genres.forEach(function (item, i) {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     },
// };

// console.log(personalMovieDB);



//_____________ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ_____________

//To String
// //1)
// console.log(typeof(String(4)));

// //2) 
// console.log(typeof(4 + ''));

// const num = 5;

// console.log("http://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

//To Number

//1)
// console.log(typeof(Number('4')));

//2) 
// console.log(typeof(+ '5'));

//3)
// console.log(typeof(parseInt('15px', 10)));

// let answ= +prompt('Hello', '');


//To Boolean

// 0, '', null, undefined, NaN;
// //1)
// let switcher = null;
// if (switcher){
//     console.log('working...');
// }
// switcher = 1;
// if (switcher){
//     console.log('working...');
// }

// //2) 
// console.log(typeof(Boolean('4')));

// //3) 
// console.log((!!!'4444'));


//___________DOM_______________

// const box = document.getElementById('box');

// const btns = document.getElementsByTagName('button')[1]; //Сразу указываем нужную кнопку
// console.log(btns[1]); //Берем из всего списка нужную

// const circles = document.getElementsByClassName('circle');

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {    //Вывод всех элементов с классом .heart
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); //Берет только первый селектор с указанным селектором
// console.log(oneHeart);


//__________Работа с DOM______________________Смотри в DOM