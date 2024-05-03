// Цикл WHILE

// Синтаксис 
// while (Условие) {
// Тело цикла
// Тут будет выполняться код
// }

// Пример
let num = 0
while (num <= 5) { // итерация остановиться когда выдаст false
     // тело цикла будет выполняться только тогда когда даёт true
    console.log(num)
    num++ // use increment
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Цикл FOR

// Синтаксис
for(Начало; Условие; Шаг) {
    // Тело цикла
    // Тут будет выполняться код
}

// Пример
for (let num = 0; num < 5; num++) {
    console.log(num)
}

/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
   тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/

