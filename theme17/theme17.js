// while - может заменять for.
// больше предназначен что бы создавать бесконечный цикл.
// с сложных логиках используется while.
// SYNTAX:

// while (condition == true) {
// block of code
// }

// example:

// let counter = 1
// while (counter <= 10) {
//     console.log(counter)
//     counter++
// }

// = = = = = = = = = = = = = = == = = = = = = = = = = = = = =

// пример использования ЦИКЛА WHILE

// console.log("Start of code ... ")

// let number = prompt("Enter a number: ")

// while (isNaN(number)) {
//     alert("Вы должны ввести число!")
//     number = prompt("Enter a number")
// }

// console.log("You entered: " + number + " as type " + typeof(parseInt(number)))
// console.log("End of code ... ")

// = = = = = = = = = = = = = = == = = = = = = = = = = = = = =

// -


// ЗАДАНИЯ ПОСЛЕ УРОКА.

// ЗАДАНИЕ - 1

// for (let x=1; x <= 10; x++) {
// console.log('*'.repeat(x+1))
// }

let counter = 10

while (counter >= 1) {
    console.log('*'.repeat(counter))
    counter--
}

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// = = = = = = = = = = = = = = == = = = = = = = = = = = = = =

// ИГРА С КОМПЬЮТЕРОМ

// Is it 10?

// yes / less / more

// мы говорим от 1 до 100 нужно найти ПК
let min = 1
let max = 100

// ответы: ДА - МЕНЬШЕ - БОЛЬШЕ
const Y = 'yes'
const L = 'less'
const M = "more"

while (true) {
    let answer = parseInt((min+max) / 2)
    let q_a = prompt(`
        Is it ${answer}?
        ${Y} / ${L} / ${M} / y / l / m
    `).toLowerCase()

    if (q_a == Y || q_a == "y") {
        alert('I am the best!')
        break
    } else if (q_a == L  || q_a == "l") {
        max = answer
    } else {
        min = answer
    }
}

// = = = = = = = = = = = = = = == = = = = = = = = = = = = = =

// ЗАДАНИЕ - 2
// Создайте функцию, которая получает только число из данного предложения и разделяет их на два списка: чётные и нечётные

let numbers = "Hello 7th World in 2023 year 2nd time"
// [7, 3] [2, 0, 2, 2]


