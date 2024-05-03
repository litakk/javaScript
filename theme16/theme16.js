// ЦИКЛ - повторение какого то случая

// show_message() - я должен 10 раз запустить его что бы показать какое то сообщние
// example -
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// show_message()
// А скажем циклу запустить его 10 раз

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// Есть 3 вида цикла - 
// Standart - нужен когда надо повторить функцию много раз - создаёт свою переменную

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// SYNTAX:
// цикл работает так: { ... } - прочитается если expression-2; выдаст true.
// 2 выражение это condition - условие.
// если выполняется условие (condition) - дайт нам true то прочитается { ... }
// 3 выражение управляет 1.

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 1 пример:
// for (expression-1; expression-2; expression-3) { ... }

// 2 пример:
// for (create-a-var; condition; var-manipulation) { ... }


// в первую очередь JS читает for и понимает что это цикл, standart(3 выражения)  
// for (let index=0; index<10; index++) {
//     console.log('index: ', index)
// }
// result:
// index:  0
// index:  1
// index:  2
// index:  3
// index:  4
// index:  5
// index:  6
// index:  7
// index:  8
// index:  9

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// for ... in ...   => objects - объект {}
// for ... of ...   => arrays - массив []

// - - - - - - - - - - - - - - - - - - - - - - - - - -

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (let value=0; value<letters.length; value++) {
    console.log('index: ', value)
    console.log('value: ', letters[value])
}

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 2 вид цикла который больше предназначен для массивов:

// of for array - массив.
// for (let element of letters) {
//     console.log(element)
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// in - универсальный но больше предназначен больше для обхектов - приинмает ключи.
// in for object - объекты. {key: value}
// для каждого ключа из этого объекта.

let person = {
    name:  "Ali",
    surname: "Veli",
    age: 25
}


for (let key in person) { // примет каждый ключ
console.log("Key: ", key)
console.log("Value: ", person[key])
}







// - - - - - - - - - - - - - - - - - - - - - - - - - -

// ЗАДАНИЯ В КОНЦЕ УРОКА:

// BEGINNER LEVEL

// ЗАДАНИЕ - 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let even = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         even.push(numbers[i])
//     }
// }
// console.log(`четные ${even}`)

let even = []
let odd = []
for (let value in numbers) {
    if (numbers[value] % 2 == 0) {
        even.push(numbers[value])
    } else {
        odd.push(numbers[value])
    }
} 
console.log(`четные ${even} и нечётные ${odd}`)

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// ЗАДАНИЕ - 2

// Найди самое большое целое число.

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let max = numbers1[0]

for (let i in numbers1) {
    if(numbers1[i] > max) {
        max = numbers1[i]
    }
}
console.log(`самое большое целое число: ${max}`)
// - - - - - - - - - - - - - - - - - - - - - - - - - -

// INTERMEDIATE LEVEL:

// ЗАДАНИЕ - 3

// for (let x=1; x <= 10; x++) {
// console.log('*'.repeat(x+1))
// }

// output:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *

// - - - - - - - - - - - - - - - - - - - - - - - - - -

//      *
//    * * *
//   * * * *
//  * * * * *

// - - - - - - - - - - - - - - - - - - - - - - - - - -


// 1. Создайте функцию, которая принимает список чётных чисел и находит сумму всех четных чисел.

// function fun(array) {
//     let even = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             even.push(array[i])
//         }
//     }
//     return even
// }

// console.log(fun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 2. Создайте функцию, которая принимает список целых чисел и находит самое маленькое число
// function max_min(nums) {
//     let max = 0
//     let min = num[0]
//     for ()
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 3. Создайте функцию, которая принимает список целых чисел и находит самое большое число

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 4. Создайте функцию, которая

// - - - - - - - - - - - - - - - - - - - - - - - - - -

