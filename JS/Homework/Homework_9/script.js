// - Дана textarea.
//В неё вводится текст.
//Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textInfo = document.getElementById('Info')
// let valuesss = () => localStorage.setItem('usersInfo', textInfo.value)
// textInfo.value = localStorage.getItem('usersInfo')

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// const toSave = document.querySelectorAll('.toStore')
// function data() {
//     toSave.forEach((item, index) => {
//         if(item.type === 'text' || item.type === 'textarea'){
//             item.oninput = () => localStorage.setItem(`user${index}`, item.value)
//         }
//         if(item.type === 'checkbox' || item.type === 'radio'){
//             item.onclick =() => localStorage.setItem(`user${index}`, item.checked)
//         }
//     }
//     )
// }
// toSave.forEach((item, index) => {
//     if(item.type === 'text' || item.type === 'textarea'){
//         item.value = localStorage.getItem(`user${index}`)
//     }
//     if(item.type === 'checkbox' || item.type === 'radio'){
//         item.checked = JSON.parse(localStorage.getItem(`user${index}`))
//     }
// })
// data()

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они
// "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// const tat3 = document.querySelector('#ta')
// const btn = document.querySelector('#btn')
// const btnBack = document.createElement('button')
// const btnNext = document.createElement('button')
// let arr = []
// let count = 0
// btn.onclick = () => {
//     arr.push(tat3.value)
//     count++
//     console.log(arr)
//     btnBack.innerText = '<==='
//     btnNext.innerText = '===>'
//     document.querySelector('.divka').appendChild(btnBack)
//     document.querySelector('.divka').appendChild(btnNext)
//     btnBack.onclick = () => {
//         count--
//         if (count <= 0){
//             tat3.value = ''
//             count = 0
//         }else{
//             tat3.value = arr[count-1]
//         }
//         localStorage.setItem('user', JSON.stringify({'array': arr, 'conuts': count}))
//     }
//     btnNext.onclick = () => {
//         count++
//         if(count === arr.length+1){
//             count = arr.length
//         }else {
//             tat3.value = arr[count-1]
//         }
//         localStorage.setItem('user', JSON.stringify({'array': arr, 'conuts': count}))
//     }
//     localStorage.setItem('user', JSON.stringify({'array': arr, 'conuts': count}))
// }
// let saveInfo = JSON.parse(localStorage.getItem('user'))
// if(saveInfo == null || saveInfo.array[saveInfo.conuts-1] === undefined ){
//     tat3.value = ''
// }else{
//     tat3.value = saveInfo.array[saveInfo.conuts-1]
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// let form = document.forms.user
// let database = document.querySelector('.database')
// let arrayOfUsers = []
// if (localStorage.length != 0) {
//     arrayOfUsers = JSON.parse(localStorage.getItem('users'))
// }
//
// class Saveuser {
//     constructor(fio, number, mail, firma, otdel, bday) {
//         this.fio = fio
//         this.number = number
//         this.mail = mail
//         this.firma = firma
//         this.otdel = otdel
//         this.bday = bday
//     }
// }
//
// let btn = document.querySelector('.btnSub')
// btn.onclick = () => {
//     let user = new Saveuser(form.fio.value, form.number.value, form.mail.value, form.firma.value, form.otdel.value, form.bDay.value)
//     if (localStorage.length === 0) {
//         arrayOfUsers.push(user)
//         localStorage.setItem('users', JSON.stringify(arrayOfUsers))
//     } else {
//         arrayOfUsers = JSON.parse(localStorage.getItem('users'))
//         arrayOfUsers.push(user)
//         localStorage.setItem('users', JSON.stringify(arrayOfUsers))
//     }
//    window.location.reload()
// }
//
// function showElement() {
//     if (arrayOfUsers.length > 0) {
//         for (let i = 0; i < arrayOfUsers.length; i++) {
//             let {fio, number, mail, firma, otdel, bday} = arrayOfUsers[i]
//             let divka = document.createElement('div')
//             divka.innerText = `
//             ${fio}
//             ${number}
//             ${mail}
//             ${firma}
//             ${otdel}
//             ${bday}`
//             database.appendChild(divka)
//             let btnRemove = document.createElement('button')
//             let btnEdit = document.createElement('button')
//             btnEdit.innerText = 'Edit'
//             btnRemove.innerText = 'Remove'
//             database.appendChild(btnRemove)
//             database.appendChild(btnEdit)
//             ////////////////// Remove
//             btnRemove.onclick =()=>{
//                 arrayOfUsers.splice(i,1)
//                 localStorage.setItem('users', JSON.stringify(arrayOfUsers))
//                 window.location.reload()
//             }
//             ////////////////////
//             ////////////////// Edit
//             btnEdit.onclick = () => {
//                 editThisShit()
//                 let btnEditDone = document.querySelector('.btnSubEdit')
//                 btnEditDone.onclick = () =>{
//                     console.log(i)
//                     let inputs =  document.forms.userEdit
//                     let newOBJ = new Saveuser( inputs.fioEdit.value,  inputs.numberEdit.value, inputs.mailEdit.value, inputs.firmaEdit.value, inputs.otdelEdit.value, inputs.bDayEdit.value )
//                     arrayOfUsers.splice(i,1, newOBJ)
//                     localStorage.setItem('users', JSON.stringify(arrayOfUsers))
//                     window.location.reload()
//                 }
//             }
//             function editThisShit(){
//                 let editDiv = document.querySelector('.edit')
//                 editDiv.style.display = 'flex'
//                 let inputs =  document.forms.userEdit
//                 inputs.fioEdit.value = fio
//                 inputs.numberEdit.value = number
//                 inputs.mailEdit.value = mail
//                 inputs.firmaEdit.value = firma
//                 inputs.otdelEdit.value = otdel
//                 inputs.bDayEdit.value = bday
//             }
//         }
//     } else {
//         return
//     }
// }
// showElement()