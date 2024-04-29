// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// function myFunc() {}

// const myFunc = function() {}

// function myFunc() {} => это превратилось в это ->
// let myFunc = parametr => console.log(parametr)

// let result = [] // колодец в котором хранится результат
// numbers.forEach(value => {
//     if(value%2==0) {
//     return result.push(value)
//     }
// })
// console.log(result)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// words = ["apple", 'banana', 'cherry']

// let sum = words.reduce((acc, next) => {
//         return acc + next.length
//     }, 0)

// console.log(sum)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

let arr = [11, 123, 231, 5555, 12, 1, 9]

let result = arr.reduce((acc, next) => {
    let count = null
    
    if (typeof(acc) === 'number') {
        let count = String(acc).length
    }
        
    return count + String(acc).length + String(next).length

})

console.log(result)
