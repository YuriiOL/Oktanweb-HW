//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет'
// let num = 123
// let flag = true
// let txt = 'true'
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof txt)

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3
// let a2 = 5 - 3
// let a3 = 5 * 3
// let a4 = 5 / 3
// let a5 = 5 % 3
// console.log(a1, a2, a3, a4, a5)

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + 3
// let a9 = '5' - 3
// let a10 = 75 + 'кг'
// console.log(a6, a7, a8, a9, a10)

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23
// let width = 10
// let s = height * width
// console.log(s)

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.

// let dC = 4
// let heightC = 10
// let v = 3.14 * (dC / 2) ** 2 * 10
// console.log(v)

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3
// let m = 4
// let k = (3 ** 2 + 4 ** 2) ** (1 / 2)
// console.log(k) // 5

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = prompt('Write pls "Hello world":')
// document.write(str)
// alert(str)
// console.log(str)

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert('Yurii\nOleksvoksyi\nMychailowych\n18\ncars')

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто '
// let str2 = 'ты '
// let str3 = 'такой?'
// let concatenation = str1 + str2 + str3
// document.write(concatenation)

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

//let str = '20'
//let a = 5
//document.write(str + a + '<br/>') // 205
//document.write(str - a + '<br/>') //15
//document.write(str * '2' + '<br/>') // 2020 misstake
//document.write(str / 2 + '<br/>') //10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt('3.14')
// parseInt('-7.875')
// parseInt('435')
// parseInt('Вася')

//console.log(parseInt('3.14')) // 3
//console.log(parseInt('-7.875')) //-7
//console.log(parseInt('435')) // 435
//console.log(parseInt('Вася')) // NaN

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt('Enter something', 'Введите даные')
// console.log(str)

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let numb1 = +prompt('Enter Number1', 0)
// let numb2 = +prompt('Enter Number2', 0)
// alert(numb1 + numb2)

// /14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида. Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Enter name:')
// let surname = prompt('Enter surname')
// let age = prompt('Enter age')
// alert(`Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}`)

//1. Три різних числа вводяться через prompt().
//За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let numb1 = prompt('Numb1')
// let numb2 = prompt('Numb2')
// let numb3 = prompt('Numb3')
// let arr = []
// arr.push(numb1, numb2, numb3)
// arr.sort((a, b) => a - b)
// for (let i of arr) {
//   console.log(i)
// }
// console.log(arr)

// if (numb1 < numb2 && numb1 < numb3) {
//   console.log(numb1)
// }
// if (numb2 < numb1 && numb2 < numb3) {
//   console.log(numb2)
// }
// if (numb3 < numb1 && numb3 < numb2) {
//   console.log(numb3)
// }
