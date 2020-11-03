// //- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret"
// }
// let obj2 = {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//
// }
// let obj3 = {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//
// }
// let obj4 = {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//
// }
// let obj5 = {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
// }
//
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let obj11 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//      cars: ['mersedes', 'bmw'],
//      ob: {person: 'girl', name: 'Ola'}
// }
// let obj22 = {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     lovlyBrands: ['mersedes', 'bmw'],
//     girlfrend: {person: 'girl', name: 'Ola'}
//
// }
// let obj33 = {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     hate: ['mersedes', 'bmw'],
//     hetePerson: {person: 'girl', name: 'Ola'}
// }
// let obj44 = {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     garage: ['mersedes', 'bmw'],
//     son: {person: 'man', name: 'Poter'}
// }
// let obj55 = {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     willBe: ['mersedes', 'bmw'],
//     boy: {person: 'man', name: 'Poter'}
// }
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let arr = [obj1, obj2, obj3, obj4, obj5, obj11, obj22, obj33, obj44, obj55]
// for (let i of arr){
//    for(let j in i){
//        console.log(j)
//    }
// }
//
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let arr = [obj1, obj2, obj3, obj4, obj5, obj11, obj22, obj33, obj44, obj55]
// for (let i of arr){
//     for (let j of Object.keys(i)){
//         console.log(j);
//     }
// }

//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let arr = [
//     {
//         модель: 'bmw',
//         год: 2000,
//         мощность: 221,
//         цвет: 'red'
//     },
//     {
//         модель: 'wfsdaf',
//         год: 2001,
//         мощность: 222,
//         цвет: 'blue'
//     },
//     {
//         модель: 'bmasdgsadgw',
//         год: 2002,
//         мощность: 223,
//         цвет: 'wwwww'
//     },
//     {
//         модель: 'bmsadgdsagw',
//         год: 2003,
//         мощность: 224,
//         цвет: 'ssssss'
//     },
//     {
//         модель: 'bwwwwmw',
//         год: 2004,
//         мощность: 225,
//         цвет: 'ddddd'
//     },
//     {
//         модель: 'bmmmmmw',
//         год: 2005,
//         мощность: 226,
//         цвет: 'aaaaaaa'
//     },
//     {
//         модель: 'bbbbbbmw',
//         год: 2006,
//         мощность: 227,
//         цвет: 'yyyyyy'
//     },
//     {
//         модель: 'bmqqqqqqqqqqqw',
//         год: 2007,
//         мощность: 228,
//         цвет: 'ttttttttt'
//     },
//     {
//         модель: 'bmeeeeeeeeeeew',
//         год: 2008,
//         мощность: 229,
//         цвет: 'iiiiiiii'
//     },
//     {
//         модель: 'bmsssssssssssssw',
//         год: 2009,
//         мощность: 220,
//         цвет: 'pppppppppp'
//     },
// ]
//    - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cytis = [
//     {название: 'Lviv', популяция: '33333333', страна: 'Ukrain', регион: 'west'},
//     {название: 'Kyiv', популяция: '55555', страна: 'Ukrain', регион: 'middel'}
//     ]
// //- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [ {
//     модель: 'bmw',
//     год: 2000,
//     мощность: 221,
//     цвет: 'red',
//     водитель: {имя: "Yura",возраст: 29 , пол : 'Male', стаж: 4}
// },
//     {
//         модель: 'wfsdaf',
//         год: 2001,
//         мощность: 222,
//         цвет: 'blue',
//         водитель: {имя: "Yurііііa",возраст: 28 , пол : 'Male', стаж: 5}
//
//     },
//     {
//         модель: 'bmasdgsadgw',
//         год: 2002,
//         мощность: 223,
//         цвет: 'wwwww',
//         водитель: {имя: "Yurввввввa",возраст: 22 , пол : 'Male', стаж: 6}
//     },
//     {
//         модель: 'bmsadgdsagw',
//         год: 2003,
//         мощность: 224,
//         цвет: 'ssssss',
//         водитель: {имя: "Yurццццццa",возраст: 28 , пол : 'Male', стаж: 4}
//     },
//     {
//         модель: 'bwwwwmw',
//         год: 2004,
//         мощность: 225,
//         цвет: 'ddddd',
//         водитель: {имя: "Yurфвфівфіa",возраст: 22 , пол : 'Male', стаж: 7}
//     },
//     {
//         модель: 'bmmmmmw',
//         год: 2005,
//         мощность: 226,
//         цвет: 'aaaaaaa',
//         водитель: {имя: "івафіафівYura",возраст: 27 , пол : 'Male', стаж: 4}
//     },
//     {
//         модель: 'bbbbbbmw',
//         год: 2006,
//         мощность: 227,
//         цвет: 'yyyyyy',
//         водитель: {имя: "ккккккura",возраст: 26 , пол : 'Male', стаж: 10}
//     },
//     {
//         модель: 'bmqqqqqqqqqqqw',
//         год: 2007,
//         мощность: 228,
//         цвет: 'ttttttttt',
//         водитель: {имя: "впіваівYura",возраст: 25 , пол : 'Male', стаж: 4}
//     },
//     {
//         модель: 'bmeeeeeeeeeeew',
//         год: 2008,
//         мощность: 229,
//         цвет: 'iiiiiiii',
//         водитель: {имя: "аівпівпвіYura",возраст: 24 , пол : 'Male', стаж: 11}
//     },
//     {
//         модель: 'bmsssssssssssssw',
//         год: 2009,
//         мощность: 220,
//         цвет: 'pppppppppp',
//         водитель: {имя: "рррпопропYura",возраст: 23 , пол : 'Male', стаж: 12}
//     },]

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }
// let j = 0
// while(j < cytis.length){
//     console.log(cytis[j]);
//     j++
// }
// let k = 0
// while(k < cars.length){
//     console.log(cars[k]);
//     k++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for(let i = 0; i<cytis.length; i++){
//     console.log(cytis[i])
// }
// for(let i = 0; i<cars.length; i++){
//     console.log(cars[i])
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
// for (const arrElement of cytis) {
//     console.log(arrElement);
// }
// for (const arrElement of cars) {
//     console.log(arrElement);
// }

// /- взять объекты из задания 1 и превратить каждый в json.
//     console.log(JSON.stringify(obj1))
//     console.log(JSON.stringify(obj2))
//     console.log(JSON.stringify(obj3))
//     console.log(JSON.stringify(obj4))
//     console.log(JSON.stringify(obj5))

// - взять json из задания 11 и превратить их обратно в объекты.
//     JSON.parse(JSON.stringify(obj1))
//     JSON.parse(JSON.stringify(obj2))
//     JSON.parse(JSON.stringify(obj3))
//     JSON.parse(JSON.stringify(obj4))
//     JSON.parse(JSON.stringify(obj5))

// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let a of arr){
//     console.log(JSON.stringify(a))
// }

//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let a of cytis){
//     console.log(JSON.stringify(a))
// }

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arrCopy = []
//  for (let a of cars){
//      arrCopy.push(JSON.stringify(a))
//  }
//  console.log(arrCopy)

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{skills: ['Studing'], name: 'Yurii'}, {skills: ['Run'], name: 'Igor'}]
// for (const user of users) {
//     console.log(user)
//     for (const arrKey in user) {
//         console.log(arrKey)
//     }
// }

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [{skills: ['Studing'], name: 'Yurii'}, {skills: ['Run'], name: 'Igor'}]
// let newArr = []
// for (const user of users) {
//     console.log(user)
//     for (const arrKey in user) {
//         newArr.push(user[arrKey])
//
//     }
// }
// console.log(newArr);

//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let user of users) {
//     for (const arrKey of user.skills) {
//             console.log(arrKey)
//     }
// }



// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.,
//     let empty = []
//     for(let i in users){
//         empty.push(users[i].address)
//     }
// console.log(empty);
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let a = document.createElement('div')
//     a.innerText = Object.entries((user))
//     document.body.appendChild(a)
// }
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let a = document.createElement('div')
//     document.body.appendChild(a)
//     for (let i in user) {
//         let b = document.createElement('div')
//         b.innerText = user[i]
//         a.appendChild(b)
//     }
// }
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let a = document.createElement('div')
//     document.body.appendChild(a)
//     for (let i in user) {
//         let b = document.createElement('div')
//         if( i === "address"){
//             for(let c in user[i]) {
//                 let streat = document.createElement("div")
//                 streat.innerText = c + ' ' +user[i][c]
//
//                 document.body.appendChild(streat)
//             }
//             }else{
//                 b.innerText = user[i]
//                 document.body.appendChild(b)
//         }
//     }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//   let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let newArr = []
// for (let i of usersWithId) {
//     for (let j of citiesWithId) {
//         if(i.id === j.user_id) {
//             i.address = j
//             newArr.push(i)
//         }
//     }
// }
// console.log(newArr)

//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let a = document.getElementById('task1')
// console.log(a.innerText)
// let b = document.getElementsByClassName('task')
// console.log(b[0].innerText)
// let c = document.getElementsByTagName('div')
// console.log(c[0].innerText)

//- змінити цей текст використовуючи селектори id, class,  tag
// let a = document.getElementById('task1')
// a.innerText = 'Yura'
// console.log(a.innerText)
// let b = document.getElementsByClassName('task')
// b[0].innerText = 'Yura'
// console.log(b[0].innerText)
// let c = document.getElementsByTagName('div')
// c[0].innerText = 'Yura'
// console.log(c[0].innerText)

//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let a = document.getElementById('task1')
// a.style.height = '25px'
// a.style.width = '25px'
// console.log(a)
// let b = document.getElementsByClassName('task')
// b[0].style.height = '25px'
// b[0].style.width = '25px'
// console.log(b[0])
// let c = document.getElementsByTagName('div')
// c[0].style.height = '25px'
// c[0].style.width = '25px'
// console.log(c[0])

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let a = document.createElement('table')
// let tr1 = document.createElement('tr')
// let td1 = document.createElement('td')
// let td2 = document.createElement('td')
// let td3 = document.createElement('td')
// a.appendChild(tr1)
// tr1.appendChild(td1)
// tr1.appendChild(td2)
// tr1.appendChild(td3)
// document.body.appendChild(a)
// console.log(a)

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let a = document.createElement('table')
// for(let i = 0; i< 3; i++){
//     a.appendChild(document.createElement('tr'))
// }
// document.body.appendChild(a)
// let trs = document.getElementsByTagName('tr')
// for(let i of trs){
//     for(let j = 0; j<10;j++){
//         i.appendChild(document.createElement('td'))
//     }
// }
// console.log(a)

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let a = document.createElement('table')
// for(let i = 0; i< 10; i++){
//     a.appendChild(document.createElement('tr'))
// }
// document.body.appendChild(a)
// let trs = document.getElementsByTagName('tr')
// for(let i of trs){
//     for(let j = 0; j<5;j++){
//         i.appendChild(document.createElement('td'))
//     }
// }
// console.log(a)

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let a = document.createElement('table')
// let num = prompt('Enter num', )
// for(let i = 0; i< num; i++){
//     a.appendChild(document.createElement('tr'))
// }
// document.body.appendChild(a)
// let trs = document.getElementsByTagName('tr')
// for(let i of trs){
//     for(let j = 0; j<5;j++){
//         i.appendChild(document.createElement('td'))
//     }
// }
// console.log(a)

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
// let a = document.getElementsByClassName('rules')
// console.log(a);
// let p = document.getElementsByTagName('p')
// for (let pElement of p) {
//     pElement.innerText = 'hello oktenweb!'
// }
// let div = document.getElementsByTagName('div')
// for (let divElement of div) {
//     divElement.style.color = 'red'
// }