//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c']
// let i = 0
// let count = array.length
// while (i < count) {
//   i++
//   array.push(i)
// }
// console.log(array)

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3]
// array[0] = 3
// array[1] = 2
// array[2] = 1
// console.log(array)

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3]
// array.push(4, 5, 6)
// console.log(array)

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq']
// console.log(arr.shift())

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq']
// console.log(arr.pop())

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i])
// }

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrEmpty = []
// for (let i = 0; i < arr.length; i++) {
//   arrEmpty.push(arr[i])
// }
// console.log(arr)
// console.log(arrEmpty)

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let emptyArr = []
// for (let i = 0; i < arr.length; i++) {
//   emptyArr[i] = arr[i]
// }
// console.log(arr)
// console.log(emptyArr)

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3, 5))

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0, 2))

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b')
// console.log(arr)

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)
