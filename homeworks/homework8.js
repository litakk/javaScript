// TASK - 1
// Создайте функцию которая принимает строку и число, затем повторяет каждый символ строки n количество раз
// Security, 2    => SSeecckkuurriittyy 
// Cyber,    3    => CCCyyybbbeeerrr 
 
let text = "Ramiz" 
let number = 3 
let result1 = ""
let spl_text = text.split("") 
spl_text.forEach((value) => {
    result1 += value.repeat(number)
})
console.log("Result:", result1)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 2

// let colors = ("Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Vellow "I;
// let suffixes = ["th" "st","'nd" "rd"]
// OUTPUT:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Vellow "]
let suffixes = ["th", "st", "nd", "rd"]

colors.filter((val, idx) => {
    let current = idx + 1
    let suffix = ""

    if (current > 3) { 
        suffix=suffixes[0]
    } else {
        suffix=suffixes[current]
    }
console.log(`${current+suffix} choise is ${val}`)
})

// С кем мы работает называется current

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 3
// Для получения значений заданного свойства из всех элементов в массиве:
//  Nan, 0, 15,  false, -22, undefined, 47, null. 
// результат: 
// 15, -22, 47

const arr = [NaN, 0, 15, false, -22, undefined, 47, null]
let result3 = arr.filter((value) => {
    if (typeof(value) === 'number') // NaN - даёт number
        if (!isNaN(value) && value != 0) {
            console.log(value)
        }
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 4
// Найти разницу между двумя массивами 

let z1 = [1, 2, 3]
let x1 = [100, 2, 1, 10]

let resul = []

z1.forEach(val => {
if (!x1.includes(val)) {
resul.push(val) }
})
x1.forEach(val => {
 if (!z1.includes(val)) {
    resul.push(val) }
})
console.log("Result: ", resul)
// Output  ==>>  ["3", "10", "100"]
// -------------------
resul = []
z1 = [1, 2, 15]
x1 = [11, 3, 4, 1, 2]
        
z1.forEach(val => {
 if (!x1.includes(val)) {
    resul.push(val) }
})
x1.forEach(val => {
 if (!z1.includes(val)) {
    resul.push(val) }
})
console.log("Result: ", resul)
// ["15", "11", "4", "3"]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 5
// Создать функцию, которая принимает строку и считает каждую букву => "Helloooo"
// 'h': 1, 'e': 1,'l': 2, 'o': 4

// Создайте функцию которая принимает строку и считает каждую букву
// => "Helloooo"

let p = ["a", "b", "c", "c"]
p.forEach((value,index) => {
    console.log(value, index)
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASk - 6
// Создать функцию, которая принимает строку и считает сколько в ней гласных и согласных букв 
// Гласные буквы на английском языке => a, e , i, o, u

let test = "Ramiz Pratav Sinx"

let vowels = 0
let constants = 0 

test.split("").filter((val) => {
    if ("aioue".includes(val)) {
        vowels += 1
    } else {
        constants += 1
    }
})

console.log("Гласные ", vowels)
console.log("Согласные ", constants)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


// TASK - 7 
// Напишите программу что бы утроить все числа 
// в данном списке целых чисел с помощью map()

// map() не прошли

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 8
// Напишите программу чтобы получить сходство между двумя списками

let z2 = [1, 2, 3]
let x2 = [100, 2, 1, 10]

let result = []

z2.forEach(val => {
 if (!x2.includes(val)) {
    result.push(val) }
})
x2.forEach(val => {
 if (!z2.includes(val)) {
    result.push(val) }
})
console.log("Result: ", result)

// Output  ==>>  ["3", "10", "100"]
// -------------------
result = []
z2 = [1, 2, 15]
x2 = [11, 3, 4, 1, 2]
        
z2.forEach(val => {
 if (!x2.includes(val)) {
    result.push(val) }
})
x2.forEach(val => {
if (!z2.includes(val)) {
result.push(val) }
})
console.log("Result: ", result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 9 
// Напишите программу на JS, чтобы найти список слов, которые длиннее
// чем n из заданного списка слов

let words = ["Cyber", "Security", "JavaScript", "HTML", "CSS", "Web"]

let count = []
words.forEach(w => {
    if (w.length > 5) { count.push(w) }
})
console.log(count)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 10
// Создайте функцию которая принимает строку и находит все числа из этой строки
// Результат должен сообщать, сколько у нас чётных и нечётных чисел в строке 

let text0 = "This is 2nd task for 3rd dat of 30 days of JavaScript"

let evens = []
let odds = []

text0.split("").forEach(l => {
    if (!isNaN(l) && l != " ") {
        if (parseInt(l) % 2 == 0) {
            evens.push(parseInt(l))
        } else {
            odds.push(parseInt(l))
        }
    }
})
console.log(`Чётные ${evens} ... \n Нечетные ${odds}`)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 11 
// Напишите программу на JS, чтобы найти количество чётных цифр

let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = []

// numb.forEach(l => {
//     if (!isNaN(l) && l != " ") 
//     { if (parseInt(l) % 2 == 0) {even.push(parseInt(l))} }
// })
// console.log(`Чётные ${even}`)

numb.forEach(value => {
if (!isNaN(value) && value != " ")
{ if (parseInt(value) % 2 == 0) {even.push(parseInt(value))}}
})
console.log(even)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 12
// Создайте функцию, которая принимает текст и возвращает true, 
// если в нём есть две или более одинаковые буквы, которые находятся 
// рядом друг с другом, а в противном случае false



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
