// text + number = text


// MODULES

// script - является уже программой - файл - если он что-то исполняет является программой. 
// console в GOOGLE является продолжением JS 
// string + number = string
// number + number = number

// 10 / 2 => делить на 2 
// %  => остаток от деления/даёт проценты
// 2 ** 2

// ++ => добавляет единицу
// let x = 5 = ++x - сначало результат потом сам x  
// let x = 5 = x++ - сначало x потом результат
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// -- => минусует единицу
// let x = 5 = --x - сначало результат потом сам x  
// let x = 5 = x-- - сначало x потом результат
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

// parse - анализировать - int - цифры
//  "5" + 5 => 55
// "Hello " + 5 => "Hello 5"

// parseInt() => переводит "5" в число
// parseInt() =>  "text" NaN - Not a number
// parseInt() =>  "x1" - если сначала увидит число до текста выдаст number
// prseInt() => let m = 123.314 - выдаст целое число 

// let a = "15" =>  

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// функция принимает в конце себя ()

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

// 0 не делиться => 10 / 2 - infinity 

// .toFixed()












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

