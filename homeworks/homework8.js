// TASK - 1
// Создайте функцию которая принимает строку и число, затем повторяет каждый символ строки n количество раз
// Security, 2    => SSeecckkuurriittyy 
// Cyber,    3    => CCCyyybbbeeerrr 
 
let text = "Cyber" 
let number = 3 

let result1 = ""

let spl_text = text.split("") 
spl_text.forEach((value) => {
    result1 += value.repeat(number)
})
console.log("Result:", result1)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 2

// let colors = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"]
// let suffixes = ["th", "st", "nd", "rd"]

// OUTPUT:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."

let colors = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"]
let suffixes = ["th", "st", "nd", "rd"]

colors.forEach((value,index) => {
    let current = index + 1 // индекс считает не с 0 а с 1 
    let suffix = ""

    if(current > 3) { // тут индексы уже с 1 2 3 итд.. если больше 3 индекса(Orange) 
        suffix = suffixes[0] // все индексы больше 3 получают - th 
    } else { suffix = suffixes[current] } // тут получают - st, nd, rd - до 3 индекса 
    console.log( `${current+suffix} choise is ${value}` ) // current начался с 1 индекса - suffix принимает параметры с if else - value просто показывает значения
})  

// С кем мы работает называется current

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 3
// Для получения значений заданного свойства из всех элементов в массиве:
//  Nan, 0, 15,  false, -22, undefined, 47, null. 
// результат: 
// 15, -22, 47

const arr = [NaN, 0, 15, false, -22, undefined, 47, null]
let result3 = arr.filter((value) => { // работает с каждым и отделяет не нужное от нужного
    if (typeof(value) === 'number') // тут проверяется если это число то он проходит проверку - - - NaN - даёт number
        if (!isNaN(value) && value != 0) { // тут проверяет является ли значение числом, не является ли оно NaN и не равен 0 то он проходит проверку 
            console.log(value) // в итоге покажето только то что прошло все проверки а именно [15, -22, 47]
        }
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 4
// Найти разницу между двумя массивами 

// EXAMPLE - 1

let z1 = [1, 2, 3]
let x1 = [100, 2, 1, 10]

let resul = []

z1.forEach(val => {
if (!x1.includes(val)) { // если значения нет в x1 он добавляет его в result
resul.push(val) }
})
x1.forEach(val => {
 if (!z1.includes(val)) {
    resul.push(val) }
})
console.log("Result: ", resul)
// Output  ==>>  ["3", "100", "10"]

// -------------------

// EXAMPLE - 2

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

// не проходили OBJECT

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK 1 - EXTREME  
// find two numbers that add up to target 
// let numbers = [1, 22, 122, 11, 43, 23, 123]
 
// let target = 44 
// output is [0,4] => 1 + 43 => 44

// = = = = = =

let numbers = [1, 22, 122, 11, 43, 23, 123]
let target = 44

let result4 = []

// взяли каждый элемент массива - то есть его значение у 1 forEach() 
numbers.forEach((value, idx) => { 

// обрезает массив с каждым индексом, если даём 0 индекс он даст 1, даём 1 он даст 2 и.т.д.
numbers.slice(idx + 1).forEach((secondNumber, secondIndex) => { 
// далее сравниваем: 1 + 22 равен ли 44, дальше работает так с каждым значением пока не дойдет до 43
// в итоге когда будет равен 44 он добавит index`ы в новый массив result4
if (value + secondNumber == target) {


result4 = [idx, idx + 1 + secondIndex] } })
})

console.log(result4)
// Вывод: [0, 4] => 1 + 43 => 44

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK 2 - EXTREME  
// Напишите программу на JS, чтобы найти букву, которая чаще всего встречается в данной строке.
// Если все числа уникальны, верните -1

let str = "Hello, world!"
let maxCount = 0
let mostCommonChar = ''

// Преобразуем строку в массив символов и пройдемся по каждому символу
str.split('').forEach(char => {
    // Игнорируем пробелы и знаки препинания
    if (char !== ' ' && char !== ',' && char !== '!') {
        // Подсчитываем количество повторений текущего символа в строке
        let count = str.split('').filter(c => c === char).length
        if (count > maxCount) { // Если это количество больше максимального
            maxCount = count // Обновляем максимальное количество
            mostCommonChar = char // Обновляем наиболее часто встречающийся символ
        }
    }
})

if (maxCount === 1) { // Если все символы уникальны
    console.log(-1) // Возвращаем -1
} else {
    console.log(mostCommonChar) // Иначе возвращаем наиболее часто встречающийся символ
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
