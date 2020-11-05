//-- змінює колір тексту елемнту з ід main_header на будь-який інший
// let a = document.getElementById('main_header')
// a.style.backgroundColor = 'red'

// -- робить шириниу елементу ul 400 пікселів
// let a = document.getElementsByTagName('ul')
// for (const aElement of a) {
//     aElement.style.width = '400px'
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let a = document.getElementsByClassName('linkList')
// for (let aElement of a) {
//     aElement.style.width = '50%'
// }

// -- отримує текст який зберігається в елементі з класом listElement2
// let a = document.getElementsByClassName('listElement2')
// for (const aElement of a) {
//     console.log(aElement.innerText);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let a = document.getElementsByTagName('li')
//     for (const aElement of a) {
//         aElement.style.backgroundColor = 'grey'
// }

//-- отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a')
// for (const aElement of a) {
//     aElement.classList.add('anchor')
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a')
// for (const aElement of a) {
//   if(aElement.innerText == 'link3'){
//       aElement.style.fontSize = '40px'
//   }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName('a')
// for (const aElement of a) {
//       aElement.classList.add(`element_${aElement.innerText}`)
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt("Enter color")
// let a = document.getElementsByClassName('sub-header')
// for (const i of a) {
//     i.style.backgroundColor = color
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color = prompt("Enter color")
// let a = document.getElementsByClassName('sub-header')
// for (const i of a) {
//     if (i.innerText === 'content 2 segment'){
//         i.style.backgroundColor = color
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let a = document.getElementsByClassName('content_1')
// let text = prompt()
// for (const aElement of a) {
//     aElement.innerText = text
// }

// -- отримати елементи p та змінити їм paddin на довільне значення
// let a = document.getElementsByTagName('p')
// for (const aElement of a) {
//     aElement.style.padding = '5px'
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let a = document.getElementsByClassName('text2')
// for (const aElement of a) {
//     aElement.innerText = 'Yurii'
// }