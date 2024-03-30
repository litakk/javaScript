// ВРЕМЯ БЕРЁТ С ПК
// UTC - Coordonated Universal Time
// GMT - Greenwich Mean Time Zone
// JANUARY 1970 - с этого года всё время считает в милисекундах
// DATE - считает месяца INDEX`ами 
// new Date() => setters
// getFullYear() => год
// date.getTimezoneOffset() / -60) // => показывает часы в минутах


//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCAL TIME

// let date = new Date()
// console.log(date.toLocalString()) // => 30/03/2024 - показывает локальное время
// console.log(date.toLocaleString("en-US")) // => показывает время в формате USA
// console.log(date.toLocaleString("ko-KR")) // => показывает время в Корейском формате
// console.log(date.toLocalString("ar-EG")) //  => показывает время в Арабском формате

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let date = new Date()
// console.log(date)

// let date = new Date()
// console.log(date.getTime()) // => ЮНИКС

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let date = new Date(2024, 12) // => выдаст 11 месяц
// console.log(date)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let date = new Date(2024, 11, 12) // => выдаст 10 месяц - 11 день
// console.log(date)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let date = new Date(2024, 11, 12) 
// console.log(date.getUTCHours())

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let date = new Date().getTime() // => будет показывать время в милисекундах
// console.log(date)