// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// const  dog = {
//     bark: true,
//     height: 100,
//     weight: 20,
//     width: 200,
//     name: 'Rex'
// }
// const man = {
//     height: 200,
//     weight: 80,
//     width: 100,
//     name: 'Yurii',
//     job: 'Front-end'
// }
// const car = {
//     speed: 300,
//     weight: 1700,
//     brand: 'mercedes-benz',
//     type: 'C63 AMG',
//     drift: true
// }
// const apartment = {
//     price: 250000,
//     location: 'Lviv',
//     size: 50,
//     owner: true,
//     garage: true
// }
// const book = {
//     price: 200,
//     interesting: true,
//     hero: 4,
//     pages: 200,
//     autor: 'Yurii'
// }

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// const arrDog = ['bulldog', 'pitbull', 'cocerspaniel', 'haski', 'shpic']
// const arrPeople = ['Yurii', 'Natalia', 'Maryana', 'Nazar', 'Vitalik']
// const arrCars = ['BMW', 'Mercedes', 'Volvo', 'Honda', 'Lada']
// console.log(arrDog);
// console.log(arrPeople);
// console.log(arrCars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// const house = {
//     price: 250000,
//     location: 'Lviv',
//     size: 50,
//     owner: {name: 'Yurii', job: 'Front-end'},
//     garage: ['Mercedes-Benz', 'BMW', 'McLaren']
// }
// const driver = {
//     name: 'Yurii',
//     car: 'BMW',
//     documents: ['Driving Licnes', 'Car Licnes', 'Insurens'],
//     skills: {
//         drift: true,
//         drag: true,
//         slow: false
//     },
//     maxSpeed: 240
// }
// const toy = {
//     name: 'Ted',
//     type: 'tedybear',
//     discribe: {
//         size: 'small',
//         legs: 2,
//         arms: 2,
//     },
//     buy: ['amazon', 'ebay', 'ali-express'],
//     price: 500
// }
// const teable = {
//     name: 'Teable',
//     wood: 'Tree',
//     discribe: {
//         size: 'small',
//         legs: 4
//     },
//     buy: ['amazon', 'ebay', 'ali-express'],
//     price: 1500
// }
// const bag = {
//     name: 'Bag',
//     type: 'Camping',
//     discribe: {
//         size: 'M',
//     },
//     buy: ['amazon', 'ebay', 'ali-express'],
//     price: 200
// }
//

// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[users.length - 2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age +" "+ users[4].name);
// console.log(users[5].age + ' ' + users[5].status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

// const content = document.getElementById('content')
// console.log(content.innerText);
//
// const rules = document.getElementById('rules')
// console.log(rules.innerText);
//
// content.innerText = 'Yurii Oleksvskyi'
// rules.innerText = " age 22"
//
// content.style.backgroundColor = 'red'
// rules.style.backgroundColor = 'red'
//  const ul = document.getElementsByClassName('fc_rules')
// for (const ulElement of ul) {
//     ulElement.style.backgroundColor = 'red'
// }
// content.style.color = 'blue'
// rules.style.color = 'blue'
//
// for (const ulElement of ul) {
//     ulElement.style.color = 'blue'
// }
//
// let ruleses = document.getElementById('rules')
// console.log(ruleses);
//
// let fc_rules = document.getElementsByClassName('fc_rules')
// for (const fcRule of fc_rules) {
//     console.log(fcRule);
//     fcRule.style.color = 'red'
// }





