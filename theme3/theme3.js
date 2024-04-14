// ✅
//  /.../   => RegEXP - регулярное выражение
//  /.../i  => insensitive - нечувствительный к регистрам
//  /.../g  => global - ищет все совпадения, а не прерывается после первого найденного.
// ========================================================
// ✅
//  .replace()  =>  заменить строку на новую строку,  может принимать специальное регулярное выражение

// let test = "Hello world EEE"
// let result = test.replace(/E/g, "*")
// console.log(result)

// ========================================================
// ✅
// .length  =>  длина строки (текста) - считает обычно, без INDEX

// let test = "Hello world"
// console.log(test.length)

// ========================================================
// ✅
// INDEX = всегда начинается с 0

// ========================================================
// ✅
//  .slice()  =>  специальная часть строки - start(включительно) - end(не включительно) 
// slice( start, end )
// let test = "Hello-world" 
// const MIDDLE = parseInt(test.length / 2) 
// parseInt() - удаляет дробную часть (5.5 - даёт 5) или меняет тип данных string в number
// let re = test.charAt(MIDDLE)
// console.log(re)

// let r = test.slice(2, 9) // 2 вырез включительно, 9 не включительно, показывает до 8 индекса 
// console.log("Result: ", r)

// ========================================================
// ✅
//  .toUpperCase()
//  .toLowerCase()

// let test = "Hello world"
// console.log(test.toUpperCase()) // => переводит всю строку в верхний регистр
// console.log(test.toLowerCase()) // => переводит всю строку в нижний  регистр

// ========================================================
// ✅
//  .concat()  =>  объединяет две переменные в 1 строку // => разница с .join() в том что .concat(переменные), .join() элементы массива

// let test = "Hello world "
// let x = "Test"
// z = test.concat(x)
// console.log("Result: ", z)

// z = test + x
// console.log("Result: ", z)

// ========================================================

// let text1 = "Hello "
// let text2 = "World"
// let result = text1.concat(text2)
// console.log(result)
// ========================================================
// ✅
//  trim()  =>  удаляет пробелы в начале и в конце строки

// let test = "    Hello  world    "
// console.log(test.trim())
// console.log(test)

// ========================================================
// ✅
//  split()  =>  разделяет текст на множество частей

// split("") - даёт нам лист - []

// let test = "Hello world"
// let r = test.split(" ") // Разбил на 2 части Hello, world
// let r = test.split("") // Разбил каждую букву на части H. e, l, l, o, w, o. r, l, d
// let r = test.split("o") // Разбил на 3 части Hell, (o) w, (o) rld 
// console.log(r)

// ========================================================
// ✅
//  padStart()  =>  если полученная строка НЕ достигает заданной длины, мы можем заполнить ее символом в начале
//  padEnd()  =>  если полученная строка НЕ достигает заданной длины, мы можем заполнить ее символом в конце
//  всегда нужно ставить на 6 значений больше
// let test = "Hello world"
// let r = test.padEnd(20, "*")
// console.log(r)

// ========================================================
// ✅
//  charAt()  =>  Возвращает символ по указанному индексу
// let x = "Hello"
// let r = x.charAt(0) // => H
// console.log(r)

// let test = "Hello world"
// console.log(test.charAt(0))
// console.log(test[0])
// console.log(test.charAt(3))
// console.log(test[3])
// console.log(test.charAt(8))
// console.log(test[8])

// ========================================================
// ✅
//  indexOf()  =>  возвращает индекс первой буквы, которую он находит

// let test = "Hello world"
// console.log(test.indexOf("w")) // 6

// ========================================================
// ✅
//  lastIndexOf()  =>  возвращает последний индекс буквы

// let test = "Hello world"
// console.log(test.lastIndexOf("o")) // 7

// ========================================================
// ✅
//  search()  =>  возвращает ТОЛЬКО ПЕРВОЕ ВЫРАЖЕНИЕ, которое он находит, может принять RegEXP

// let text = "HellO wOrld"
// console.log(test.search("o"))   // 4
// console.log(text.search(/o/gi)) // 4
// ========================================================
// ✅
//  match()  =>  возвращает СОВПАВШУЮ СТРОКУ ( ВСЕ ) (все строки, если мы используем /.../gi)

// let test = "HellO world"
// console.log(test.match(/o/gi)) // 4

// ========================================================
// ✅
//   includes()  =>  возвращает true, если строка найдена

// let test = "HellO world"
// console.log(test.includes("o"))  // true
// console.log(test.includes("t"))  // false

// ========================================================
// ✅
//  startsWith()  =>  проверяет, начинается ли строка с ...
//  endsWith()  =>  проверяет, заканчивается ли строка на ...

// let test = "HellO world"
// console.log(test.startsWith("d"))  // false
// console.log(test.endsWith("d"))    // true

// ========================================================

//  repeat()  =>  повторяет строку определенное количество раз

// let test = "Hello world "
// console.log(test.repeat(2)) // покажет ещё 1 повторение 

// ========================================================

//  join()  =>  объединяет все элементы массива в строку
// arr = ["Java","script"]  // => ['Java', 'script']
// arr = ["Java","script"].join() // => Java,script
// console.log(arr)

// ========================================================

// let test = "  Hello       world   "
// let x = test.trim()
// let a = x.split(" ")
// console.log(a[0] + " " + a[a.length-1])

// ========================================================

// let x = "mix"
// console.log(typeof("x").repeat(2))