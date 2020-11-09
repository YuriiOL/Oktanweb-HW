// - создать массив с 20 числами.
// let arr = [1,2,3,4,5,6,7,8,20,18,3,4,5,30,1,144,22222,3333,44,33]
// console.log(arr.length);

// -- при помощи метода sort и колбека  отсортировать массив.
// let sortArr = arr.sort((a,b)=>a-b)
// console.log(sortArr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortArrReverse = arr.sort((a,b)=>a-b? -1: 1)
// console.log(sortArrReverse);

// -- при помощи filter получить числа кратные 3
// let divineTree = arr.filter(item=>item%3==0)
// console.log(divineTree);

// -- при помощи filter получить числа кратные 10
// let divineTen = arr.filter(item=>item%10==0)
// console.log(divineTen);

// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(val=>console.log(val))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newArr = arr.map(item => item*3)
// console.log(newArr);

// - создать массив со словами на 15-20 элементов.
// let arr = ['lorem', 'ipsum', 'dolor','sit','amet','consectetur','adipisicing','elit', 'consequatur', 'cupiditate', 'ex', 'fugiat', 'molestiae', 'non', 'quae']
// console.log(arr.length);

// -- отсортировать его по алфавиту в восходящем порядке.
// console.log(arr.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(arr.sort((a,b)=> a > b ? -1 : 1));

// -- отфильтровать слова длиной менее 4х символов
// console.log(arr.filter(val => val.length <= 4));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// console.log(arr.map(item=> item + '!'))

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => a.age - b.age ? -1 : 1));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => b.name.length - a.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersJSON = JSON.stringify(users)
// let arr = JSON.parse(usersJSON)
// arr.map((item, index)=> item.id = index + 1)
// console.log(arr)
// console.log(users)

// - відсортувати його за індентифікатором
// console.log(arr.sort((a, b) => a.id - b.id));

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком

