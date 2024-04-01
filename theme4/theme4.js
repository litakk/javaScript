// ВРЕМЯ БЕРЁТ С ПК
// можно использовать объект Date и метод toLocaleString() для отображения даты и
// времени публикации статей, комментариев или других элементов контента на веб-сайте в формате,
// подходящем для языка и локали пользователя. Это обеспечит удобство и понимание для посетителей вашего сайта,
// независимо от их географического расположения.

// let date = new Date()
// console.log(date)
// console.log(date.getTimezoneOffset() / -60) // => показывает часы в минутах
// Затем результат делится на -60, чтобы преобразовать разницу времени в часы

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// LOCAL TIME

// Сайт на котором есть все форматы времени стран
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// let date = new Date()
// console.log(date.toLocalString()) // => 30/03/2024 - показывает локальное время
// console.log(date.toLocaleString("en-US")) // => показывает время в формате USA
// console.log(date.toLocaleString("ko-KR")) // => показывает время в Корейском формате
// console.log(date.toLocalString("ar-EG")) //  => показывает время в Арабском формате

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// UTC - Coordonated Universal Time - Всемирное координированное время
// GMT - Greenwich Mean Time Zone - Средний часовой пояс по Гринвичу

// JANUARY 1970 - с этого года всё время считает в милисекундах

// DATE - считает месяца INDEX`ами 
// new Date() => setters
// getFullYear() => год



//! GETTERS  =>  ...getDay(), ...getHour(), ...getMinutes() ...



// new Date(2022, 11, 30, 12, 0, 0) // => in local timezone

// создает объект Date с указанными параметрами: 
// год 2022, месяц декабрь (поскольку месяцы в JavaScript нумеруются с 0, то 11 указывает на декабрь),
// день 30, часы 12, минуты 0, секунды 0.

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

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let today = weekDays[new Date().getDay()]