// Создайте функцию, которая принимает два параметра 
// 1. строку
// 2. число
// Затем удалите символ из этого текста по интексу числа

function func(str, num) {
    let left = str.slice(0, num)
    let right = str.slice(num+1)
    console.log(left + right)
    }
    func("Hello", 0)
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    // Создайте функцию, которая принимает массив в качестве параметра и суммирует все числа или длину строк в массиве
    // ex: [1, 2, 'hello', '3'] => 11
    
    function sumArray(array) {
        let sum = 0
        array.forEach(val => {
            if (!isNaN(val)) {
                sum += parseInt(val)
            } else if (typeof val == "string") {
                sum += val.length
            }
        })
        return sum
    }
    console.log(sumArray([1, 2, 'hello', '3']))
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    // в функции 3 параметра, нужно найти самое большое число
    
    function fun(arg1, arg2, arg3) {
    
    
    let colledec = [arg1, arg2,arg3]
        let re = colledec.reduce((acc, next) => {
            if (acc > next) {
                return acc
            } else {
                return next
            } 
        })
        console.log('самое большое число', re)
    }
    fun(1,5,10)
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    let text0 = "This is 2024-year and 4th month and 25th day"
    
    let evens = []
    let odds = []
    
    text0.split("").forEach(l => {
        if (!isNaN(l) && l != " ") {
            if (parseInt(l) % 2 == 0) {
                evens.push(parseInt(l))
            } else {
                odds.push(parseInt(l))
            }
        }
    })
    console.log(`Чётные ${evens} \n Нечетные ${odds}`)
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    // function largStr(text) {
    //     let spl = text.split(' ')
    
    //     return spl.reduce((acc, next) => {
    //         if (next.length > acc.length) {
    //             return next
    //         } else {
    //             return acc
    //         }
    //     })
    // }
    
    // console.log(largStr("This is 2024-year and 4th month and 25th day"))
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    // evens and odds with reduce (acc, next) 

    function lastFunc(text) {
        let { evens, odds } = text.split("").reduce((acc, next) => {
            if (!isNaN(next) && next !== " ") {
                if (parseInt(next) % 2 === 0) {
                    acc.evens.push(parseInt(next))
                } else {
                    acc.odds.push(parseInt(next))
                }
            }
            return acc
        }, { evens: [], odds: [] })
    
        console.log(`Чётные в reduce - ${evens}\nНечетные в reduce - ${odds}`)
        return []
    }
    
    lastFunc("This is 2024-year and 4th month and 25th day")