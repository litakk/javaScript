// MODULES - МОДУЛИ - МОДУЛЬ

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ОПИСАНИЕ ТЕМЫ:
// script - является уже программой - файл - если он что-то исполняет уже является программой. 
// console в GOOGLE так же является продолжением Java Script 
// string + number = string
// number + number = number
// 0 не делиться =>     10 / 2  -  infinity 
// 10 / 2 => делить на 2 
// функция принимает в конце себя ()
//  "5" + 5 => 55 - - - "Hello " + 5 => "Hello 5"
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// %  => остаток от деления/даёт проценты
// 2 ** 2 - степень 2 умножает 2 раза 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ++  => добавляет единицу
// let x = 5  => ++x - сначало покажет результат потом само содержимое переменной x
// let x = 5  => x++ - сначало покажет содержимое x а потом уже результат
// --  => минусует единицу
// let x = 5  => --x - сначало результат потом сам x  
// let x = 5  => x-- - сначало x потом результат
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// == => проверяет true/false - равен ли ... этому ...
// let x == 5
// console.log(x == 5)  => true
// console.log(x == "5")  => true
// console.log(x == 10) => false
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// === => отличается от == тем что проверяет равен ли ... к ... и проверяет тип данных  
// let x = 5
// console.log(5 === "5")   
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let = 5
// console.log( x + 5) - х остаётся 5
// console.log( x += 5) - += сохраняет x = 10
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// integer => 123 целое число
// float => 123.623 - не целое число
// complex = цифры + буквы 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // .toFixed()
// let number = 3.14159;
// let result = number.toFixed(2); // Нужно указать, сколько значений показать после точки
// console.log(result);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// parse - анализировать - int - цифры

// parseInt() => переводит "5" в число
// parseInt() =>  "text" NaN - Not a number
// parseInt() =>  "x1" - если сначала увидит число до текста выдаст number
// parseInt() => let m = 123.314 - выдаст целое число 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// eval() - обычный калькулятор
// let calc = eval(" (100 - 1 + 10 - 9) / 10 ")
// console.log(calc)

// && - 1 не правильно FALSE
// OR - 1 правильно TRUE
//  1 != 1 => False 
// 1 != 2 => True 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// если там число мы хотим True взять
// если там буквы мы хотим число взять
// let x = "123"
// console.log(!isNaN(x))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// console.log(isNaN("123")) => false - Число Not a number - даёт FALSE, потому что всё число
// console.log(isNaN("a123")) => true - 


// let a = "Hello World"
// console.log(!isNaN(123))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 












// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Задания 
// 2 числа - найдите наибольшее число
// 3 числа - найдите наибольшее число

// let x = 100
// let c = 50

// if ( x > c ) {
//     console.log(x)
// }
// else {
//     console.log(c)
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let q = 100
// let w = 50
// let r = 30

// if ( q > w  && r > q ) { 
//     console.log(r)
//  }

//  else if ( w > q &&  >  ) {
//     console.log(r)
//  }
//  else {
//     console.log()
//  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// function findLargestNumber(a, b, c) {
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }

//   let number1 = 10;
//   let number2 = 20;
//   let number3 = 15;
  
//   let largestNumber = findLargestNumber(number1, number2, number3);
//   console.log("Самое большое число: " + largestNumber);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 






// String + Number == String
// ex:   "Hello " + 5  => "Hello 5"
// -----------------------------------
// Number + Number == Number
// ex:    5 + 5  => 10
// -----------------------------------
// parseInt(...) =>  converts a string into a number
//              RU:  преобразует строку в целое число
// console.log("5" + 5)  // =>   "55"
// console.log(parseInt("5") + 5) //  =>   10
// let a = "15"
// let z = "z"
// let x = "x1"
// let b = "12b"
// let m = 123.314

// console.log(parseInt(a))  //  15    -> Number
// console.log(parseInt(z))  //  Not A Number
// console.log(parseInt(x))  //  Not A Number
// console.log(parseInt(b))  //  12    -> Number
// console.log(parseInt(m))  //  123   -> Number
// -----------------------------------
// let x = 5
// let a = typeof(x)
// let b = typeof("x")
// console.log(a)
// console.log(b)
// -----------------------------------
// let x = 5
// console.log("10a" - x)  // -> NaN  -> Not a Number
// console.log("10"  - x)  // -> 5
// console.log(parseInt("10a") - x)  // -> 5
// Here JS tries to help by converting a string into number 
// and then subtracting x from it
// RU: Здесь JS пытается помочь, преобразовав строку в число
//     и затем вычитая x из него
// -----------------------------------
// console.log(typeof(parseInt(parseInt("22")+parseInt("1b"))))

// REMEMBER:  The code is read always from 
//           top to bottom
//           left to right
//           from the middle to outside
// RU: Код читается всегда сверху вниз
//     слева направо
//     из середины наружу
// -----------------------------------
// let x = 5
// Evaluate -> Вычислить

// EVAL => is a calculator that takes a string and calculates it
// RU: EVAL => это калькулятор, который берет строку и вычисляет ее
// let calc = eval("(100 - 1 + 10 - 9) / 10")
// console.log(calc)
// -----------------------------------
// let x = 5
// console.log(x ** 3) // 125   =>  5 * 5 * 5
// console.log(2 ** 3) // 8     =>  2 * 2 * 2
// -----------------------------------
// let x = 5
// % => Modulus (Division Remainder)  =>  Остаток от деления
// console.log(x / 2) // 2.5
// console.log(x % 2) // 1
// console.log(11 % 5) // 1
// console.log(15 % 2) // 1
// console.log(18 % 7) // 4
// -----------------------------------
// let x = 5
// x ++   // first it shows the original value of x, then adds 1
// ++ x   // 
// console.log(x++) // 5
// console.log(x)   // 6
// =============
// console.log(++x) // 6
// console.log(x)   // 6
// -----------------------------------
// let x = 5
// x --   // first it shows the original value of x, then subtructs 1
// -- x   // 
// console.log(x--) // 5
// console.log(x)   // 4
// =============
// console.log(--x) // 4
// console.log(x)   // 4
// -----------------------------------
// let x = 5
// console.log(x == 5)     // true
// console.log(5 == "5")   // true
// console.log(x == 10)    // false
// console.log('a' == 'b')    // false
// console.log('a' == 'a')    // true
// -----------------------------------
// let x = 5
// console.log(5 === "5")  // false
// console.log(5 === 5)    // true
// -----------------------------------
// let x = 5
// console.log(x + 5)  // x == 10   (-, *, /, **, %) are the same
// console.log(x)      // x == 5  
// console.log(x += 5) // x == 10   (-=, *=, /=, **=, %=) are the same
// console.log(x)      // x == 10  
// -----------------------------------
//! integer  =>  целая цыфра  =>  int       =>  1
//! float    =>  не целая цыфра  => float   =>  1.100
//! +  Addition
//! -  Subtraction
//! *  Multiplication
//! /  Division
//! **  Exponentiation (ES2016) => степень
//! %  Modulus (Division Remainder)  =>  остаток
//! ++  Increment
//! --  Decrement
//! =    x = y         x = y
//! +=    x += y     x = x + y
//! -=    x -= y     x = x - y
//! *=    x *= y     x = x * y
//! /=    x /= y     x = x / y
//! %=    x %= y     x = x % y
//! **=   x **= y     x = x ** y


//!  ==  equal to (проверяет только значения)
//!  ===  equal value and equal type
//!  !=  not equal
//!  !==  not equal value or not equal type
// console.log(!(!(2 != 2)))