// 7 - Loops

// BEGINNER LEVEL (Newbie)

// 1. Создайте функцию, которая принимает
//    список целых чисел и находит сумму
//    всех четных чисел.

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

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// 2. Создайте функцию, которая принимает список
//    целых чисел и находит самое большое число

function maxNum(array) {
for (let num in array) {
    
}
}
let array = [12, 13, 14, 15]
console.log(maxNum(array))