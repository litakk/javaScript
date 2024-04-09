// 1 - Задание 
// Напишите логику, которая находит самую длинную строку в массиве строк

let arr = ["text1", "text2", "texttttt3"]
arr.sort((a, b) => b.length - a.length)
let longText = arr[0]
console.log(longText) // Выведет "texttttt3"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2 - Задание
// Напишите логику, которая находит самую короткую строку в массиве строк

let array = ["text1", "textt2", "texttttt3"]
arr.sort((a, b) => a.length - b.length )
let minText = arr[0]
console.log(minText) // Выведет "text1"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 3 - Задание
// Напишите логику, которая находит самое большое число в массиве чисел  

let numbers = [6, 3, 4, 11]
numbers.sort((a, b) => b - a)
let maxNumber = numbers[0]
console.log(maxNumber) // Выведет 5

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 4 - Задание
// Напишите логику, которая находит самое маленькое число в массиве чисел
let numbers2 = [1,2,3,4,5]
numbers2.sort((a,b) => a - b)
let minNumber = numbers2[0]
console.log(minNumber)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 5 - Задание
// Создайте массив чисел. Найдите максимальное число (например, 12345), затем сложите каждую цифру в числе (например, 1 + 2 + 3 + 4 + 5 = 15)

// let arrr = [12345]
// let sp = arrr.toString().split("")
// let maxNum = sp.sort((a,b) => b - a)
// let res = maxNum[0] 

// console.log(parseInt(sp))


// let t = eval(sp)
// console.log(t)