// JavaScript - читает КОД одновременно с html КОДОМ - в итоге JS читает быстрее

// Alert, Prompt, Confirm

// alert("") - простое оповещение (сообщение)
// alert("Hello world")

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// prompt("") - для взаимодействия с клиентом ( сообщение в котором нужно отвечать )
// prompt("Your name: ")

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let answer = prompt("Your name: ")
// console.log(answer)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// confirm("") - обычное оповещение с выбором ( ДА - НЕТ ) - ОК (true) - ОТМЕНА (false)
// let answer = confirm("Are you hungry?")
// console.log(answer)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// if / else / "" - то что пусто негатив / 0 - негатив / false - негатив 
// if - если так
// else - если не так

// example;
// if(2 == 2) { console.log("Positive")}

// let answer = 2 == 2 // Positive
// let answer = 1-2 // -1 Positive
// let answer = 3-4 > 0 // -1 Negative
// let answer = 3-5 > 1-2 // Negative
// let answer = 3-5 > 1-5 // Positive
// let answer = "Amir" != "rimA" // Positive 
// let answer = "Amir" == "amir" // Negative 

// if (answer) {console.log("Positive")}
// else {console.log("Negative")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// else if - стоит между ними (true/false)

// let number = 2
// if (number == 3) {console.log("-- 3")} // значение 3 больше 2 поэтому он идет дальше читать КОД
// else if (number=="2") {console.log("-- 2")} // значние подходят друг к другу
// else {console.log("Else ... ")} // в конечном итоге, если ничего не подойдет выдаст else

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Switch Case - switch - другой вид if / else - ТОЛЬКО ДЛЯ СОВПАДЕНИЙ

// let fruit = "Pineapple"
// switch (fruit) {
//     case "Berry":
//         console.log("Sweet fruit...")
//         break
//     case "Pineapple":
//         console.log("Semi Sweet fruit ...")
//         break
//     case "Apple":
//         break
//     default:
//         console.log("Unknown fruit")
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 1
//  если больше 0 = "Positive"
//  если меньше 0 = "Negative"
//  если 0 = "Zero"

// let number = 5 
// if (number > 0) { console.log("Positive") }
// else if(number < 0 ) { console.log("Negative") }
// else { console.log("Zero") } 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 2
// "Even number" - "Odd number" (even - чётное) (odd - не чётное)

// let number = 5

// if (number % 2 == 0) { // чётное число
// console.log("Even number ...")}
// else { console.log("Odd number")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 3 
// Напишите логику, которая проверяет, кратно ли число на 3 и 5 одновременно, (делится ли число и на 3 и на 5 одновременно без остатка)

// if (number % 3 == 0 && number % 5 == 0) {console.log("Correct)}
// else { console.log("Incorrect")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 4
// Нужно проверить пустая ли строка или нет

// let text = ""
// if (text == "") {console.log("Empty")}
// else {console.log("NOT Empty")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 5
// Напишите логику, которая проверяет, содержит ли строка определенный символ

// let text = "Test"
// let symbol = "$"
// if (text.includes(symbol)) { console.log("True")}
// else {console.log("False")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ЗАДАНИЕ 6
// Напишите логику, которая проверяет, начинается ли строка с определённого символа

// let str = "$tring"
// let symbol = "$"
// if (str.startsWith(symbol)) {console.log("True")}
// else {console.log("False")}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
