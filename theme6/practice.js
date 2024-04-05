// 1-TASK✅
// SWAP FIRST-LAST - Меняем местами ПЕРВЫЙ-ПОСЛЕДНИЙ

// let text = "Hello world"
// ==============================
// let first = text[0].toLowerCase()
// let last = text[text.length-1].toUpperCase()
// ==============================
// console.log(last + text.slice(1, text.length-1) + first)

// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

// 2-TASK✅
// REVERSE TEXT - Перевернуть текст

// let x = 'Hello'
// console.log(x.split('').reverse().join(""))
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// 3-TASK✅
// You have a text and a number as index
// You need to delete a letter on this index
// RU: У вас есть текст и число как индекс
// Вам нужно удалить букву на этом индексе
// example:  text = "Hello", index = 1
// result:   Hllo
// Da ron
// let text2 = "Davron"
// let index = 2
// ==============================
// let left = text2.slice(0, index)
// let right = text2.slice(index+1) // при обрезании текста нужно делать index+1 для того что-бы прыгнуть с 2 индекса на 3 и таким образом обрезать 2 индекс
// ==============================
// console.log(left + right)

// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// 4-TASK✅
// Get first two and last two letters from text
// RU: Получить первые две и последние две буквы из текста
// let x2 = "Hello world"
// console.log(x2.slice(0,2) + x2.slice(x2.length-2))
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// 5-TASK✅
// Get an input from client with prompt and repeat the middle 
// letter 3 times 
// RU: Получить ввод от клиента с помощью Prompt(...) и повторить
// среднюю букву 3 раза

// EX:  Correct   =>   Corrrrect
//      Plus      =>   Plllus
// let text3 = prompt("Enttter a text")
// let middle = parseInt(text3.length / 2)
// let result = text3.slice(0,middle) + 
//              text3[middle].repeat(3) + 
//              text3.slice(middle+1)
// console.log("Result: ", result)
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

// ✅
// let answer = prompt("Enter a text: ")
// let vowels = 0
// for (let letter of answer) {
//     if ('aioue'.includes(letter)) {
//         vowels += 1
//     }
// }
// console.log("Vowels: ", vowels)

// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/



// - - - - - - - - - - - - - - - - - - - - - - - - 

// Сделал сам на уроке

// let text = "Hello world"
// let slice = text.slice(1,6)
// let z = text.charAt(0)
// console.log(slice)
// console.log(z)

// - - - - - - - - - - - - - - - - - - - - - - - - 
// let text = "Hello world"
// let first = text[0].toLowerCase()
// let last = text[text.length-1].toUpperCase() 
// console.log(last + text.slice(1, text.slice(1,text.length01) + first))

// - - - - - - - - - - - - - - - - - - - - - - - - 

// Reverse Text
// let x = "Text"
// let z = x.split('').reverse().join("")
// console.log(z)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// let text = "Hello World"
// let index = 7
// let result = text.slice(0, index) + text.slice(index+1)
// console.log(result)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// у нас есть текст, нам нужно взять первые 2 и последние 2 и соединить их

// let x = "HElLO"
// let left = x.slice(0,2)
// let right = x.slice(x.length-2)
// console.log(left + right)

// let x = "HElLO"
// let left = x.slice(0,2)
// let right = x.slice(x.length-2)
// console.log(right + left)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// Нужно поменять Dl и eh
// let x = "Hello World"

// let left = x.slice(0,2).toLowerCase()
// let right = x.slice(9,11).split().reverse().join('')

// let middle = x.slice(2,9)
// console.log( right+middle+left)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// Получить ввод от клиента с помощью prompt(...) и повторить среднюю букву 3 раза

// let info = prompt("Введите сообщение")
// let middle = parseInt(info.length / 2)

// let res = 
// info.slice(0, middle) +
// info[middle].repeat(3) +
// info.slice(middle+1)
// console.log("Result: ", res)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// let middleText = info.charAt(middle)
// let result = middleText.repeat(3)
// console.log(result)

// - - - - - - - - - - - - - - - - - - - - - - - - 

// let text = prompt("Введите сообщение")
// let proverka = ["a", "e", "i", "o", "u", "y"]
// for (let x = 0; x <= text.length; x++) {
//     let res = text[x] 
//     if(proverka.includes(res)) {
//         console.log(x)
//     }
// }

// - - - - - - - - - - - - - - - - - - - - - - - - 