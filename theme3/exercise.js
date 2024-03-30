// Задание - 1

// В данном случае, длина строки "This is testtext" равна 16, и поскольку 16 делится на 2 без остатка,
// переменной r будет присвоено значение true. Следовательно, в консоли будет выведено "Result: true".
// Таким образом, код проверяет, является ли длина строки четным числом, и выводит результат этой проверки. 

// let x = "This is testtext"
// let r = x.length % 2 == 0
// console.log("Result: ", r)

// ------------------------------------

// Задание - 2

// let z = "Vladimir Vladimirovich Putin";
// let first_space = z.indexOf(" ")
// let last_space = z.lastIndexOf(" ")

// let first_name = z.slice(0, first_space)
// let middle_name = z.slice(first_space+1, last_space)
// let last_name = z.slice(last_space+1)

// console.log(first_name[0] + ". " + middle_name[0] + " " + last_name)

// V. V Putin

// ------------------------------------

// Задания урока номер 3

// slice() 
// Дана строка str. Вам нужно вернуть первую половину строки, используя slice().
// Например: "Cтрока" => "Cтр"

let x = "Строка"
console.log(x.slice(0,3))

// ------------------------------------------

// Дана строка str. Вам нужно вернуть последние три символа строки, используя slice().
// Например: "Cтрока" => "ока"

let z = "Строка"
console.log(z.slice(3,6))

// ====================================================================================================

// replace()
// Дана строка str, замените все вхождения буквы "a" на букву "e", используя replace().
// Например: "Атомная станция" => "етомнeя стeнцeя

let q = "Атомная станция"
let result = q.replace(/а/gi, "e")
console.log(result)
// ------------------------------------------

// Дана строка str, замените первое вхождение слова "world" на слово "universe", используя replace().
// Например: "Hello world" => "Hello universe"

let e = "Hello world"
let re = e.replace(/world/, "universe")
console.log(re)

// ====================================================================================================

// Используйте эти методы, чтобы центрировать слово, если длина слова меньше ожидаемой.
// Например: "Hello"   =>  "***Hello***"

let t = "Hello"
let y = t.padStart(x.length+3,"*")
y = y.padEnd((r.length+3, "*"))
console.log(y)

// ====================================================================================================

// INTERMEDIATE EXERCISES

// 1. У вас есть полное имя "Vladimir Vladimirovich Putin".
// Выведите в консоль "Putin V. V" используя slice() и replace()

let g = "Vladimir Vladimirovich Putin"
let first = g.slice(23) 
let second = g.slice(9,10) 
let third = g.replace(/Vladimir Vladimirovich Putin/, "V") 
console.log( first + " " + second + "." + " " + third)

// ============================================
// 2. You have a string and devide it into two parts from the middle. Then repeat each part n times
// RU: У вас есть строка и вы ее делите на две части посередине. 
// Затем повторяете каждую часть n раз

let test_string = "Hello "
let n = 3
let resul = test_string.repeat(n) 
console.log(resul)

// -------------

// EXAMPLE - 2:    
// Даём:  test_string = "Vladimir",  n = 3
// Берём: "VladVladVladimirimirimir"

// RU: ШАГИ:
// 1. Найдите середину строки
// 2. Разделите строку на две части
// 3. Повторите каждую часть n раз и объедините их

let test_string2 = "Farzod"
let n2 = 2
let middle2 = parseInt(test_string2.length/2)
let firstPart = test_string2.slice(0,middle2)
let secondPart = test_string2.slice(middle2)
console.log(firstPart.repeat(n2) + secondPart.repeat(n2))

// ====================================================================================================

// 3. У вас есть строка. Вам нужно получить первую букву и заменить ее во всех остальных
// местах кроме первого на любой желаемый знак "$, #, @, *, ..."
// -------------
// INPUT:   let string = "This is test text"
//          let symbol = "$"
// OUTPUT:  "This is $es$ $ex$"


let string = "This is test text"
let symbol = "$"

let firstLetter = string[0]
string = string.toLowerCase().replaceAll(firstLetter.toLowerCase(), symbol)
console.log(firstLetter + string.slice(1))

// =====================================================================================================


