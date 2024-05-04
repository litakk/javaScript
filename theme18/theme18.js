// document // обращение к полностью html файлу
// из нутри document файла нужно найти BUTTON

// document.querySelector() // МЕТОД который имеет параметр - передаём то, что хотим искать.
// находя его он даст с ним делать что либо

// document.querySelector('button')
// нашли, теперь нужно сохранить в переменную.
// const button = document.querySelector('button')

// когда на сайте что то происходит (нажатие, скролл) - event - для JS это СОБЫТИЕ

// теперь нужно подключить в кнопке функцию.
// const button = document.querySelector('button')

// function handleClick(event) {
//     console.log('Button clicked')
//     event.target.style.backgroundColor = 'black' // .target показывает какая именна кнопка была использована
//     event.target.style.color = 'red'
// }
// button.onclick = handleClick // говорим когда кто то кликнет по кнопке мы присоединяем событие

// EVENT - СОБЫТИЕ => чать от документа.


// хотим взять все BUTTON - в качестве массива - лист - ARRAY

// const button = document.querySelectorAll('button')

// function handleClick(event) {
//     console.log('Button clicked')
//     event.target.style.backgroundColor = 'black' 
//     event.target.style.color = 'red'
// }
// button.forEach((button) => {
//     button.onClick = handleClick
// })

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

//  THEME SWITCHER

// ШАГ 1: НАХОЖДЕНИЕ ЭЛЕМЕНТОВ
// ШАГ 2: ПОДКЛЮЧАЕМ ЭЛЕМЕНТЫ К ONCLICK ( СОБЫТИЯ )
// ШАГ 3: ПОДКЛЮЧАЕМ ФУНКЦИОНАЛЬНОСТЬ К ЭТИМ СОБЫТИЯМ.

// ШАГ 1:
const topDiv = document.querySelector('.topDiv')
const main = document.querySelector('main')
const light = document.querySelector('.light')
const violet = document.querySelector('.violet')
const indigo = document.querySelector('.indigo')
const gray = document.querySelector('.gray')

const left = document.querySelector('left')
const right = document.querySelector('right')
// ШАГ 2:
light.onclick = lightTheme
violet.onclick = violetTheme
indigo.onclick = indigoTheme
gray.onclick = grayTheme

// ШАГ 3:
function changeColors(c1, c2, c3, c4) {
    topDiv.style.backgroundColor = c1
    topDiv.style.color = c2
    main.style.backgroundColor = c3
    main.style.color = c4
}

function lightTheme(e) { changeColors('white', 'black', '#eee', 'black') }
function violetTheme(e) { changeColors('darkcyan', 'snow', 'lightcyan', 'black') }
function indigoTheme(e) { changeColors('indigo', 'snow', 'lightsteelblue', 'black') }
function grayTheme(e) { changeColors('gray', 'snow', 'lightgray', 'black') }
