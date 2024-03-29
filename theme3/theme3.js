// String Methods => Text 
// Метод и Фуункция работают одинаково
// Функция - parseInt() - isNaN() - не зависят не от чего
// .method-name() => text.method-name() - методы 
// Каждая функция после себя даёт => Результат

// let test = "Hello world" // что бы использовать его в методах нужно взять переменную r.replace() 

// let r = test.method-name()

// let r = test.replace("w", "*") // меняет только 1 маленькую букву w - - - а что бы взять все нужен метод replaceALL 
// console.log(r)

// У каждого метода и у каждой функции есть свои подсказки => наводим на функцию и там имеется подсказка

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// RegExp - /e/ 
// g - global - Берет все буквы
// i - insensitive - 
// let q = test.replace(/e/g, "*")
// console.log(q)

// let w = test.replace(/e/gi, "*")
// console.log(w)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// LENGTH - считает буквы включая пробелы
// Method - .length 

// let text = "Hello world"
// console.log(text.length)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// INDEX => считает с 0 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// SLICE
// Method - .slice()
// let e = "Hello world"
// let result = e.slice(2) // c (2 включительно) 2 index`а до конца => llo world
// console.log()

// let e = "Hello world"
// let result = e.slice(2,8) // от 2 индекса до 8(конец не включительно)
// console.log()

// НАЙТИ СЕРЕДИНУ
// let t = "Hello world"
// const MIDDLE = parseInt(t.length / 2) // Удаляет дробную часть ( 5.5 - даёт 5) или меняет тип данных string в number

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let test = "Hello world"
// .toUpperCase()
// .toLowerCase()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// concat() => объединяет 2 переменных в одну строку

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// .trim() - убирает пробелы в начале и в конце лишние пробелы
// let test = "  Hello    world   "
// console.log(test.trim())

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// SPLIT => .split() -> разделяет текст на множество частей
// Берет наш текст и разбивает на части

// let test = "Hello world"
// let r = test.split(" ") // Разбил на 2 части Hello world
// let r = test.split("") // Разбил каждую букву на части H e l l o w o r l d
// let r = test.split("o") // Разбил на 3 части Hell, (o) w, (o) rld 
// console.log(r)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// .padStart() - ожидает какое то количество в тексте - если не хватит количества добавит что то
// .padEnd()
// let test = "Hello World"
// let y = test.padStart(20, "*") // если не хватит букв до 20 он добавит не хватающие буквы слева
/// let r = test.padEnd(20, "*") // если не хватит букв до 20 он добавит не хватающие буквы справа
// console.log(y)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// .charAt() - даёт символ по указанному индексу

// let test = "Hello world"
// console.log(test.charAt(8))
// console.log(test.charAt(3))
// console.log(test.charAt[8])

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// indexOf("o") / 7 - не может брать RegEXP 
// lastIndexOf("o") / находит индекс с конца
// let test = "Hello world"
// console.log(test.indexOf("w")) // 6 => находит индекс по указанному символу

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let t = "Hello world"
// let re = t.search("o") - может принять RegEXP - g(не обращает внимание маленькая буква или нет) - i()
// search("o") / может найти только ПЕРВОЕ ВЫРАЖЕНИЕ КОТОРОЕ НАЙДЕТ

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// MATCH 
// let t = "Hello world"
// console.log(t.match/o/gi)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// INCLUDES - искал общее есть ли та или иная буква => RegEXP - не берёт - либо большая - либо маленькая
// let test = "Hello world"
// console.log(test.includes("o")) // true
// console.log(test.includes("t")) // false

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// startWith() => проверяет начинается ли буква с ... 
// endsWith() => проверяет заканчивается ли буква с ... 

// let test = "Hello world"
// console.log(test.startsWith("d")) // false
// console.log(test.endsWith("d")) // true

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// repeat() - repeat - повторяет строку определенное кол-во раз

// let test = "Hello world"
// console.log(repeat(3))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// JOIN - join() - объединяет массивы в строку

// let test = "   Hello    world    "
// let x = test.trim()
// let a =  x.split(" ")
// console.log(a[0] + " " + a[a.length-1])

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 

// let x = "This is text"
// let r = x.length % 2 == 0
// console.log(r)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

