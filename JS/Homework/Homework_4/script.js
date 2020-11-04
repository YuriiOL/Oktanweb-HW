//- створити функцію яка виводить масив
// let array = [0,1,2,3,4,5]
// let arrFunc = (arr) => console.log(arr)
// arrFunc(array)

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function random(){
//     let arr = []
//     arr.push(Math.floor(Math.random()*10))
//     arr.push(Math.floor(Math.random()*10))
//     arr.push(Math.floor(Math.random()*10))
//     return arr
// }
// arrFunc(random())

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
// function smalest(first, second, third) {
//     if(first<second && first<third) {
//         console.log(first)
//         return first
//     }else if (second<first && second< third){
//         console.log(second)
//         return second
//     } else{
//         console.log(third)
//         return third
//     }
// }
// smalest(6,10,5)

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function bigest(first, second, third) {
//   if (first > second && first > third) {
//     console.log(first)
//     return first
//   } else if (second > first && second > third) {
//     console.log(second)
//     return second
//   } else {
//     console.log(third)
//     return third
//   }
// }
// bigest(20, 10, 25)

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function alot() {
//   let small = arguments[0]
//   for (let i in arguments) {
//     if (arguments[i] < small) {
//       small = arguments[i]
//     }
//   }
//   console.log(small)
// }
// alot(25, 1, 2, 3, 4, 5, -1, 6, 7, 100)

//- створити функцію яка виводить масив
// let showArr = (arr) => console.log(arr)
// showArr([1,2,3,4,5])

//- створити функцію яка повертає найбільше число з масиву
// function showArr(arr) {
//   let big = arr[0]
//   for (let i in arr) {
//     if (arr[i] > big) {
//       big = arr[i]
//     }
//   }
//   return big
// }
// console.log(showArr([1, 2, 25, 3, 4, 5, 6]))

//- створити функцію яка повертає найменьше число з масиву
// function showArr(arr) {
//   let small = arr[0]
//   for (let i in arr) {
//     if (arr[i] < small) {
//       small = arr[i]
//     }
//   }
//   return small
// }
// console.log(showArr([1, 2, 3, -1, 4, 5, 6]))

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr = [1,2,3]
// function sum(array){
//     let sum = 0
//     for(let i of array){
//         sum += i
//     }
//     return sum
// }
// console.log(sum(arr))

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1,2,3]
// function sum(array){
//     let sum = 0
//     for(let i of array){
//         sum += i
//     }
//     return sum / array.length
// }
// console.log(sum(arr))

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arr = [{ name: "Yurii"}, {surname: 'Oleksovskyi'}, 'a']
// function howObj(arr){
//     let howManyObj = 0
//     for (let i of arr){
//         if(typeof i === 'object'){
//             howManyObj++
//         }
//     }
//     return howManyObj
// }
// console.log(howObj(arr))

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let arr = [
//   { name: 'Yurii', surname: 'Oleksvksoyi' },
//   { name: 'Vika', surname: 'Kushcz' },
//   {},
//   25,
//   'string',
//   ['asdasd'],
// ]
// function keys(array) {
//   let result = 0
//   for (let i of array) {
//     if (typeof i === 'object' && !Array.isArray(i)) {
//       for (let j in i) {
//         if (j !== null) {
//           result++
//         }
//       }
//     }
//   }
//   console.log(result)
// }
// keys(arr)

//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]

// function indexSum(first, second) {
//   let arr3 = []
//   for (let i in first) {
//     arr3.push(first[i] + second[i])
//   }
//   return arr3
// }
// console.log(indexSum(arr1, arr2))

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1, 2, 3]
// function chamge(array, i) {
//   if (i >= array.length) {
//     console.log('Too big bro')
//     return
//   }
//   let delet = array.splice(i, 1)
//   array.splice(i + 1, 0, delet[0])
//   console.log(array)
// }
// chamge(arr, 3)

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let arr = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 5, 0, 0]
// function zero(array) {
//   let a = []
//   for (const i in array) {
//     if (array[i] !== 0) {
//       a.push(array.splice(i, 1)[0])
//     }
//   }
//   return a.concat(arr)
// }
// console.log(zero(arr))

//Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addHello(){
//     document.body.innerHTML += '<div>Hello owu</div>'
// }
// addHello()

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElem(tag, text){
//     let elem = document.createElement(`${tag}`)
//     elem.innerText = `${text}`
//     document.body.appendChild(elem);
// }
// addElem('h1', 'yurii')

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// const arrCars = ['BMW', 'Mercedes', 'Volvo', 'Honda', 'Lada']
// const fast = 'fast'
// function cars(list, id){
//     let boxCar = document.getElementById(id)
//     for(let i of list){
//         let elemTag = document.createElement('div')
//         elemTag.innerText = `${i}`
//         elemTag.classList.add('cars')
//         boxCar.appendChild(elemTag)
//     }
//     let carsDiv =  document.getElementsByClassName('cars')
//     for(let i of carsDiv){
//         i.innerText += ` ${fast}`
//     }
// }
// cars(arrCars, 'carList')

//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let together = []
// function fromWher(users, cityes){
//     for (let city of cityes) {
//         for (let user of users) {
//             if(user.id === city.user_id){
//                 together.push(Object.assign(user, city))
//             }
//         }
//     }
//     console.log(together)
// }
// fromWher(usersWithId, citiesWithId)

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.',
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.',
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.',
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.',
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.',
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.',
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body:
      'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.',
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.',
  },
]

function addBlock(arr) {
  for (const i of arr) {
    let box = document.createElement('div')
    box.innerHTML = '<h3>' + i.title + '</h3>'
    let boxInside = document.createElement('div')
    boxInside.innerText = i.body
    box.appendChild(boxInside)
    document.body.appendChild(box)
  }
}
addBlock(rules)
