// задачка:
//     найти в массиве уникальное значение, пример:
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
// условие:
//     массив длиной минимум 3 элемента

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// function findUniq(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[0] !== array[i]) {
//             console.log(array[i])
//         }
//     }
// }
// findUniq([ 1, 1, 1, 2, 1, 1 ])
// findUniq([ 0, 0, 0.55, 0, 0 ])

//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let car = {
    marka: 'BMW',
    power: 400,
    owner: {name: 'Danylo', age: 22, skill: 4},
    price: 20000,
    year: 2014,
    remont(){
        this.power += (this.power*10)/100
        console.log(this.power)
    },
    newDrivers(newOwner){
        this.owner = newOwner
        console.log(this.owner)

    }
}
let car1 = {
    marka: 'Wsadasd',
    power: 450,
    owner: {name: 'Yurii', age: 22, skill: 4},
    price: 25000,
    year: 2014,
    remont(){
        this.power += (this.power*10)/100
        console.log(this.power)
    },
    newDrivers(newOwner){
        this.owner = newOwner
        console.log(this.owner)
    }
}
let car2 = {
    marka: 'BMdfassfaW',
    power: 420,
    owner: {name: 'Marik', age: 22, skill: 4},
    price: 22000,
    year: 2014,
   
}
let car3 = {
    marka: 'BMasdfasfdW',
    power: 410,
    owner: {name: 'Nazik', age: 22, skill: 4},
    price: 21000,
    year: 2014,

}
let car4 = {
    marka: 'BMasdfasdW',
    power: 400,
    owner: {name: 'Petro', age: 22, skill: 4},
    price: 20000,
    year: 2014
}
let car5 = {
    marka: 'BasdfsadfasdfasdMW',
    power: 400,
    owner: {name: 'Misha', age: 22, skill: 4},
    price: 20000,
    year: 2014
}
let car6 = {
    marka: 'BMteyreyretW',
    power: 400,
    owner: {name: 'Vova', age: 22, skill: 4},
    price: 20000,
    year: 2014
}
