// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// console.log(cars.filter(item => item.volume >= 3));

// - двигун = 2л
// console.log(cars.filter(item => item.volume === 2));

// - виробник мерс
// console.log(cars.filter(item => item.producer === "mercedes"));

// - двигун більше 3х літрів + виробник мерседес
// console.log(cars.filter(item => item.producer === "mercedes" && item.volume >= 3));

// - двигун більше 3х літрів + виробник субару
// console.log(cars.filter(item => item.producer === 'subaru' && item.volume >= 3));

// - сили більше ніж 300
// console.log(cars.filter(item => item.power > 300));

// - сили більше ніж 300 + виробник субару
// console.log(cars.filter(item => item.producer === 'subaru' && item.power > 300));

// - мотор серіі ej
// console.log(cars.filter(item => item.engine.includes('ej')));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(item => item.engine.includes('ej') && item.power > 300));

// - двигун меньше 3х літрів + виробник мерседес
//console.log(cars.filter(item => item.producer === 'mercedes' && item.volume <= 3));

// - двигун більше 2л + сили більше 250
//console.log(cars.filter(item => item.volume >= 2 && item.power > 250));

// - сили більше 250  + виробник бмв
//console.log(cars.filter(item => item.producer === 'bmw' && item.power > 250));

// - взять слдующий массив
//let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// console.log(usersWithAddress.sort((a, b) => a.id - b.id));

// -- отсортировать его по id пользователей в обратном опрядке
//console.log(usersWithAddress.sort((a, b) => a.id - b.id? -1:1));

// -- отсортировать его по возрасту пользователей
//console.log(usersWithAddress.sort((a, b) => a.age - b.age));

// -- отсортировать его по возрасту пользователей в обратном порядке
//console.log(usersWithAddress.sort((a, b) => a.age - b.age? -1:1));

// -- отсортировать его по имени пользователей
//console.log(usersWithAddress.sort((a, b) => a.name < b.name ? -1 : 1));

// -- отсортировать его по имени пользователей в обратном порядке
//console.log(usersWithAddress.sort((a, b) => a.name < b.name ? 1 : -1))

// -- отсортировать его по названию улицы  в алфавитном порядке
//console.log(usersWithAddress.sort((a, b) => a.address.street.toLowerCase() < b.address.street.toLowerCase() ? 1 : -1));

// -- отсортировать его по номеру дома по возрастанию
//console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));

// -- отфильтровать (оставить) тех кто младше 30
//console.log(usersWithAddress.filter(item => item.age < 30));

// -- отфильтровать (оставить) тех у кого отрицательный статус
//console.log(usersWithAddress.filter(item => item.status == 0));

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//console.log(usersWithAddress.filter(item => item.status == 0 && item.age < 30));

// -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter(item => item.address.number % 2 === 0));

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr1 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//
// function maxmin(num, arr){
//     let arrMas = []
//     arr.map((item,indx)=> {
//         if(item === num){
//             arrMas.push(indx)
//         }
//     })
//     if(arrMas.length === 0){
//         return -1
//     }
//     return (`min ${arrMas[0]}, max ${arrMas[arrMas.length-1]}`)
// }
//
// console.log(maxmin(15, arr1));
// console.log(maxmin(1, arr1));
// console.log(maxmin(3, arr1));
// console.log(maxmin(4, arr1));
// console.log(maxmin(7, arr1));




