// let arr = ['a','b','c']

// FILTER - ТОЛЬКО ЧАСТЬ (КОТОРАЯ ПРОШЛА ПРОВЕРКУ)
// P.S: ПРОПУСКАЕТ ТОЛЬКО ТОТ КОТОРЫЙ ПРОХОДИТ ПРОВЕРКУ И РАБОТАЕТ С НИМ
// let result = arr.filter(value => { 
//     if (value == 'a') {
//         result.push(value)
//     } else if (value == 'e') {
//         result.push(value)
//     } else if (value == 'g') {
//         result.push(value)
//     }
// })
// console.log(result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// FIND - ТОЛЬКО 1 (ИЗ ВСЕГО МАССИВА ПРОПУСКАЕТ ТОЛЬКО 1)
// он находит только 1 и остановится
// let result = arr.find(value => { 
//     if (value == 'a') {
//         result.push(value)
//     } else if (value == 'e') {
//         result.push(value)
//     } else if (value == 'g') {
//         result.push(value)
//     }
// })
// console.log(result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// ВСЁ БЕРЕТ
// MAP => Перебирает массив и возвращает 

// let result = arr.map(value => { // ВОЗМЁТ ВСЁ ТО ЧТО НАХОДИТСЯ В МАССИВЕ
//     result.push(value)
// })

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// REDUCE - берёт всё но из всех создаёт 1 значение
// Аккумулятор - это то место где 
// [].reduce((acc, next) => {})


// let arr = [1, 2, 3, 4, 5]
// let result = arr.reduce((acc, next) => {
//    return acc * next
// })
//  acc=1, next=2  =>   1*2   =>   2 
//  acc=2, next=3  =>   2*3   =>   6
//  acc=6, next=4  =>   6*4   =>   24
//  acc=24, next=5  =>  24*5  =>   120

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// words = ["apple", 'banana', 'cherry', 'blueberry', 'strawbarry']

// let longest = words.reduce((acc, next) => {
//     if (acc.length > next.length) {
//         return acc
//     } else {
//         return next
//     }
// })

// console.log(longest)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let words = ['apple', 'banana','charry', 'bluebarry','strawbarry']

let result = words.reduce((acc, next) => {
    return acc + next.length
}, 5)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// SETS => ХРАНИТ ТОЛЬКО УНИКАЛЬНЫЕ ЗНАЧЕНИЯ И УДАЛЯЕТ ДУБЛИКАТЫ

// new Array()
// new String()

let arr = [1, 2, 3, 4, 5, 1, 5]

let set = new Set(arr)
console.log(set) // Set { 1, 2, 3 }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// ADD TO SET => ДОБАВЛЯЕТ - НУЖНО ИМЕТЬ ВВИДУ ЧТО ОН НЕ ДОБАВЛЯЕТ ЕСЛИ ТАМ УЖЕ ЕСТЬ ЭТО ЗНАЧЕНИЕ

set.add(6)
set.add(4)
console.log(set)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// REMOVE FROM SET
set.delete(3)
console.log('DELETED:', set)

set.delete(5)
console.log('DEL NOT EXISTING ITEM:', set)






// ЗАДАНИЯ В КОНЦЕ УРОКА:

// words = [1,2,3,4,5]

// let longest = words.reduce((acc, next) => {
//     if (acc > next) {
//         return acc
//     } else {
//         return next
//     }
// })

// console.log('большое',longest)


// words = [1,2,3,4,5]

// let longest2 = words.reduce((acc, next) => {
//     if (acc < next) {
//         return acc
//     } else {
//         return next
//     }
// })

// console.log('маленькое', longest2)

// 
// arr5 = [12345, 51324, 111123, 22222, 1451512] 

// let longest5 = arr5.reduce((acc, next) => {
//     if (acc > next) {
//         return acc
//     } else {
//         return next
//     } 
// })

// console.log('самое большое число', longest2)


// let set5 = new Set(arr5)

// 111123 => [1, 1, 1, 1, 2, 3] => [1,2,3]
// arr5 = [12345, 51324, 111123, 22222, 1451512] 

// let longOdd = arr5.reduce((acc, next) => {
//     if (next % 2 !== 0 && next > acc) {
//         return next
//     } else { return acc }
// }, 0)

// let deleteDuplicate = new Set(String(longOdd).split(''))
// console.log(deleteDuplicate) 

