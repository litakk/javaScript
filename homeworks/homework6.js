// 1. Напишите функцию JavaScript, чтобы проверить, является ли «вход» строкой или нет.
// Тестовые данные:
// console.log(is_string('w3resource'));
// истинный
// console.log(is_string([1, 2, 4, 0]));
// ЛОЖЬ

// не смог

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 2. Напишите функцию JavaScript, чтобы проверять, является ли строка пустой или нет.

let text2 = "text2"
let a = ""
if (a.length == 0) { console.log(`Пустая строка`)}
else {console.log("Текст не пустой")}

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 3. Напишите функцию JavaScript для разделения строки и преобразования ее в массив слов.

let text3 = "Robin Singh"
let splitText2 = text3.split(" ")
console.log(splitText2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 4. Напишите функцию JavaScript для извлечения заданного количества символов из строки.
// Тестовые данные:
// console.log(truncate_string("Робин Сингх",4));
// "Роби"

let text4 = "Робин Сингх"
let indx = 8
let res = text4.slice(0, indx)
console.log(res)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 5. Напишите функцию JavaScript для преобразования строки в сокращенную форму.
// Тестовые данные:
// console.log(abbrev_name("Робин Сингх"));
// «Робин С.»

// не смог :) 

// let text5 = "Робин Сингх"
// let leftText5 = text5.indexOf(" ") 
// let res2 = text5.slice(0, leftText5)
// let middleText5 = 
// console.log(res2)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 6. Напишите функцию JavaScript, которая скрывает адреса электронной почты для предотвращения несанкционированного доступа.
// Тестовые данные:
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// не смог :)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 7. Напишите функцию JavaScript для параметризации строки.
// Тестовые данные:
// console.log(string_parameterize("Робин Сингх из США."));7. Напишите функцию JavaScript для параметризации строки.
// Тестовые данные:
// console.log(string_parameterize("Робин Сингх из США."));
// маленькие буквы, - между каждым пробелом

let text7 = "Robin Singh from USA."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
let result = text7.replace(/ /g, "-").toLowerCase()
console.log(result)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 8. Напишите функцию JavaScript, которая будет делать первую букву строки заглавной.
// Тестовые данные:
// console.log(capitalize('js string exercises'));
// "Js string exercises"

let text8 = "js string exercises"
let firstWord = text8[0].toUpperCase()
console.log(firstWord + text8.slice(1))

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 9. Напишите функцию JavaScript, которая будет использовать заглавную букву каждого слова в строке.
// Тестовые данные::
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

let text9 = "js string exercises"
let uppCase = text9.slice(0,1).toUpperCase()  + text9[1] + " " + text9[3].toUpperCase() + text9.slice(4,10) + text9[10].toUpperCase() + text9.slice(11)
console.log(uppCase)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 10. Напишите функцию JavaScript, которая принимает в качестве параметра строку, состоящую как из строчных, так и из прописных букв. Он преобразует прописные буквы в строчные, а строчные — в прописные.
// Тестовые данные:
// console.log(swapcase('AaBbc'));
// "aAbBC"

// не смог :)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 11. Напишите функцию JavaScript для преобразования строки в верблюжий регистр.
// Тестовые данные:
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"

// не смог :)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 12. Напишите функцию JavaScript для декоммелизации строки.
// Тестовые данные:
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

let text12 = "hello-World"
let ress = text12.replace(/-/, "_")
console.log(ress)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 13. Напишите функцию JavaScript для объединения заданной строки n раз (по умолчанию — 1).
// Тестовые данные:
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

let text13 = "Ha!"
let indx2 = 3
let rep = text13.repeat(indx2)
console.log(rep)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 14. Напишите функцию JavaScript для вставки строки в строку в определенную позицию (по умолчанию — 1).
// Тестовые данные:
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

let text14 = "We are doing some exercises."
let upd = "JavaScript"
let indx3 = 6

let resul = text14.slice(0,indx3) + " " + upd + " " + text14.slice(indx3)
console.log(resul)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 15. Напишите функцию JavaScript, которая форматирует число в удобочитаемую строку с правильным суффиксом, например 1-й, 2-й, 3-й и т. д.
// Тестовые данные:
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

// не смог :)

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 16. Напишите функцию JavaScript для усечения строки, если она длиннее указанного количества символов.
//  Усеченные строки заканчиваются переводимой последовательностью многоточия («...») (по умолчанию)
//  или указанными символами.
// Тестовые данные:
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

let text16 = "We are doing!!."
console.log(text16.replace(/!/g, ""))

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 17. Напишите функцию JavaScript для разделения строки на куски заданной длины.
// Тестовые данные:
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// не проходили RegEXP полностью 

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 18. Напишите функцию JavaScript для подсчета подстрок в строке.
// Тестовые данные:
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

// не проходили RegEXP полностью 

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 19. Напишите функцию JavaScript, которая принимает положительное целое число и инвертирует его двоичное представление. Наконец, верните десятичную версию двоичной строки.
// Тестовые данные:
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945

// не проходили RegEXP полностью 

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 20. Напишите функцию JavaScript, которая может дополнять (влево и вправо) строку до определенной длины.
// Тестовые данные:

// let text20 = 20.142
// let ind = 1
// let r = text20.toPrecision(ind)
// console.log(r)

// RESULT = 10 СМОГ ====== 10 НЕ СМОГ - половину из заданий не проходили

