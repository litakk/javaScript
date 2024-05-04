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

const button = document.querySelectorAll('button')

function handleClick(event) {
    console.log('Button clicked')
    event.target.style.backgroundColor = 'black' 
    event.target.style.color = 'red'
}
button.forEach(() => {

})
button.onClick = handleClick
