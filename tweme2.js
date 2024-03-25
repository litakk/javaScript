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



