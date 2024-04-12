// 1 Задание

// let x = ["a","b","c","d","e","f"] 
// let x = [1,2,3,4,5] 
 
// (value, index, array) => {...} 
// x.forEach((value, index) => {console.log(`Index - ${index}: ` + value)}) 

// ========================================== 

// 2 Задание

// 1 + 2 + 3 + 4 + 5 

// let arr = [41, 123, 42, 51, 532, 666, 12345] 
 
// let max_number = arr[0] 
// arr.forEach(num => { 
//     if (num > max_number) { 
//         max_number = num 
//     } 
// }) 
// console.log(max_number) 

// ========================================== 

// 3 Задание

// let result = 0 
// ["1",  "2",  "3",  "4",  "5"] 
// let splitted_number = String(max_number).split("")  
// splitted_number.forEach((value) => { 
//     result += parseInt(value) 
// }) 
// console.log("Result: ", result)


// ========================================== 

// 4 Задание
// 
// let arr = [1, 2, 3, 4, 5] 
// let result = arr.filter((value) => { 
    // if (value % 2 == 0) { // берёт каждое значение и делит на 2 без остатка 
        // return value // в итоге покажет то, что делится без остатка
    // } 
// }) 
// console.log("Result: ", result) 
// Итог таков что он создаёт новый массив и добавляет туда только то что прошло проверку без лишних цифр
 
// ========================================== 

// 5 Задание

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