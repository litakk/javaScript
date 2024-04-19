// "use strict" // строгий режим


// ________________ undefined & null _____________________
// undefined -> не определено
// null      -> пусто

// -----------------------------------------------------
// if ({}) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// "", [], 0, false, null, undefined, NaN

// if (a) {}  // "", 0, false, null, undefined, NaN
// else {}
// -----------------------------------------------------

// let x = 5
// x == 3 ? "yes" : "no"
// console.log(2 == 3 ? "yes" : "no") 
// console.log(x == 3 ? "YES" : (x == 4 ? "yes" : "no"))
// условие ? правда : (условие ? правда : ложь)

// let x = Number(String(parseInt("24") + 5))
// console.log(typeof("29")===typeof(x)  ?  24 : "Sardor")

// _______________  HANDLING EMPTY VALUES  _______________
//   ... ? ... : ...  ->  Ternary Operator -> Тенарный оператор
//   условие ? правда : ложь
//   ? ==> if     
//   : ==> else
//   
//   is used when the first value is true
// --------------------------------------------
//   || (OR) -> is used when the first value is true
//          undefined, null, 0, ''
// --------------------------------------------
//   ?? (Nullish Coalescing) -> null или undefined
//          is used when the first value is null or undefined
// let x
// console.log(x ?? "does not exist")
// --------------------------------------------
// _________________ Error types __________________________
// 1. Syntax Error      =>  Синтаксическая ошибка
//                      EX:  "...
// 2. Reference Error   =>  Ошибка ссылки
//                      EX:  console.log(a) 
// 3. Type Error        =>  Ошибка типа
//                      EX:  let a = 1
//                           console.log(a()) 
// ...
// __________________ Error Status Codes __________________
// 400 - Bad Request            => Неверный запрос
// 401 - Unauthorized           => Не авторизован
// 403 - Forbidden              => Запрещено
// 404 - Not Found              => Не найдено
// 500 - Internal Server Error  => Внутренняя ошибка сервера
// 503 - Service Unavailable    => Сервис недоступен

// ___________________ try & catch _________________________
// It is used to handle errors
// RU: Используется для обработки ошибок

// try () {
    // code
// } catch (error) {
    // code
// }
// let a = 1213
// console.log("Started...")
// try {
//     console.log(a.slice(0, 2))
//     console.log("Hello")
// }
// catch (error) {
//     console.warn(error)
// }
// console.log("Continue...")

// ____________________ throw ________________________________
// throw  => throw new Error('Message')

// Is used to throw an error when something goes wrong
// we use it in order to create our own rules for our code
//          ------------------
// RU: Мы используем throw, чтобы создать свои 
// собственные правила для нашего кода
// function test(par) {
//     if (typeof(par) != 'number') {
//         let error = new Error('Вы ввели не число')
//         throw error
//     }
//     return par+10
// }
// console.log(test("10"))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ask 5 numbers from client and ask them to separate it by comma
// RU: запросить 5 чисел у пользователя и попросить его их разделить запятой
let answer = prompt("Введите 5 чисел и разделите с помощью запятых: ")
if (!answer.includes(",")) {
    console.log("Запятых нет")
}
let x = answer.split(",")
if (x.length < 5) {
    console.log("Вы ввели меньше 5 чисел")
} else {
    console.log(x)
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let number = 0
// является позитивным числом
// является негативным числом
// является нулём
// -----------------------------
// Задача
// Проверьте номер с помощю тенарного оператора
let result = number < 0 ? "Negative" : (number > 0 ? "Positive" : "Zero")
console.log(result)
