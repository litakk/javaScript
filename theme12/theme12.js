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

let z = "Vladimir Vladimirovich Putin"
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

// 15 - FizzBuzz 

// Напишите логику, которая проверит число,
// Если оно кратно (если можно делить на 3) 3, то выведите fizz
// Если оно кратно (если можно делить на 5) 5, то выведите buzz
// В остальных случаях выводите само число

function FizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "fizz"
    } else if (num % 5 == 0) {
        return "buzz"
    }
}
console.log(FizzBuzz(15))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 15 - POLINDROME

function Polindrome(str) {
    let reverseText = str.split('').reverse('').join('')
    if (str == reverseText) { return "polindrome" }
    else { return "not polindrome" }
}
console.log(Polindrome("madam"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 16 - PRIME NUMBER (простое число) - EASIEST LEVEL 
// У вас есть число между 1-20. Проверьте, это число или нет.
// Простое число это - всегда больше 1 и делится без остатка только на себя или на 1
// НАПРИМЕР: 3, 5, 7, 13 ...

// function isPrime(num) {
//     if (num <= 1) {
//         return false
//     }
//     if (num === 2) {
//         return true
//     }
//     if (num % 2 === 0) {
//         return false
//     }
//     if (num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17 || num === 19) {
//         return true
//     }
//     return false
// }

// // Проверяем числа от 1 до 20
// for (let i = 1 i <= 20 i++) {
//     console.log(`${i} - ${isPrime(i) ? "простое число" : "не простое число"}`)
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ARRAY 

// BEGINNER LEVEL 

// 17 - Создайте массив с 4 элементами. Выведите в консоль второй элемент массива

function Arr(array) {
    return array[1]
}
console.log(Arr(["One", "Two", "Three", "Four"]))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 18 - Создайте массив с 5-ю числами. Получите первое с конца число и проверьте его на четность. Выведите результат в консоль

function funcArr(array) {
    let l = array[array.length - 1]
    if (l % 2 == 0) {
        return "Первое число с конца чётное"
    } else {
        return "Первое число с конца не является чётным"
    }
}
console.log(funcArr([1, 2, 3, 4, 5]))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 19 - Используйте prompt(), чтобы получить случайное число от пользователя.
// Затем добавьте это число, его половину и четверть в массив и выведите результат в консоль 

// function f() {
//     let answer = prompt("Введите любое число: ")
//     let arr = []
//     console.log(`
//     Число которое ввели, Половина числа, Четверть числа`)
//     arr.push(answer)
//     arr.push(answer / 2)
//     arr.push(answer / 4)   
//     return arr
// }
// console.log(f())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 20 - Создайте массив с нескольками строками. Затем добавьте в середину массива текст, который запрашивает у пользователя с помощью prompt().
// Затем покажите массив в консоли.

// function workArr() {
// let array = ["Apple","Banana","Orange"]

// let ans = prompt("Введите текст: ")
// let midIdx = parseInt(ans.length / 2)

// array.splice(midIdx, 0, ans)
// return array
// }
// console.log(workArr())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 21 - Создайте массив с несколькими числами. Затем удалите последний элемент в массиве и сохраните его в другую переменную. 
// Затем проверьте, чётное ли это число или нет. Выведите результат в консоль

function DeleteLastElement() {
    let elements = [1, 2, 3, 4]
    let del = elements.pop()
    if (del % 2 == 0) { return `число ${del} чётное` }
    else { return `число ${del} не чётное` }
}
console.log(DeleteLastElement())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// INTERMEDIATE LEVEL

// 22 - Напишите логику, которая находит самую длинную строку в массиве строк

function maxStr() {
    let array = ["Min", "Middle", "Maximum"]
    array.sort((a, b) => b.length - a.length)
    let result = array[0]
    return result
}
console.log(maxStr())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 23 - Напишите логику, которая находит самую короткую строку в массиве строк

function minStr() {
    let array = ["Min", "Middle", "Maximum"]
    array.sort((a, b) => a.length - b.length)
    let result = array[0]
    return result
}
console.log(minStr())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 24 - Напишите логику, которая находит самое большое число в массиве чисел

function maxNum() {
    let array = [1, 2, 3, 4, 5]
    array.sort((a, b) => b - a)
    let result = array[0]
    return result
}
console.log(maxNum())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 25 - Напишите логику, которая находит самое маленькое число в массиве чисел

function minNum() {
    let array = [1, 2, 3, 4, 5]
    array.sort((a, b) => a - b)
    let result = array[0]
    return result
}
console.log(minNum())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 26 - Создайте массив чисел. Найдите максимальное число (например 12345), затем 
// сложиите каждую цифру в числе (например, 1 + 2 + 3 + 4 + 5 = 15)

function Gg() {
    let array = [12, 54, 12345, 60]
    array.sort((a, b) => b - a)
    let maxNum = array[0]
    let splNum = String(maxNum).split('')
    let result = splNum.reduce((acc, next) => acc + parseInt(next), 0)
    return result
}
console.log(Gg())

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// FUNCTIONS

// BEGINNER LEVEL (Newbie) 

// 27 - Напишите функцию, которая принимает целое число минут и преобразует его в секунды

function minutesToSeconds(minutes) {
    return minutes * 60
}

console.log(minutesToSeconds(5)) // 5 часов - 300 минут

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 28 - Напишите функцию, которая принимает массив и возвращает тип данных его первого элемента

function Typeof(array) {
    return typeof (array[0])
}
console.log(Typeof([1, 2, 3, 4, 5]))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 29 - Напишите функцию, которая принимает два целых числа и сообщает, какое из них больше

function oneOutOfTwo(number1, number2) {
    if (number1 > number2) {
        return `Первый аргумент ${number1} больше чем ${number2}`
    } else { return `Второй аргумент ${number2} больше чем ${number1}` }
}
console.log(oneOutOfTwo(20, 35))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 30 - Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее в обратном порядке. Ex: Hello -> olleH

function reverseText(arg) {
    return arg.split('').reverse('').join('')
}
console.log(reverseText("Hello"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 31 - Напишите функцию, которая принимает число в качестве аргумента и возвращает его в обратном порядке. Ex: 12345 -> 54321

function reverseNumber(arg) {
    return String(arg).split('').reverse('').join('')
}
console.log(reverseNumber(12345))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 32 - Напишите функцию, которая принимает строку и меняет первую и последнюю позиции букв

function reverseWords(arg) {
    let firstWord = arg[0]
    let lastWord = arg[arg.length - 1]
    let result = lastWord.toUpperCase() + arg.slice(1, -1) + firstWord.toLowerCase()
    return result
}
console.log(reverseWords("Hello"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 33 - Напишите логику, которая проверит число,
//      Если оно кратно (если можно делить на 3) 3, то выведите fizz
//      Если оно кратно (если можно делить на 5) 5, то выведите buzz
//      В остальных случаях выводите само число

function FizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "fizz"
    } else if (num % 5 == 0) {
        return "buzz"
    }
}
console.log(FizzBuzz(15))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// INTERMEDIATE LEVEL (Junior) 

// 34 - Напишите функцию, которая принимает массив чисел и находит второе наименьшее и второе наибольшее числа 

function funct() {
    let array = [1, 2, 3, 4, 5]
    let sor = array.sort((a, b) => a - b)
    let m1 = sor[sor.length - 2]
    let m2 = sor[1]
    console.log(`Второе наименьшее число: ${m1}`)
    console.log(`Второе наибольшее число: ${m2}`)
}
funct()

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 35 - Напишите функцию, которая принимает строку в качестве параметра и преобразует первую букву каждого слова строки в верхний регистр

function fun(str) {
    let splText = str.split(" ")

    let Capitalize = splText.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    let result = Capitalize.join(" ")

    return result
}
console.log(fun("это пример строки, которую нужно преобразовать"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 35 - Напишите функцию, которая принимает строку в качестве параметра и находит самое длинное слово в строке

function Param(param) {
    let spl = param.split(" ")
    let sorted = spl.sort((a, b) => b.length - a.length)
    let result = sorted[0]
    return result
}
console.log(Param("Hello universe"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 36 - Напишите функцию, которая принимает строку в качестве параметра и подсчитает количество гласных в строке

function vowels(test) {
let vowels = 0

test.split("").filter(val => {
    if ("aioue".includes(val)) {
        vowels += 1
    } 
})

console.log("Гласные ", vowels)
}
vowels("Hello World")

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// 37 - Напишите функцию, которая принимает два аргумента, строку и букву, и функция будет подсчитывать количество этой указанной буквы в строке

function funcCount(str, letter) {
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    
    let result = str.split('').filter(char => char === letter)
    
    return result.length
}

let text = "Hello world"
let wordCount = "o"
console.log("Количество букв '" + wordCount + "' в строке:", funcCount(text, wordCount))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

