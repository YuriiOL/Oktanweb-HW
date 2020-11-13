//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let hideElem = document.querySelector('#text')
// hideElem.onclick = ()=>{
//     hideElem.style.display = 'none'
// }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementsByTagName('button')[0]
// btn.onclick = ()=>{
//     btn.style.display = 'none'
// }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.forms.form
// form.submit.addEventListener('click', (ev)=>{
//     ev.preventDefault()
//     if (form.age.value > 18){
//         alert('You In the Game')
//     }else {
//         alert('Sorry to young')
//     }
// })

//- Создайте меню, которое раскрывается/сворачивается при клике
// let btn = document.getElementById('menu')
// btn.onclick = () =>{
//     let menu = document.querySelector('.show')
//     if(menu.style.display === 'block'){
//         menu.style.display = 'none'
//     }else{
//         menu.style.display = 'block'
//     }
// }

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// const coments = [
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem6', body:'lorem ipsum dolo sit ameti'},
//     ]
// coments.forEach((item, index)=>{
//     let a = document.createElement('div')
//     a.innerText = item.title + ": " + item.body
//     let btn = document.createElement('button')
//     btn.innerText = "Deleat"
//     a.appendChild(btn)
//     document.body.appendChild(a)
//     btn.onclick = (e)=>{
//         e.target.parentElement.style.display = 'none'
//     }
// })

//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let nam = document.forms.twoForms.name
// let surname = document.forms.twoForms.surname
// const btn = document.querySelector('.console')
// btn.onclick = () => {
//     console.log(nam.value, surname.value)
// }

//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// function tableCreator(row, col, elem) {
//     let a = document.createElement('table')
//     for(let i = 0; i< row; i++){
//         a.appendChild(document.createElement('tr'))
//     }
//     document.body.appendChild(a)
//     let trs = document.getElementsByTagName('tr')
//     for(let i of trs){
//         for(let j = 0; j<col;j++){
//             i.appendChild(document.createElement('td'))
//         }
//     }
//     console.log(a)
//     let elm = document.getElementsByTagName(elem)[0]
//     elm.appendChild(a)
// }
// tableCreator(2,4, 'body')

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let rowVal = document.forms.tableGenerator.row
// let colVal = document.forms.tableGenerator.col
// let elemVal = document.forms.tableGenerator.elem
// let btn = document.getElementById('addTable')
// btn.onclick = tableCreator
// function tableCreator() {
//
//     let a = document.createElement('table')
//     for(let i = 0; i< +rowVal.value; i++){
//         a.appendChild(document.createElement('tr'))
//     }
//     document.body.appendChild(a)
//     let trs = document.getElementsByTagName('tr')
//     for(let i of trs){
//         for(let j = 0; j< +colVal.value;j++){
//             let tde = document.createElement('td')
//             tde.innerText = '00'
//             i.appendChild(tde)
//         }
//     }
//     let elm = document.getElementsByTagName(elemVal.value)[0]
//     elm.appendChild(a)
// }

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let staff = [
//     {
//         id: 1,
//         item: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'
//     },
//     {
//         id: 2,
//         item: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/merlin_150476541_233fface-f503-41af-9eae-d90a95eb6051-jumbo.jpg?quality=90&auto=webp'
//     },
//     {
//         id: 3,
//         item: 'https://i.guim.co.uk/img/media/0082d92f6f27bae5c41bda02a2889d43f7f9af7a/611_0_2500_1500/master/2500.jpg?width=1300&quality=45&auto=format&fit=max&dpr=2&s=a6fe7d9f23de6e1604a88ec5f2ea56b3'
//     }
//     ]
// let counter = 0
// function fukingPicture(){
//     let img = document.querySelector('.img')
//     img.style.backgroundImage = `url("${staff[counter].item}")`
// }
// fukingPicture()
// let btmL = document.getElementById('left')
// let btmR = document.getElementById('right')
// btmL.onclick = ()=>{
//     counter--
//     if (counter < 0){
//         counter = 2
//     }
//     fukingPicture()
// }
// btmR.onclick = ()=>{
//     counter++
//     if(counter > staff.length-1){
//         counter=0
//     }
//     fukingPicture()
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// const badwords = ['сука', 'лох', 'підар']
// let input = document.forms.badWordsForm.badWordsInput
// let btn = document.querySelector('#badWordsBtn')
// btn.onclick = () =>{
//     for (let badword of badwords) {
//         if(input.value.includes(badword)){
//             alert(`Ти шо маюкаєшся ${badword}`)
//             input.value = ''
//             return
//         }
//     }
// }

//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let heders = document.getElementsByTagName('h2')
// for (let i = 0; i < heders.length; i++) {
//     heders[i].setAttribute('id', i)
//     let divka = document.createElement('a')
//     divka.innerText = heders[i].innerText
//     divka.setAttribute('href',`#${i}`)
//     document.querySelector('#content').appendChild(divka)
// }

//-- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// function showUsers(arr){
//     let parent =  document.querySelector('.users')
//     parent.innerHTML = ''
//
//     arr.forEach(item=> {
//         let divka = document.createElement('div')
//         for (let i in item) {
//             if(i === 'address'){
//                 divka.innerText += `${item[i].city} ${item[i].street} ${item[i].number}`
//                 continue
//             }
//             divka.innerText += item[i] + " ";
//         }
//         parent.appendChild(divka)
//     })
// }
// showUsers(usersWithAddress)
// let tumbler1 = false
// let tumbler2 = false
// let tumbler3 = false
// let status = document.forms.filter.Status
// status.onchange = ()=>{
//     tumbler1 = !tumbler1
//     checkFilters()
// }
// let age = document.forms.filter.Age
// age.onchange = ()=>{
//     tumbler2 = !tumbler2
//     checkFilters()
// }
// let kiev = document.forms.filter.Kiev
// kiev.onchange = ()=>{
//     tumbler3 = !tumbler3
//     checkFilters()
// }
// function checkFilters(){
//     if(tumbler1){
//         let filter1 = usersWithAddress.filter(item=> item.status === false)
//         showUsers(filter1)
//     }
//      if(tumbler2){
//          let filter2 =  usersWithAddress.filter(item=> item.age >= 29)
//          showUsers(filter2)
//     }
//      if(tumbler3){
//          let filter3 =  usersWithAddress.filter(item=> item["address"].city === 'Kyiv')
//          showUsers(filter3)
//     }
//      if(tumbler1 && tumbler2){
//          let filter = usersWithAddress.filter(item=> item.status === false).filter(item=> item.age >= 29)
//          showUsers(filter)
//      }
//      if(tumbler1 && tumbler3){
//          let filter = usersWithAddress.filter(item=> item.status === false).filter(item=> item["address"].city === 'Kyiv')
//          showUsers(filter)
//      }
//      if(tumbler2 && tumbler3){
//          let filter = usersWithAddress.filter(item=> item.age >= 29).filter(item=> item["address"].city === 'Kyiv')
//          showUsers(filter)
//      }
//     if(!tumbler1 && !tumbler2 && !tumbler3){
//         showUsers(usersWithAddress)
//     }
// }

