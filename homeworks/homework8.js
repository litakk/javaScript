// TASK - 1
// Security, 2    => SSeecckkuurriittyy 
// Cyber,    3    => CCCyyybbbeeerrr 
 
// let text = "Ramiz" 
// let number = 3 
// let result = ""
// let spl_text = text.split("") 
// spl_text.forEach((value) => {
//     result += value.repeat(number)
// })
// console.log("Result:", result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 2
// let colors = ("Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Vellow "I;
// let suffixes = ["th" "st","'nd" "rd"]
// OUTPUT:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Vellow "]
let suffixes = ["th", "st", "nd", "rd"]

colors.filter((val, idx) => {
    let current = idx + 1
    let suffix = ""

    if (current > 3) { 
        suffix=suffixes[0]
    } else {
        suffix=suffixes[current]
    }
console.log(`${current+suffix} choise is ${val}`)
})

// С кем мы работает называется current

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 3
// Для получения значений заданного свойства из всех элементов в массиве : Nan, 0, 15,  false, -22, undefined, 47, null. 
// результат: 
// 15, -22, 47



const arr = [NaN, 0, 15, false, -22, undefined, 47, null]
let result = arr.filter((value, index) => {
    if (typeof(value) === 'number') // NaN - даёт number
        if (!isNaN(value) && value != 0) {
            console.log(value)
        }
})




// const values = [NaN, 0, 15, false, -22, undefined, 47, null];
// const result2 = values.filter(value => typeof value === 'number' && !isNaN(value));
// console.log(result2);


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// Найти разницу между двумя массивами

// result2 = [] 
// z = [1,2,3]
// x = [100,2,1,10]

// z.forEach(val => {
//     if (!x.includes(val)) { // Если не находит то добавляет
//         result.push(val)
//     }
// })

// result2 = []

// x.forEach(val => {
//     if (!z.includes(val)) {
//         result.push(val)
//     }
// })

// console.log("Result: ", result2)


// // Find the difference between two arrays.

//         // RU: Найти разницу между двумя массивами.
//         // -------------------
//         let z = [1, 2, 3]
//         let x = [100, 2, 1, 10]

//         let result = []

//         z.forEach(val => {
//             if (!x.includes(val)) {
//                 result.push(val)
//             }
//         })
//         x.forEach(val => {
//             if (!z.includes(val)) {
//                 result.push(val)
//             }
//         })
//         console.log("Result: ", result)
//         // Output  ==>>  ["3", "10", "100"]
//         // -------------------
//         result = []
//         z = [1, 2, 15]
//         x = [11, 3, 4, 1, 2]
        
//         z.forEach(val => {
//             if (!x.includes(val)) {
//                 result.push(val)
//             }
//         })
//         x.forEach(val => {
//             if (!z.includes(val)) {
//                 result.push(val)
//             }
//         })
//         console.log("Result: ", result)
//         // ["15", "11", "4", "3"]



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


// Создайте функцию которая принимает строку и считает каждую букву
// => "Helloooo"
// 
// split("") - даёт нам лист - []
// let p = ["a", "b", "c", "c"]
// p.forEach((value,index) => {
//     console.log(value, index)
// })


// let word = "Helloooo"
// let result5 = ""

// let word_copy = word.toLowerCase()
// word.split("").forEach((letter, index) => {
//     if (result.includes(letter)) {
//         let idx_of_l = result5.indexOf(letter)
//         let count = parseInt(result5[idx_of_l + 2]) + 1
//         result[idx_of_l + 2] = count
//     } else {
//         result += `${letter}:1`
//     }
// })
// console.log("Result:", result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// Считает сколько в ней гласных и согласных букв

// let test = "Ramiz Pratav Sinx"

// let vowels = 0
// let constants = 0 

// test.split("").filter((val,idx) => {
//     if ("aioue".includes(val)) {
//         vowels += 1
//     } else {
//         constants += 1
//     }
// })

// console.log("Гласные ", vowels)
// console.log("Согласные ", vowels)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


// TASK - 7 
// Напишите программу что бы утроить все числа 
// в данном списке целых чисел с помощью map()


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 8

// z = [1, 2, 15]
// x = [11, 3, 4, 1, 2]

// result = []

// z.forEach(val => {
//     if (x.includes(val)) {
//         result.push(val)
//             }
//         })
//         x.forEach(val => {
//             if (z.includes(val)) {
//                 result.push(val)
//             }
//         })
//         console.log("Result: ", result)
        // ["15", "11", "4", "3"]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 9 

// Напишите программу на JS, чтобы найти список слов, которые длиннее
// чем n из заданного списка слов

// let words = ["Cyber", "Security", "JavaScript", "HTML", "CSS", "Web"]

// let count = []
// words.filter(w => {
//     if (w.length < 5) { count.push(w) }
// })
// console.log(count)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// TASK - 10

// Создайте функцию которая принимает
// строку и находит все числа из этой строки

// let text = "This is 2nd task for 3rd dat of 30 days of JavaScript"

// let evens = []
// let odds = []

// text.split("").forEach(l => {
//     if (!isNaN(l) && l != " ") {
//         if (parseInt(l) % 2 == 0) {
//             evens.push(parseInt(l))
//         } else {
//             odds.push(parseInt(l))
//         }
//     }
// })
// console.log(`Чётные ${evens} ... \n Нечетные ${odds}`)



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


// TASK - 11 

// Напишите программу на JS, чтобы найти количество чётных цифр



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 







// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
