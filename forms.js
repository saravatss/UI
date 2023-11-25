const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]'); // querySelector как css, можно найти по чему угодно
    const surname = document.querySelector('[name="surname"]'); 
    
    
    const formData = {
        name: name.value,
        surname: surname.value,
    }; // функция позволяет нам собирать данные форм

    if (!form.checkValidity()) {    
        name.setCustomValidity('chfvivf');
        name.reportValidity();
    }


    if (form.checkValidity()) {
        fetch('https://dummyjson.com/products/add', {
            method: 'post',
            headers: {
                'Content-type': 'application/json' //обрабатывай именно вот таким способом
            },
            body: JSON.stringify(formData)
            });
    } 

}); 

// работает всё кроме отрпавки, event -- выводит то что щас произошло

// entries -- возвращает все значения с formData, но они не отображаются в консоли
// он псевдомассив

//array.from -- создаёт из псевдомассивов нормальный массив
//map не подойдёт, тк не может создать новый массив на основе штмл элементов

//есть два типа массивов: один норм, на них можно использовать методы
// а второй это псевдомассив, возвращает штмл элементы, его можно только перебрать


/*
    Array.form(formData.entries()).forEach(function (pair) {

    });
*/



// json -- формат данных, джаваскриптовый ОБЪЕКТ, формат json всегда пишутся в двойных кавычках
//отправили объект, но он превратиться в строку тк это инпуты ! и форма^ на сервер уходит строка






/* 
    const formData = new FormData(); // функция позволяет нам собирать данные форм

    formData.append('name', name.value);
    formData.append('surname', surname.value);
    
    fetch('https://dummyjson.com/products/add', {
    method: 'post',
    body: formData
    });
}); 
*/