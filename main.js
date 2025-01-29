//проверка логинов и паролей
const userCheckpassword = document.getElementById('checkPassword');
const button = document.getElementById('btn__check');
const userOpenPassword = document.getElementById('enterPassword');
const userOpenLogin = document.getElementById('enterLogin');

button.addEventListener('click', () => {
    if (userOpenPassword.value === userCheckpassword.value && userOpenLogin.value === userCheckpassword.value) {
        alert('Правильный логин и пароль')
    }
    else {
        alert('Неправильный логин или пароль')
    }

})

//скрытие поля регистации
const btnRegistration = document.querySelector('.registration__btn');
btnRegistration.addEventListener('click', () => {
    if (userOpenLogin.value !== '' && userOpenPassword.value !== '') {
        document.querySelector('.registration').style.display = 'none';
        document.querySelector('.password').style.display = 'flex';
    }
    else {
        alert('Введите логин и пароль')
    }
    
});
    
    
    
//вернуться назад 
const btnBack = document.querySelector('#btnBack');
btnBack.addEventListener('click', () => {
    document.querySelector('.registration').style.display = 'flex';
    document.querySelector('.password').style.display = 'none';
})


//показа пароля
const passwordOpenUser = document.querySelector('.password__control');

passwordOpenUser.addEventListener('click', () => {
    if (userCheckpassword.type === 'password') {
        userCheckpassword.type = 'text';
        passwordOpenUser.textContent = 'скрыть пароль';
    } else {
        userCheckpassword.type = 'password';
        passwordOpenUser.textContent = 'показать пароль';
    }
})




