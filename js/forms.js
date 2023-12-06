const minus = document.getElementById('dec');
const plus = document.getElementById('inc');

const counter = document.querySelector('[name="number"]');

minus.addEventListener('click', function() {
    counter.value-- // сокращение =+ то есть минус один
})

plus.addEventListener('click', function() {
    counter.value++
})






// const form = document.getElementById('form');

// const past = document.querySelector('[name="pass"]')

// form.addEventListener('submit', function (event) {
    // event.preventDefault();

    



    // отправлять через инпут можно только через FormData

    // const radio = document.querySelectorAll('[name="radio"]');

    // const radioValue = Array.from(radio)
    // .find(function(input) {
    //     return input.checked
    // })?.value; // ? помогает проверить есть ли элемент в штмл


    //const checkbox = document.querySelectorAll('[name="checkbox"]'); 
    //получили превдомассив, он возвращает нас нод лист

    // const checkboxesValues = Array.from(checkbox)
    //     .filter(function(input) {
    //         return input.checked;
    //     })
        
    //     .map(function(input) {
    //         return input.value; // если выполняется checktd, то дай сюда значения
    //     })
    
    
    // const formData = {
    //     checkbox: checkboxesValues
    // }; // функция позволяет нам собирать данные форм

    // const formData = new FormData(form);

    // console.log(Object.fromEntries);


    // if (!form.checkValidity()) {    
    //     name.setCustomValidity('chfvivf');
    //     name.reportValidity();
    // }


    // if (form.checkValidity()) {
    //     fetch('https://dummyjson.com/products/add', {
    //         method: 'post',
    //         headers: {
    //             'Content-type': 'application/json' //обрабатывай именно вот таким способом
    //         },
    //         body: JSON.stringify(formData)
    //         });
    // } 

// }); 

// джейсон может отправлять только 5 видов значений: число, строка, булево значение, массив, объект