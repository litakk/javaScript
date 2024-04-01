//  Задание - 1

//  В данном случае, длина строки "This is testtext" равна 16, и поскольку 16 делится на 2 без остатка,
//  переменной r будет присвоено значение true. Следовательно, в консоли будет выведено "Result: true".
//  Таким образом, код проверяет, является ли длина строки четным числом, и выводит результат этой проверки. 

//  let x = "This is testtext"
//  let r = x.length % 2 == 0
//  console.log("Result: ", r)

//  ------------------------------------

//  Задание - 2

//  let z = "Vladimir Vladimirovich Putin";
//  let first_space = z.indexOf(" ")
//  let last_space = z.lastIndexOf(" ")

//  let first_name = z.slice(0, first_space)
//  let middle_name = z.slice(first_space+1, last_space)
//  let last_name = z.slice(last_space+1)

//  console.log(first_name[0] + ". " + middle_name[0] + " " + last_name)

//  V. V Putin



//  ------------------------------------



// let x = "Hello world"
//  slice() 
//  Exercise 1: Дана строка str. Вам нужно вернуть первую половину строки, используя slice().
//  Например: "Cтрока" => "Cтр"
// let middle = parseInt(x.length / 2)
// console.log(x.slice(0, middle))
//  ------------------------------------------
//  Exercise 2: Дана строка str. Вам нужно вернуть последние три символа строки, используя slice().
//  Например: "Cтрока" => "ока"
// console.log(x.slice(x.length-3))
//==================================================================================================
//  replace()
//  Exercise 1: Дана строка str, замените все вхождения буквы "a" на букву "e", используя replace().
//  Например: "Атомная станция" => "етомнeя стeнцeя
// x = "Атомная станция"
// console.log(x.replace(/а/gi, 'e'))
//  ------------------------------------------
//  Exercise 2: Дана строка str, замените первое вхождение слова "world" на слово "universe", используя replace().
//  Например: "Hello world" => "Hello universe"
// x = "Hello World"
// console.log(x.replace(/world/ig, "universe"))
//==================================================================================================
//  padStart and padEnd
//  Используйте эти методы, чтобы центрировать слово, если длина слова меньше ожидаемой.
//  Например: "Hello"   =>  "***Hello***"
// x = "Hello"
// let r = x.padStart(x.length+3, "*")
// r = r.padEnd(r.length+3, "*")
// console.log(r)
//==================================================================================================


//  INTERMEDIATE EXERCISES
//============================================
//  2. You have a string and devide it into two parts from the middle. Then repeat each part n times
//  RU: У вас есть строка и вы ее делиете на две части посередине. 
//  Затем повторяете каждую часть n раз

//  Example:
//  let test_string = "..."
//  let n = ...
//  EXAMPLE - 1:    
//  INPUT:  
// let test_string = "Hello world"
// let n = 2
//  OUTPUT: "HelloHello  WorldWorld"
//  -------------
//  EXAMPLE - 2:    
//  Даём:  
// let test_string2 = "Farzod"
// let n2 = 2
//  Берём: "VladVladVladimirimirimir"
//  RU: ШАГИ:
//  1. Найдите середину строки
//  2. Разделите строку на две части
//  3. Повторите каждую часть n раз и объедините их

// let middle2 = parseInt(test_string2.length/2)
// let firstPart = test_string2.slice(0, middle2)
// let secondPart = test_string2.slice(middle2)
// console.log(firstPart.repeat(n2) + " 🎯 " +  secondPart.repeat(n2))
//==================================================================================================

//  3. You have some kind of string. You have to get the first letter and replace it in all other 
//  places except first occurence with any kind of wanted sign  "$, #, @, *, ...". 
//  RU: У вас есть строка. Вам нужно получить первую букву и заменить ее во всех остальных
//  местах кроме первого на любой желаемый знак "$, #, @, *, ..."
//  -------------
//  INPUT:
// let string = "Xusen Xello xXx"
// let symbol = "$"
// let firstLetter = string[0]
//  string = string.toLowerCase().replaceAll(firstLetter.toLowerCase(), symbol)
// console.log(firstLetter + string.slice(1))
//  OUTPUT:  "This is $es$ $ex$"
//==================================================================================================