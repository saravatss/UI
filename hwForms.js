const form = document.getElementById('form');
const buttonSend = document.getElementById('send');

buttonSend.addEventListener('click', function() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // const name = document.querySelector('[name="name"]');
        // const age = document.querySelectorAll('[name="age"]');
        // const gender = document.querySelectorAll('[name="radio"]');
        // const work = document.querySelector('[name="checkbox"]');
        // const email = document.querySelector('[name="email"]');
        // const password = document.querySelector('[name="password"]');
        // const text = document.getElementById('text');

    // получили объект со значениями


    // пустое нечто -- хз что это
        // const formData = new FormData(form)
        // const name = formData.get('name'); 
        // const age = formData.get('age');


    // в этом случае получаем пустой массив
        // const arrayValues = Array.from(formData); 

        /*
        const arrayValues = Array.from(formData)
        .filter(function(input) {
            return this.value != ''
        })
        .map(function(input) {
            return {
                name: name.value,
                age: name.value
            }
        })
        console.log(JSON.stringify(arrayValues))

        */
        
        // const data = JSON.stringify(formData);
        // const parsedData = JSON.parse(data);

        // text.innerHTML = parsedData.name;

        // const data = JSON.stringify(array)
        // const parsedData = JSON.parse(data);
        // console.log(parsedData.name);
    });
});


 //const checkbox = document.querySelectorAll('[name="checkbox"]'); 
    //     .filter(function(input) {
    //         return input.checked;
    //     })

    //     .map(function(input) {
    //         return input.value; // если выполняется checktd, то дай сюда значения
// });

// const data = Json.parse(тут будет массив-джейсон строка)