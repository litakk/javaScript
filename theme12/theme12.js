// String methods

// 1 - Дана строка str. Вам нужно вернуть первую половину строки, используя slice().
// Например: "Строка" => "Стр"

function sliceStrStart(str) {
    let middle = parseInt(str.length / 2)
    let slice = str.slice(0, middle)
    return slice
}
console.log(sliceStrStart("Строка"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 2 - Дана строка str. Вам нужно вернуть последние три символа строки, используя slice().
// Например: "Строка" => "ока"

function sliceStrLast(str) {
    let slice = str.slice(str.length - 3)
    return slice
}
console.log(sliceStrLast("Строка"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//  3 - Дана строка str, замените все вхождения буквы "a" на букву "e", используя replace().
//  Например: "Атомная станция" => "етомнeя стeнцeя

function replaceStr(str) {
    let x = str.replace(/а/gi, "e")
    return x
}
console.log(replaceStr("Атомная станция"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 4 - Дана строка str, замените первое вхождение слова "world" на "universe",
// используя replace().
// Например: "Hello world" => "Hello universe"

function repString(str) {
    let a = str.replace(/world/gi, "universe")
    return a
}
console.log(repString("Hello world"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 5 - Используйте эти методы, чтобы центрировать слово, если длина слова меньше ожидаемой.
//  Например: "Hello"   =>  "***Hello***"

function funcPadStart(str) {
    let r = str.padStart(str.length + 3, "*")
    r = r.padEnd(r.length + 3, "*")
    return r
}
console.log(funcPadStart("Hello"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 6 - У вас есть полное имя "Vladimir Vladimirovich Putin". Выведите в консоль "Putin V. V"
// Используя slice() и replace()

let z = "Vladimir Vladimirovich Putin";
let first_space = z.indexOf(" ")
let last_space = z.lastIndexOf(" ")

let first_name = z.slice(0, first_space)
let middle_name = z.slice(first_space + 1, last_space)
let last_name = z.slice(last_space + 1)

console.log(last_name + " " + first_name[0] + ". " + middle_name[0])

//  V. V Putin

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// INTERMEDIATE LEVEL (Junior)

// 7 - У вас есть строка и вы делите ее на две части посередине. Затем повторяете каждую часть n раз

// function func(str, n) {
//     let middle = str.slice(str.length / 2)
//     let left = str.slice(0,middle)
//     let right = str.slice(middle)

//     let repeats = left.repeat(n) + right.repeat(n)
//     return repeats
// }
// console.log(func("Vladimir", 3))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ADVANCED LEVEL (Pro)

// 8 - У вас есть строка. Вам нужно получить первую букву и заменить её во всех остальных местах кроме первого на любой желаемый знак.
// ДАЁМ: let string = "This is test text"
//       let symbol = "$"  
// БЕРЁМ: "This is $es$ $ex$"

function repAll(string, symbol) {
    let first = string[0]
    let str = string.toLowerCase().replaceAll(first.toLowerCase(), symbol)

    let result = first + str.slice(1)
    return result
}
console.log(repAll("This is test text", "$"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Alert & if - else

// BEGGINER LEVEL

// 9 - Напишите логику, которая проверяет, является ли число положительным, отрицательным или нулём 

function Logic(num) {
    return num > 0 ? "Позитивное число" : num < 0 ? "Отрицательное число" : "Ноль"
}
console.log(Logic(1))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 10 - Напишите логику, которая проверяет, чётное число или нет.

function SecondLogic(num) {
    return num % 2 == 0 ? "Чётное число" : "Нечётное число"
}
console.log(SecondLogic(10))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 11 - Напишите логику, которая проверяет, кратно ли число на 3 и 5 одновременно. (делится ли число и на 3 и на 5 одновременно без остатка)

function ThirdLogic(num) {
    return num % 3 == 0 && num % 5 == 0 ? "Число кратно и на 3 и 5" : "Число не кратно на 3 и 5"
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 12 - Напишите логику, которая проверяет, пустая строка или нет

function funcName(str) {
    return str == "" ? "Строка пустая" : "Строка не пустая"
}
console.log(funcName(""))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 13 - Напишите логику, которая проверяет, содержит ли строка определенный символ

function conSymbol(str, symbol) {
    return str.includes(symbol) ? "Строка содержит символ" : "Строка не содержит символ"
}
console.log(conSymbol("hello", "$"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 14 - Напишите логику, которая проверяет, начинается ли строка с определённого символа

function startSymbol(str, symbol) {
    return str.startsWith(symbol) ? `Строка начинается с символом ${symbol}` : `Строка не начинается с ${symbol}` 
}
console.log(startSymbol("$hello", "$"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// INTERMEDIATE LEVEL