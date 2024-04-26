function delete_char(str, number) {
    return str.slice(0, number) + str.slice(number+1)
} 

result = delete_char("Hello world", 3)
console.log("Result: " + result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// Create a function that takes an array as a parameter
// and sums up all numbers or length of strings in the array
// ex: [1, 2, 'hello', '3']  => 11
// - if number  -  plus them
// - if string  - plus their length
// - if number in string - plus the number

// RU: Создайте функцию, которая принимает массив в качестве параметра
// и суммирует все числа или длину строк в массиве
// ex: [1, 2, 'hello', '3']  => 11
// - если число  - сложить
// - если строка - сложить их длину
// - если число в строке - сложить число

function sum(arr) {
    let result = 0
    arr.forEach(val => {
        if (typeof(val) == 'number') {
            result += val
        } else if (typeof(val) == 'string') {
            if (!isNaN(val)) {
                result += parseInt(val)
            } else {
                result += val.length
            }
        } else {
            console.log("We can not add this value: ", val)
        }
    })
    return result
} 
let r = sum([1, 2, 'hello', '3'])
console.log("Result: ", r)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// Create a function that takes a text and finds all numbers inside 
// it and devides them into evens and odds

// RU: Создайте функцию, которая принимает текст и находит все числа внутри него и 
// делит их на четные и нечетные

// EX:
let text = "This is 2024-year and 4th month and 25th day"
function get_numbers(text) {
    let odds = []
    let evens = []
    text.split("").forEach(item => {
        if (!isNaN(item) && item != " ") {
            let num = parseInt(item)
            if (num%2 == 0) {
                evens.push(num)
            } else {
                odds.push(num)
            }
        }
    })
    return "evens: " + evens + " odds: " + odds
}

let r2 = get_numbers(text) // { evens: [2, 0, 2, 4, 4, 2],  odds: [5] }
console.log("Result: ", r2)


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

