let welcome = confirm("Приветствуем Вас, хотите выбрать что-то из меню?")
const warn = alert("Отлично, тогда следующим шагом будет заполнение личных данных для доставки!")

const infoFullName = prompt("Ваше Ф.И?")
const infoNumber = prompt("А так же номер телефона для связи Курьера с Вами")

let nameClient = confirm(`И так, ${infoFullName}, Здравствуйте! Теперь Вам будет представлено Наше меню!`)

let menu = prompt(`
Выберите Блюдо указав нумерацию:
1. Гамбургер 
2. Классический бургер
3. Чизбургер
4. Черный бургер
5. Чикенбургер
6. Фишбургер
`)
if (menu == "1" || menu.includes("Гамбургер")) {
    let result1 = confirm(`Ваш заказ 'Гамбургер' принят, ожидайте!`)
    if (result1) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

else if (menu == "2" || menu.includes("Классический бургер")) {
    let result2 = confirm(`Ваш заказ 'Классический бургер' принят, ожидайте!`)
    if (result2) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

else if (menu == "3" || menu.includes("Чизбургер")) {
    let result2 = confirm(`Ваш заказ 'Чизбургер' принят, ожидайте!`)
    if (result2) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

else if (menu == "4" || menu.includes("Черный бургер")) {
    let result2 = confirm(`Ваш заказ 'Черный бургер' принят, ожидайте!`)
    if (result2) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

else if (menu == "5" || menu.includes("Чикенбургер")) {
    let result2 = confirm(`Ваш заказ 'Чикенбургер' принят, ожидайте!`)
    if (result2) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

else if (menu == "6" || menu.includes("Фишбургер")) {
    let result2 = confirm(`Ваш заказ 'Фишбургер' принят, ожидайте!`)
    if (result2) {alert(`
Ваш заказ будет доставлен в течении 20 минут.  
Курьер позвонит на номер ${infoNumber} для связи с Вами!
Приятного аппетита и хорошего настроения!
`)}}

let end = alert("Спасибо что заказали именно у Нас!")