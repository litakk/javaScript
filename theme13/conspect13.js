// любой объект имеет своё качество - качество это то как он представляе его (ex: описывает человека)

// объект создаётся в фигурной скобке {}
// ex: 

const person1 = {
    "name": "Bob",
    "age": 30,
    "city": "New York",
}

// = = = = = = = = = = = = = = = = = = = = = = = = = 

const person2 = {
    "name": "Bob",
    "age": 30,
    "city": "New York",
    address: {
        city: "New York",
        street: "Broadway",
        number: 12
    }
}

// могут иметь ключ без ковычек EX: { city: "New York" }

// = = = = = = = = = = = = = = = = = = = = = = = = = 

const person3 = {
    "name": "Bob",
    "age": 30,
    address: "New York"
}
console.log(person3["address"]) // output: New York
console.log(person3.address)

// = = = = = = = = = = = = = = = = = = = = = = = = = 

console.log(!Array.isArray(person3) && typeof (person3))

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// ОТ ОБЪЕКТА С ПОМОЩЬЮ КЛЮЧА БЕРЁМ
// ОТ МАССИВА С ПОМОЩЬЮ INDEX

// SYNTAX:
// есть ключ существует он его обновляет на другое значение
// если ключ не существует он его создаёт

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// UPDATE

const person4 = {
    "name": "Bob",
    "age": 30,
    address: "New York"
}
person4.age = 15

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// DELETE

const person5 = {
    "name": "Bob",
    "age": 30,
    address: "New York"
}
person5.age = 15
delete person5 // нужно указать ключ или index для Array

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// ADD

const person6 = {
    "name": "Bob",
    "age": 30,
    address: "New York"
}
// что бы обновить массив table[3] = "text"
// что бы обновить в объектах: 
// table.newfield = "new field"

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// СЛИВАНИЕ 2 ОБЪЕКТОВ ИЛИ МАССИВОВ

// слить ключи:
const person7 = {
    "name": "Bob",
    "age": 30,
    address: "New York"
}
let a = { ...person6, ...person7 } // сливает 6 переменную с объектами с 7 переменной

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// С ПОМОЩЬЮ PROMPT() ПОЛУЧАЕМ ИМЯ ФАМИЛИЮ 
// let answerName = prompt('Введите Имя')
// let answerSurname = prompt('Введите Фамилию')
// let answerAge = prompt('Введите Возраст')

// let result = {
//     name: answerName,
//     surname: answerSurname,
//     age: answerAge
// }
// console.table(result)

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// keys(...) - только ключи
// values(...) - только значения
// intries(...) - ключ и значение


// let answerName2 = prompt('Введите Имя')
// let answerSurname2 = prompt('Введите Фамилию')
// let answerAge2 = prompt('Введите Возраст')

// let result2 = {
//     name: answerName,
//     surname: answerSurname,
//     age: answerAge
// }
// console.log(Object.keys(result2))
// console.log(Object.values(result2))
// console.log(Object.intries(result2))

// = = = = = = = = = = = = = = = = = = = = = = = = = 

function Person(cName, surname, age) {
    this.name = cName
    this.surname = surname
    this.age = age
}
let p1 = new Person("name1", "surname 1", 20)
let p2 = new Person("name2", "surname 2", 30)
console.table(p1)
console.table(p2)

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// Создайте функцию, которая принимает объект 
// в качестве параметра и возвращает сумму всех значений, которые являются числами


let obj = {
    a: 1,
    b: "2",
    c: "text",
    d: 4,
}

let x = Object.values(obj)
let re = []

x.forEach(val => {
    if (typeof (val) == "number" && !isNaN(val)) {
        re.push(val)
    }
})

let r = re.reduce((acc, next) => {
    return parseInt(acc) + parseInt(next)
}, 0)

console.log(r)

// = = = = = = = = = = = = = = = = = = = = = = = = = 

// Создайте функцию, которая принимает объект в качестве параметра и преобразует каждый
// ключ в обратный регистр (назад-вперёд) и возвращает новый объект

