// ERROR HANDLING
// ОШИБКИ И КАК ИХ УСТРАНЯТЬ 

// use strict - Строгий режим
// strict - не позволяет делать ошибки в JS
// example:
// не формальный тип переменной
// test = "Hello world"
// console.log(test)

// use strict - запрещает использовать не формальный 

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// UNDEFINED & NULL

// let a 
// console.log(a)

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// НЕГАТИВ
// К НЕГАТИВАМ ОТНОСЯТСЯ ВСЁ ТО ЧТО FALSE
// "", [], 0, false, null, undefined, null

// [] - лист имеется но он пуст - поэтому выдаст true

// if (".") { // ДАСТ TRUE ПОТОМУ ЧТО ТАМ ЕСТЬ ЧТО ЛИБО
//     console.log("Yes")
// } else {
//     console.log("No")
// }

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// В ПРИМЕРЕ СНАЧАЛА ЧИТАЮТСЯ скобки - (), умножение, 

// 1 => let x = Number(String(parseInt("24") + 5))
// 2 => let x parseInt("24") + 5
// 3 => let x = Number(String("29"))

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ТИНАРНЫЙ ОПЕРАТОР

// console.log(2 == 3 ? "yes" : 'no')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// нам надо узнать их цену
// "apple", "banana", "cherry"

// let x = 2
// console.log(x == 3 ? "yes" : "no")

// console.log(x == 3 ? "YES" : (x == 4 ? "yes" : "no"))
// console.log(typeof("29" === typeof(x) ? 24 : "Sardor"))
// сначала проверяет === (тип данных) потом typeof("29") равен ли x если да то 24 если нет то сардор

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// HANDLING EMPTY VALUES 

// ... ? ... : ... -> Тенарный оператор

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// let z = 0
// Если у нас есть X дай мне его, если его нет выдай (does not exist)
//  || (OR) - ИЛИ 
//  ?? - 
// console.log( x || "does not exist")

// let x 
// console.log(x ?? "does not exist")

// || (логическое ИЛИ):
// Этот оператор возвращает true, если хотя бы один из операндов истинный.
// Если оба операнда ложные, возвращается false.
// Например:
// javascript
// Copy code
// let a = true
// let b = false
// console.log(a || b) // Вернет true
// ?? (оператор объединения с null):
// Этот оператор возвращает правый операнд, если левый операнд null или undefined, иначе возвращает левый операнд.
// Он полезен, когда нужно предоставить значение по умолчанию для переменной, если она равна null или undefined.
// Например:
// javascript
// Copy code
// let a = null
// let b = 5
// let result = a ?? b
// console.log(result) // Вернет 5, потому что a равно null
// Важно отметить, что использование этих операторов может отличаться в разных языках программирования, поэтому всегда стоит проверять документацию для конкретного языка.

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ERROR TYPES

// 1. Syntax Error => Синтаксическая ошибка
// 2. Reference Error => Ошибка ссылки - не создавая переменную хотим показать её
// 3. Type Error => Ошибка типа - тип данных не правильно был призван - let a = 1 => console.log(a())

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ERROR STATUS CODES

// Когда Front-end общается с Back-end`ом и в них происходят ошибки

// 400 => Неверный запрос
// 401 => Не авторизован
// 403 => Запрещено 
// 404 => Не найдено
// 500 => Внутренняя ошибка сервера
// 503 => Сервис недоступен

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// TRY & CATCH
// Если мы сомневаемся если он будет без ошибок

// console.log("Started") 

// try { // пробует пропустить 
//     console.log(a)
// } 
// catch (error) { // ловит ошибку но код не остановит
//     console.warn(error)
// }
// console.log("Continue")

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let a = 1213
// console.log("Started...")
// try {
//     console.log(a.slice(0,2))
// }
// catch (error) {
//     console.warn(error)
// } 
// console.log("Continue")

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// throw - создание ошибок 
// пример: директор сайта (как лидер) хочет что бы все сотрудники шли по 1 пути 
// допустим: он сказал сотрудникам использовать только синий цвет и все должны использовать только его 
// и если кто-то решит за место синего поставить зелёный и код выдаст ошибку 

// function test(par) {
// if (typeof(par) != "number") {
//     let error = new Error("Вы ввели не число")
//     throw error
// }
// }

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// ЗАДАНИЕ 

// запросить минимум 5 чисел у пользователя и попросить разделить их запятыми - 
// Еще раз 
// спрашиваем с помощью prompt() минимум 5 чисел 
// просим их разделить их запятой 
// если клиент не разделит их запятыми то выдать ошибку  с if/else 

 
// let answer = prompt("Введите минимум 5 чисел, разделяя их запятыми:")

//     let numbers = answer.split(",")

//     if (numbers.length < 5) {
//         alert("Вы ввели меньше 5 чисел")
//     } else {
//         alert("В итоге Вы ввели: " + numbers.join(", "))
//     }


let number = 1
console.log((number > 0) ? "Является Позитивным числом" : (number < 0) ? "Является Негативным числом" : "Являетя Нулём")
