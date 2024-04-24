// let numbers = [1, 2, 3]
// index 0   ===  1
// index 1   ===  2
// index 2   ===  3

// numbers[1]   =>   2

// ========================================================

// let numbers_as_object = {first:11, "second":22, "...":"..." }
// KEYS ARE ALWAYS STRINGS   =>  КЛЮЧИ ВСЕГДА СТРОКИ

// key  first  = 1
// key  second = 2
// key  ...    = ...

// numbers_as_object["second"]   =>  22
// numbers_as_object.second      =>  22
// console.log("numbers_as_object['second']: ", numbers_as_object["second"])
// console.log("numbers_as_object.second: ", numbers_as_object.second)

// ========================================================

// Objects   =>   {}
// Arrays    =>   []

// OBJECT SYNTAX    =>   СИНТАКСИС ОБЕКТОВ
// {key: 'value'}   =>   {ключ: "значние"}

// Создаём обект "стол" в двух вариантах
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// console.log(table_arr[0])
// console.log(table_obj.color)

// console.log(table_arr)
// console.table(table_obj)

// ========================================================

// ----UPDATING--------------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// table_arr[0] = "blue"
// table_obj.color = "blue"   //  === table_obj["color"]

// if referring field exists then it gets updated
// BUT, if not, then it gets created
// RU: если поле существует, то оно обновляется
// НО, если нет, то оно создаётся

// ========================================================

// ----DELETION-------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// console.log("До ",table_arr)
// delete table_arr[1]
// console.log("После ",table_arr)

// console.log("До ",table_obj)
// delete table_obj.size
// console.log("После ",table_obj)

// ========================================================

// ----ADDITION-------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// table_arr[3] = "new field"
// table_obj.new_field = "new field"   //  === table_obj["new_field"]

// if referring field does NOT exist
// then it gets added as a new field
// RU: если поле не существует, 
// то оно добавляется как новое поле

// ========================================================

// ----MERGING-------------------------------------
// creates a new object from two objects
// создаёт новый обект из двух обектов
// let client = {
//     name: "name 1",
//     surname: "surname 1",
//     age: 20,
// }
// let client_address = {
//     city: "city 1",
//     street: "street 1",
//     house: 1,
// }
// let a = {...client, ...client_address}
// console.table(a)

// ------------------------------------------------

// ЗАДАНИЯ С УРОКА №13

// ------------------------------------------------

// ЗАДАНИЕ - 1

//* TASK TO GET INFO FROM CLIENT AND CREATE A TABLE
// RU: ЗАДАЧА ПОЛУЧИТЬ ИНФОРМАЦИЮ ОТ КЛИЕНТА И СОЗДАТЬ ТАБЛИЦУ

// let client_name = prompt("Enter your name: ")
// let client_surname = prompt("Enter your surname: ")
// let client_age = prompt("Enter your age: ")

// let client = {
//     name: client_name,
//     "surname": client_surname,
//     "age": client_age
// }
// console.table(client)

// ========================================================

// ЗАДАНИЕ - 2

// let client = {
//     name: "Name 1",
//     surname: "Surname 1",
//     age: 20
// }
// let x = ["a", "b", "c"]
// x.length - 1
// Array.isArray([])  => bool

// Object.keys(client)   // => ["name", "surname", "age"]  
// Object.values(client)  // => ["Name 1", "Surname 1", 20]
// Object.entries(client)  // => [["name", "Name 1"], ["surname", "Surname 1"], ["age", 20]]

// Object.entries(...)  => gets every entry from 
//                         an object and makes a new Array
//              берёт каждый заход от обекта и создаёт 
//              маленькие листы от них



// Object.keys(...)    => gets every key from object
//                     получает каждый ключ от обекта

// Object.values(...)  => gets every value from object
//                     получает каждый значение от обекта

let person = {
    name: "name 1",
    surname: "surname 1",
    age: 20,
    address: "address 1"
}

// let x = Object.keys(person) // => ["name", "surname", "age", "address"]
// let v = Object.values(person) // => ["name 1", "surname 1", 20, "address 1"]
// let e = Object.entries(person) // => [["name", "name 1"], ["surname", "surname 1"], ["age", 20], ["address", "address 1"]]

// --------------------------------------------------------
// --FUNCTIONs inside Objcets------------------------------
// --------------------------------------------------------

// function fn_name(parameter) {
//    block of code
// }

// DRY  =>  Don't Repeat Yourself 

// let person = {
//     name: "Warren",
//     surname: "Buffet",
//     age: 80,
//     fullname: function() {
//         return this.name + " " + this.surname + ". And his age is " + this.age
//     }
// }
// console.log(person.fullname())

// -------------------------------------------------------------------
// ------CREATING OBJECTS---------------------------------------------
// -------------------------------------------------------------------

function Person(cName, surname, age) {
    this.name = cName
    this.surname = surname
    this.age = age
}
let p1 = new Person("name 1", "surname 1", 20)
let p2 = new Person("name 2", "surname 2", 30)
console.table(p1)
console.table(p2)

// ========================================================

// TASKS
let x = {'a': 1, 'b': "2", 'c': "3", 'd': 4, "e": 'wqwe' }
let z = Object.keys(x).length
console.log(z)

function del_key(object, key) {
    let obj_copy = {...object}
    delete obj_copy[key]
    return obj_copy
}

console.log(del_key(x, 'a'))

