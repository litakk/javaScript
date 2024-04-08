// let arr = ["a", "b", 1, 2]

// Add
// arr.push("w")  // =>   Добавляет элемент в конец массива  
// console.log(arr)
// // ----------------------------------------------------
// arr.unshift("start")
// console.log(arr)
// ----------------------------------------------------

// Delete
// arr.pop()    // =>   Удаляет последний элемент массива
// console.log(arr)
// // ----------------------------------------------------
// arr.shift()  // =>   Удаляет первый элемент массива
// console.log(arr)
// // ----------------------------------------------------
// DEL AND ADD
// arr.splice(starting_index,  what_to_delete,  what_to_add)

// ----------------------------------------------------

// let words = ["Bob", "John", "Alex", "Mike", "Tom"]
// let numbers = [23, 11, 5, 99, 1, 10]

// console.log(words.sort())
// console.log(numbers.sort((a, b) => a - b))

// console.log(words.reverse())

// ----------------------------------------------------
// ----------------------------------------------------

// let arr = [1, 2, 'Test', 3, 4, 5, 6, 7, 8]
// arr[2]  => 'Test'

// Array  =>  лист
// [], {}  =>  object types  =>  array, object
// Array.isArray(arrayName) => checks if the array is 
//                          truly an instance of Array
// ===============================================
// .push(...)  => adds a new element to the end 
//                RU: добавляет элемент в конец массива
//              ---------------------------
// console.log("Length: " + arr.length)
// let new_length = arr.push(9)
// console.log("Length: " + new_length)
// console.log(arr)
// ===============================================
// .unshift(...) => adds a new element to the beginning
//                 RU: добавляет элемент в начало массива  
//              ---------------------------
// console.log("Length: " + arr.length)
// let new_length = arr.unshift(9)
// console.log("Length: " + new_length)
// console.log(arr)
// ===============================================
// .pop() => removes an element from the end
//           RU: удаляет элемент с конца массива
//          --------------------------------------
// console.log("Original arr before: " + arr)
// let deleted_item = arr.pop()
// console.log("Original arr after: " + arr)
// console.log("deleted_item: " + deleted_item)
// ===============================================
// .shift() => removes an element from the beginning
//             RU: удаляет элемент с начала массива
//          --------------------------------------
// console.log("Original arr before: " + arr)
// let deleted_item = arr.shift()
// console.log("Original arr after: " + arr)
// console.log("deleted_item: " + deleted_item)

// ===============================================
// .splice(...) => takes 3 parameters
//                 1st => where to start
//                 2nd => how many items to delete
//                 3rd => how many items to add
//         RU: принимает 3 параметра
//                 1й => с какого индекса начать
//                 2й => сколько элементов удалить
//                 3й => сколько элементов добавить
// const middle_idx = parseInt(arr.length / 2)
// let x = [10, 11, 12]

// arr.splice((middle_idx-3)**0,  2, "...['Jamol']")
// console.log(arr)

// ===============================================
// .concat() => merges two lists (Arrays)
//              RU: объединяет два массива
// let z = [1, 2, 3]
// let x = [4, 5, 6]
// y = z.concat(x)   // [1, 2, 3, 4, 5, 6]
// y2 = x.concat(z)  // [4, 5, 6, 1, 2, 3]
// let y  = [...z, ...x]
// let y2 = [...x, ...z]

// ===============================================
// ...  =>  spread operator adds only elements from 
//          the list into the list 
//          RU: распыляет элементы массива в массив
//          ex:
//              let x=[1,2]; 
//              let y=[3,4];
//              let z=[...x, ...z]
//              console.log(z)  // [1,2,3,4]
// ===============================================
// [].toString() => returns an Array as a string
//               RU: возвращает массив как строку
// ===============================================
// .indexOf(...)  => shows index of the element of item
// ===============================================
// .includes(...) => checks if the item is in the list or not
// ===============================================
// Sorting
//      .sort()     => sorts the list
//      .reverse()  => reverses the list

// let numbers = [23, 1, 25, 22, 12, 9, 2, 87, 6]
// let words = ["w", "d", "c", "a", "z", "y", "x"]
// // --------------------------------------------
// let sorted_ns = numbers.sort((a, b) => a - b)
// let sorted_ws = words.sort()
// // --------------------------------------------
// console.log("sorted_ns: " + sorted_ns)
// console.log("sorted_ws: " + sorted_ws)
// ===============================================
// STRING METHOD
//      .join("") => converts an array into a string
// [1, 2, 3].join("")  // "123"



// ===============================================



// ===============================================



// ===============================================




let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[1])

// ------------------------------------

let arr2 = [1, 2, 3, 4, 5]
let last = arr2[arr2.length-1]
if (last%2 == 0) {
    console.log('even')
} else {
    console.log('odd')
}

// ------------------------------------

let number = "123"
let half = parseInt(parseInt(number)/2)
let quater = parseInt(parseInt(number)/4)
let arr3 = []
arr3.push(parseInt(number), half, quater)
console.log(arr3[0]+arr3[1]+arr3[2])

// ------------------------------------

let text = "Hello"
let arr4 = ["qwe", "rty", "uio", "asd", "fgh"]
const MIDDLE = parseInt(arr4.length/2)
arr4.splice(MIDDLE, 0,  text)
console.log(arr4)

// ------------------------------------

let arr5 = [123, 312, 2, 1, 5, 6, 9, 10]
let last_item = arr5.pop()
if (last_item%2 == 0) {
    console.log(`It is ${last_item} and EVEN`)
} else {
    console.log(`It is ${last_item} and ODD`)
}