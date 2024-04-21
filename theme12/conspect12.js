// FUNCTION

// ФУНКЦИИ НУЖНЫ ДЛЯ ТОГО ЧТО БЫ ВЗЯТЬ ОТТУДА
// ФУНКЦИЯ ЭТО МЕХАНИЗМ - ОН ДАЁТ КАКОЙ ТО РЕЗУЛЬТАТ
// ФУНКЦИЯ - ЭТО ЛЮБАЯ СИСТЕМА

// UNDEFINED + 1 = NaN

// Blender => сок - механизм выдаёт результат нам
// Сок происходит от фруктов, поэтому нужно дать ему информацию:
// Blender + fruit => сок

// в JS ключевое слово => function functionName() {} - camelCase

// нужно давать параметры => 
// function functionName() { 
    // console.log('Function functionName is called')
//  } 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
// тут будет ошибка из за того что переменная создана после console.log 

// console.log(x)


// let x = 10

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// function functionName() { 
        // function decloration
    // console.log('Function functionName is called')
        // 1000 lines of code
//  } 
 
// ФУНКЦИИ МОЖНО ПРИЗЫВАТЬ ДО СОЗДАНИЯ ПЕРЕМЕННОЙ ВНУТРИ БЛОКА 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// function functionName() {} - его можно призывать до создания переменной 
// let functionName = function() {} - его нельзя призывать до создания переменной

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// Для чего нужны функции? - что бы не переписывать слишком много кода - пример:
// 3 линии кода были вызваны в ручную 
// console.log('Function functionName is called')
// console.log('Function functionName is called')
// console.log('Function functionName is called')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// Функция нужна для того что-бы 1 функцией вызвать много console.log() 
// ВЫЗВАВ 1 ФУНКЦИЮ МЫ ПРИЗВАЛИ 3 РАЗА CONSOLE.LOG()
// function functionName() {
// console.log('Function functionName is called')
// console.log('Function functionName is called')
// console.log('Function functionName is called')
// }
// functionName()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// function functionName() {
//     console.log('Hello') // ЗДЕСЬ НЕ БЫЛО ПЕРЕДАНО ФРУКТОВ
// }
// let x =5 // Функция приняла себе фрукт
// let z =10
// let y =15

// functionName(x) // ПЕРЕДАЛ ФРУКТ
// functionName(z)
// functionName(y)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// function functionName(element) {
//     console.log('Result: ', element*2) 
// }
// // 3 разные переменные, функция принимает его как элемент
// let x =5 
// let z =10
// let y =15

// functionName(x) // 10
// functionName(z) // 20 
// functionName(y) // 30

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// В ЭТОТ РАЗ ПРОСТО СЛОЖИМ ВСЁ 

// function functionName(number1, number2) {
//     console.log('Result: ', number1+number2) 
// }
// // 3 разные переменные, функция принимает его как элемент
// let x =5 
// let z =10
// let y =15

// functionName(x, z) // 15
// functionName(z, y) // 25 
// functionName(y, x) // 20

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// что бы дать по умолчанию значение элементам:
// function functionName(number1, number2=0) {...}

// function functionName(number1, number2=0) {
//     console.log('Result: ', number1+number2) 
// }
// 3 разные переменные, функция принимает его как элемент
// let x =5 
// let z =10
// let y =15

// functionName(x) // x + 0 => по умолчанию number2 содержит 0
// functionName(z) // 25 
// functionName(y) // 20
// - - - - - - - - - - - 
// functionName(x) // 5 
// functionName(z, z) // 20
// functionName(x*2, x) // 15 
// functionName('BEMIYYA-№') // BEMIYYA-№0

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// ЕСЛИ ПЕРЕМЕННАЯ СОЗДАЁТСЯ ВНУТРИ БЛОКА ОНА НЕ МОЖЕТ ПОКИДАТЬ ЕГО
// ПОЭТОМУ ЧТО БЫ ВЫТАЩИТЬ SUM ИЗ ФУНКЦИИ НУЖНО ИСПОЛЬЗОВАТЬ RETURN SUM

// function functionName(number1=0, number2=1) {
//     let sum = number1+number2
//     return sum
// }
// let x =5
// let z =10
// let y =15

// let result = functionName(x, z) // ответ сохраняется в переменной 
// console.log("Result ", result)  

// let result2 = functionName(z, z*2)
// console.log("Result: ", result2)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// ЗАДАНИЕ - 1

function functionName(str) {
    return str.slice(-1).toUpperCase() + str.slice(1, -1) + str[0].toLowerCase()
    
}

let text = "Hello World"
let result = functionName(text)
console.log(result)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// ЗАДАНИЕ - 2

function funcName(number1, number2, parametr) 
{
    if (parametr == '+') { return number1 + number2 } 
    else if (parametr == '-') { return number1 - number2 } 
    else if (parametr == '*') { return number1 * number2 } 
    else if (parametr == '/') { return number1 / number2 } 
}

console.log(funcName(1,1,'+'))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// ЗАДАНИЕ - 3

function func(number1, number2, number3) {
    let maxNum = number1
    if (number2 > maxNum) { maxNum = number2 }
    if (number3 > maxNum) { maxNum = number3 }
    return maxNum
}
console.log(func(10, 1, 15))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// let text = "Cyber" 
// let number = 3 

// let result1 = ""

// text.split("").forEach((value) => {
//     result1 += value.repeat(number)
// })
// console.log("Result:", result1)



// function repeatMiddle(text, number) {
//     let middleIndex = Math.floor(text.length / 2); // Находим индекс середины строки
//     let middleChar = text[middleIndex]; // Получаем символ из середины строки
    
//     // Повторяем символ из середины строки number раз и возвращаем результат
//     return middleChar.repeat(number);
// }

// // Пример использования функции
// let text = "Cyber";
// let number = 3;
// console.log("Result:", repeatMiddle(text, number)); // Вывод: Result: bbb

// parseInt(t.length / 2) - находит середину


function f(text, number) {
let mid  = parseInt(text.length / 2)
let rep = text[mid].repeat(number)
let result = text.slice(0, mid) + rep + text.slice(mid + 1)   
return result
} 
console.log(f("Cyber", 3))
