
const myForm = document.getElementById('myForm');
const error = document.querySelectorAll('.messError');
const messageError = document.querySelector('form span');

myForm.addEventListener('submit', function(event){


    if(!myForm[0].validity.valid)
    {
        myForm[0].style.border = 'red 1px solid';
        myForm[0].placeholder = 'email@example.com';
        myForm[0].style.color = 'hsla(0, 0%, 59%, 1)';

        if(myForm[0].value === '')
        {
            messageError.innerText = 'Whoops! It looks like you forgot to add your email';
        }
        else
        {
            messageError.innerText = 'Please provide a valid email address';
        }

    }

    else
    {
        myForm[0].style.border = '1px solid hsla(223, 87%, 63%, 0.4)';
        myForm[0].value === '';
        messageError.innerText = '';
    }

    event.preventDefault();

});





