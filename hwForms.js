const form = document.getElementById('form');
const buttonSend = document.getElementById('send');

buttonSend.addEventListener('click', function() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('[name="name"]');
        const age = document.querySelector('[name="age"]');
        const email = document.querySelector('[name="email"]');
        const password = document.querySelector('[name="password"]');
        const text = document.getElementById('text');

        const work = Array.from(document.querySelectorAll('[name="checkbox"]'))
          .filter(function(input) {
            return input.checked;
          })
          .map(function(input) {
            return input.value;
        });

        const gender = Array.from(document.querySelectorAll('[name="radio"]'))
        .filter(function(input) {
            return input.checked;
        })
        .map(function(input) {
            return input.value;
        });

        console.log(work)
        console.log(gender)
    // получили объект со значениями

        const formData = {
            name: name.value,
            age: age.value,
            gender: gender[0],
            work: work[0],
            email: email.value,
            password: password.value
        };

    // переделали в массив
        const arrayValues = Object.entries(formData);
        let string = JSON.stringify(arrayValues);
        
        text.innerText = string;

    });
});




        // пустое нечто -- хз что это
        // const formData = new FormData(form)
        // const name = formData.get('name'); 
        // const age = formData.get('age');

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




// const data = Json.parse(тут будет массив-джейсон строка)