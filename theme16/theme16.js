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
// for ... in ...   => objects - объект {}
// for ... of ...   => arrays - лист []

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// SYNTAX:
// цикл работает так: { ... } - прочитается если expression-2; выдаст true.
// 2 выражение это condition - условие.
// если выполняется условие (condition) - дайт нам true то прочитается { ... }

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// 1 цикл:
// for (expression-1; expression-2; expression-3) { ... }

// 2 цикл:
// for (create-a-var; condition; var-manipulation) { ... }


// в первую очередь JS читает for и понимает что это цикл, standart(3 выражения)  
for (let index=0; index<10; index++) {
    console.log('index: ', index)
}
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


// ЗАДАНИЕ - 1

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let even = []

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         even.push(numbers[i])
//     }
// }
// console.log("evens: ", even)


// ЗАДАНИЕ - 2

// let result = ''
// for (let i= 0; )


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

// ---------------------

//      *
//    * * *
//   * * * *
//  * * * * *

// ---------------------

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

// ---------------------

// 2. Создайте функцию, которая принимает список целых чисел и находит самое маленькое число
// function max_min(nums) {
//     let max = 0
//     let min = num[0]
//     for ()
// }
// ---------------------
// 3. Создайте функцию, которая принимает список целых чисел и находит самое большое число
// ---------------------
// 4. Создайте функцию, которая 