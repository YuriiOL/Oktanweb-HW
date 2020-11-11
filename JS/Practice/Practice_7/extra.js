//Extra
// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
//
// Доп 1
function toStr(num){
    let element = num.toString().split('').reverse()
    element.forEach((item,index)=>{
        let  i = 0
        while (i<index){
            element[index] = (item += '0');
            i++
        }
    })
    console.log(element.reverse().join(" + "));
}
toStr(5412)
// _______________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// Доп 2
let  arrMax = [1,6,9,0,17,88,4,7]
let max = arrMax.reduce((acum, value)=>{
    if(acum < value){
        acum = value
    }
    return acum
}, 0)
console.log(max);

// ___________________________
//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
//
// Доп 3
let numbers = '2176491947586100'
let counter = 0
numbers.split('').reduce((acum,value, i, arr)=>{
    if (value == 1){
        counter++
    }
    if(acum == 0 && value == 0){
        arr.splice([i])
    }
    return value
})
console.log(counter)
console.log('-------------------------')
// ________________________________
//
// Вот вам еще одно дополнительное:
//
//     найти приопущенную букву в массиве:
//
//     ["a","b","c","d","f"] -> "e"
//     ["O","Q","R","S"] -> "P"
let arrLeters = ["O","Q","R","S"]
let numb = arrLeters.map((item)=>item.charCodeAt())
let elementMiss = 0
numb.reduce((acum, val, indx)=>{
    if(val - acum !== 1){
        elementMiss = val-1
    }
    return val
})
console.log(String.fromCharCode(elementMiss));
