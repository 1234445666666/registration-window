//проверка логинов и паролей
const userCheckpassword = document.getElementById('checkPassword');
const userCheckLogin = document.getElementById('checkLogin');
const button = document.getElementById('btn__check');
const userOpenPassword = document.getElementById('enterPassword');
const userOpenLogin = document.getElementById('enterLogin');

button.addEventListener('click', () => {
    if (userOpenPassword.value === userCheckpassword.value && userOpenLogin.value === userCheckLogin.value) {
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
        document.querySelector('.users__base').style.display = 'none';
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
    document.querySelector('.users__base').style.display = 'none';
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

//показ пользователей и их пароли 
const userBase = document.querySelector('#users__base');
const usersList = document.querySelector('#users__list');
const userLogin = document.createElement('p');
const userPassword = document.createElement('p');
const btnUsers = document.querySelector('#btnUsers');

btnUsers.addEventListener('click', () => {
    if (userOpenPassword.value === userCheckpassword.value && userOpenLogin.value === userCheckLogin.value) {
        document.querySelector('.registration').style.display = 'none';
        document.querySelector('.password').style.display = 'none';
        document.querySelector('.users__base').style.display = 'flex';
        userLogin.textContent = 'Логин: ' + userOpenLogin.value + ' Пароль: ' + userOpenPassword.value;
    usersList.append(userLogin, userPassword);
    }
    else {
        alert('Чтобы посмотреть введите ваш логин и пароль');
    }
})

//вернуться назад к проверке данных пользователя

const btnBack2 = document.querySelector('#btnBack2');

btnBack2.addEventListener('click', () => {
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.password').style.display = 'flex';
    document.querySelector('.users__base').style.display = 'none';
})






