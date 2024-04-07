//  ARRAY THEME

let x =  1 // можно сохранять только 1 информацию
x = true // полностью поменял x = 1 на true таким образом всё содержимое утеряно

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Array - List - Массив
// может держать несколько информаций в одном месте

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// с помощью typeof() - он покажет его как OBJECT. что бы показал Array это или нет нужно использовать следующее: isArray()

let arr = [1,2,3, "a","b","c", [1, 2, 3]] // не имеет значения сколько информаций в одном листе
console.log(Array.isArray(arr)) 

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// что бы вырезать массив:
// let r = arr.slice(0,2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// что-бы взять букву с массива:
let t = arr[[1]]
let y = arr[[6][0]]

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// что-бы проверить является ли строка Array
let arr2 = [1, 2, 3, "a", "b", "c", [1, 2]]
Array.isArray(arr2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ВСЕ  удаляют и сохраняют в оригинале

// Add - добавить в массив
arr2.push("end") // добавляет в конец массива
console.log(arr2) 

arr2.unshift("start") // добавляет в начало массива
console.log(arr2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Delete - удалит с массива 
arr2.pop() // удаляет в конце массива
console.log(arr2)

arr.shift() // удаляет в начале массива
console.log(arr2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// DEL AND ADD
// arr.splice(starting index, what_to_delete, what_add_after_delete)

// let letters = ['a','b','c','d']
// letters.splice(1,1)
// letters.splice(2,2,2,2)
// letters.splice(2, 2+2 , 2)

// letters.splice(2, 1**999 , "1*999") // с 2 индекса начал, удалил 1 во 2 индексе, и добавил во 2 индекс string
// console.log(letters)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// spreat

// let x = [1,2,3, "Kamron"]
// console.log(...x) // 1 2 3 - без массива 

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let x = [1,2,3, "Kamron"]
// let y = [1,2,3, "Kamron"]
// let z = [1,2,3, "Kamron"]
// let = a [ ...x, ...y, ...z]
// console.log(a)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let words = ["Bob", "John", "Alex", "Mike","Tom"]
// let numbers = [23, 11, 5, 99, 1, 10]

// console.log(words.sort()) // ставит по алфавиту
// // console.log(numbers.sort()) // берет только первые цифры 
// console.log(numbers.sort((a, b) => a - b)) // используется что бы поставить по порядку цифры





//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 





//  ARRAY - ЗАДАНИЯ BEGINNER

// let answer = prompt("Введите Сообщение")
// let result = [answer.split(" ")]
// console.log(result)

//  - - - - - - - - - - - - - - - - - - - - - - -  
// 1 - задание

// let x = [1,2,3,4]
// console.log(x[1])

//  - - - - - - - - - - - - - - - - - - - - - - -  
// 2 - задание

// let z = [1, 2, 3, 4, 5]
// let q = z[z.length-1]
// if (q % 2 == 0) {console.log("чётное")}
// else { console.log("не чётное")}

//  - - - - - - - - - - - - - - - - - - - - - - -  
// 3 - задание

// let answer = prompt("Введите сообщение") // 20 с // 20 10 5 
// let w1 = parseInt(answer / 2)
// let w2 = parseInt(answer / 4)
// let res = [w1,w2]
// console.log(res)

//  - - - - - - - - - - - - - - - - - - - - - - -  
// 4 - задание

// let n = prompt("сообщение")
// let m = ["abc","afc", "ss","str"]
// let middle = parseInt(m.length / 2)
// let l = m.splice(middle,0,n)
// console.log(m)

//  - - - - - - - - - - - - - - - - - - - - - - -  
// 5 - задание 

// let a = [1,2,3]
// let t = a.pop()
// if (t % 2 == 0) {console.log("чётное")}
// else { console.log("не чётное")}

//  - - - - - - - - - - - - - - - - - - - - - - -