// String + Number => String✅
// console.log("Hello " + 5) => "Hello 5" 
// -----------------------------------
// Number + Number => Number✅
// console.log(5 + 5) // => 10
// -----------------------------------

// parseInt(...) =>  преобразует строку в целое число✅
// console.log("5" + 5)  // =>   "55"
// console.log(parseInt("5") + 5) // => 10
// -----------------------------------

// let a = "15"
// let z = "z"
// let x = "x1"
// let b = "12b"
// let m = 123.314

// console.log(parseInt(a))  //  15    -> Number✅
// console.log(parseInt(z))  //  Not A Number✅
// console.log(parseInt(x))  //  Not A Number✅
// console.log(parseInt(b))  //  12    -> Number✅
// console.log(parseInt(m))  //  123   -> Number✅

// -----------------------------------
// ✅
// let x = 5
// let a = typeof(x)
// let b = typeof("x")
// console.log(a)
// console.log(b)

// -----------------------------------

// console.log("10a" - x)  // -> NaN  -> Not a Number
// console.log("10"  - x)  // -> 5 => КОД РАБОТАЕТ ИЗ ЗА ТОГО ЧТО ТАМ НЕТ БУКВЫ. ЕСЛИ БУДЕТ БУКВА NaN

// console.log(parseInt("10a") - x)  // -> 5  => СНАЧАЛО ИДЕТ ЦИФРА ПОТОМ БУКВА ✅ ЕСЛИ БУДЕТ БУКВА ПОТОМ ЦИФРА ❌
// Здесь JS пытается помочь, преобразовав строку в число и затем вычитая x из него

// -----------------------------------

// console.log(typeof(parseInt(parseInt("22")+parseInt("1b")))) ✅

//     Код читается всегда сверху вниз ✅
//     слева направо ✅
//     С середины внаружу ✅

// -----------------------------------

// Evaluate -> Вычислить ✅
// EVAL => это калькулятор, который берет строку и вычисляет ее

// let x = 5 

// let calc = eval("(100 - 1 + 10 - 9) / 10")
// console.log(calc)

// -----------------------------------

// let x = 5
// console.log(x ** 3) // 125   =>  5 * 5 * 5✅
// console.log(2 ** 3) // 8     =>  2 * 2 * 2✅

// -----------------------------------

// let x = 5
// % => Modulus (Division Remainder)  =>  Остаток от деления ✅
// console.log(x / 2) // 2.5✅
// console.log(x % 2) // 1  ✅
// console.log(11 % 5) // 1 ✅
// console.log(15 % 2) // 1 ✅
// console.log(18 % 7) // 4 ✅

// -----------------------------------

// let x = 5
// x ++   // сначала он показывает исходное значение x, затем добавляет 1 ✅
// ++ x   //  сначала он добавляет 1 затем показывает исходное значение x ✅
// console.log(x++) // 5 ✅
// console.log(x)   // 6 ✅
// =============
// console.log(++x) // 6 ✅
// console.log(x)   // 6 ✅

// -----------------------------------

// let x = 5 
// x --   // сначала он показывает исходное значение x, затем вычитает 1 ✅
// -- x   // сначала он вычитает 1 затем показывает исходное значение x  ✅
// console.log(x--) // 5 ✅
// console.log(x)   // 4 ✅
// =============
// console.log(--x) // 4 ✅
// console.log(x)   // 4

// -----------------------------------

// let x = 5
// console.log(x == 5)     // true ✅
// console.log(5 == "5")   // true ✅
// console.log(x == 10)    // false ✅
// console.log('a' == 'b')    // false ✅
// console.log('a' == 'a')    // true ✅

// -----------------------------------

// let x = 5
// console.log(5 === "5")  // false ✅ => тут тип данных не подходит поэтому выдаёт false
// console.log(5 === 5)    // true ✅ =>  тут подходит и значение и тип данных поэтому выдаёт true

// -----------------------------------

// let x = 5
// console.log(x + 5)  // x == 10 ✅  (-, *, /, **, %) одинаковы 
// console.log(x)      // x == 5  ✅  
// console.log(x += 5) // x == 10 ✅  (-=, *=, /=, **=, %=) одинаковы
// console.log(x)      // x == 10 ✅  

// -----------------------------------

//! integer  =>  целая цыфра  =>  int       =>  1     ✅
//! float    =>  не целая цыфра  => float   =>  1.100 ✅
//! +  Добавление - Addition 
//! -  Вычитание - Subtraction
//! *  Умножение - Multiplication
//! /  Разделение - Division
//! **  Exponentiation (ES2016) => степень
//! %  Модуль (Остаток деления)  =>  остаток
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

// - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - - 

//!  >      greater than
//!  <      less than
//!  >=  greater than or equal to
//!  <=  less than or equal to


//!  &&  and  =>  и      ...ham    
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
//!  ||  or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
//!  !  not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! typeof      Returns the type of a variable
// ex:  typeof("John")   =>  string

//! The maximum number of decimals is 17

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => преобразует строку в целое число

// ------------------------------

// let x = "dqwdqw"
// let result = !isNaN(x)
// console.log(result)

// ------------------------------

//! isNaN() => возвращает логическое значение, указывающее,
//              является ли значение зарезервированным значением NaN 
//              (не число)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true

// ------------------------------

//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number

// ------------------------------

//! .toFixed()      Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

// 99.55.toFixed(1)     =>    '99.5'
// 99.55.toFixed(2)     =>    '99.55'
// 99.55.toFixed(3)     =>    '99.550'

// ------------------------------

//!  .toPrecision()  Returns a number written with a specified length  
//  ex: 10.345.toPrecision(2)  =>  10