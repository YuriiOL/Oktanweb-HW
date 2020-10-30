// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrayNumb = [1, 2, 3, 4, 5]
// console.log(arrayNumb)
// let arrayStr = ['Yura', 'Oleksovskyi', '29', 'Nomarid', 'Car']
// console.log(arrayStr)
// let array = [1, true, 'Yurii', false, '3']
// console.log(array)
// let emptyArray = []
// emptyArray[0] = 25
// emptyArray[1] = 'Yura'
// emptyArray[2] = true
// emptyArray[3] = false
// emptyArray[4] = '22'
// console.log(emptyArray)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write('<div>Hello World</div>')
// }
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>${i} Hello World</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while (i < 20) {
//   document.write(`<h1>Hello World</h1>`)
//   i++
// }
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i < 20) {
//   document.write(`<h1>${i} Hello World</h1>`)
//   i++
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNumb = [1, 2, 3, 4, 5, 6, 78, 789, 787, 10]
// for (let i = 0; i < arrayNumb.length; i++) {
//   console.log(arrayNumb[i])
// }
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayStr = [
//   'Yura',
//   'Oleksovskyi',
//   '29',
//   'Nomarid',
//   'Car',
//   'pop',
//   'push',
//   'shift',
//   'unshift',
//   'bay',
// ]
// for (let i = 0; i < arrayStr.length; i++) {
//   console.log(arrayStr[i])
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [
//   'Yura',
//   'Oleksovskyi',
//   29,
//   'Nomarid',
//   'Car',
//   true,
//   'push',
//   false,
//   'unshift',
//   { name: 'Yurii' },
// ]
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [
//   'Yura',
//   'Oleksovskyi',
//   29,
//   'Nomarid',
//   'Car',
//   true,
//   'push',
//   false,
//   'unshift',
//   { name: 'Yurii' },
// ]
// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === 'boolean') {
//     console.log(array[i])
//   }
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [
//   'Yura',
//   'Oleksovskyi',
//   29,
//   'Nomarid',
//   'Car',
//   true,
//   'push',
//   false,
//   'unshift',
//   { name: 'Yurii' },
// ]
// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === 'number') {
//     console.log(array[i])
//   }
// }

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [
//   'Yura',
//   'Oleksovskyi',
//   29,
//   'Nomarid',
//   'Car',
//   true,
//   'push',
//   false,
//   'unshift',
//   { name: 'Yurii' },
// ]
// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === 'string') {
//     console.log(array[i])
//   }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArray = []
// emptyArray[0] = 25
// emptyArray[1] = 'Yura'
// emptyArray[2] = true
// emptyArray[3] = false
// emptyArray[4] = '22'
// emptyArray[5] = { name: 'Yurii' }
// emptyArray[6] = 55
// emptyArray[7] = true
// emptyArray[8] = 'pop'
// emptyArray[9] = false

// for (let i = 0; i < emptyArray.length; i++) {
//   console.log(emptyArray[i])
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//   document.write(`Step: ${i}`)
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//   document.write(`Step: ${i}`)
// }

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i += 2) {
//   document.write(`Step: ${i}`)
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i <= 100; i += 2) {
//   document.write(`Step: ${i}`)
//   console.log(`Step: ${i}`)
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i += 2) {
//   document.write(`Step: ${i}`)
//   console.log(`Step: ${i}`)
// }

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let j = 1; j <= 60; j++) {
//   console.log(j)
// }
// for (let i = 0; i <= 2; i++) {
//   if (i === 1) {
//     console.log(`Minutes: ${i}`)
//     for (let j = 1; j <= 60; j++) {
//       console.log(j)
//     }
//   }
//   if (i === 2) {
//     console.log(`Minutes: ${i}`)
//     for (let j = 1; j <= 60; j++) {
//       console.log(j)
//     }
//   }
// }
//SECOND ANSWER
// for (let i = 1; i <= 60; i++) {
//   console.log(i)
//   if (i === 60) {
//     console.log(`Minuta 1`)
//     for (let j = 1; j <= 60; j++) {
//       console.log(j)
//       if (j === 60) {
//         console.log(`Minuta 2`)
//       }
//     }
//   }
// }

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let houre = 0
// let minutes = 0
// let second = 0

// while (second <= 60 && minutes <= 60 && houre < 3) {
//   second++
//   if (second === 60) {
//     second = 0
//     minutes++
//   }
//   if (minutes === 60) {
//     minutes = 0
//     houre++
//   }
//   if (houre === 2 && minutes === 20) {
//     break
//   }
//   console.log(`${houre} ${minutes} ${second}`)
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
///////////////////////////////
// let word = ''
// let arr = ['a', 'b', 'c']
// for (let i = 0; i < arr.length; i++) {
//   word += arr[i]
// }
// console.log(word)
///////////////////////////////
// let word = ''
// let arr = ['a', 'b', 'c']
// let i = 0
// while (i < arr.length) {
//   word += arr[i]
//   i++
// }
// console.log(word)
//////////////////////////////
// let word = ''
// let arr = ['a', 'b', 'c']
// for (let i of arr) {
//   word += i
// }
// console.log(word)
