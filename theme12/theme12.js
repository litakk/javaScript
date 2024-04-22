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
    let r = str.padStart(str.length+3, "*")
    r = r.padEnd(r.length+3, "*")
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
 let middle_name = z.slice(first_space+1, last_space)
 let last_name = z.slice(last_space+1)

 console.log(last_name + " " + first_name[0] + ". " + middle_name[0] )

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



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
