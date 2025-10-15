alert("HELLO!");
/*1. Создайте обработчик события полной загрузки страницы и добавляйте новый код только в эту функцию. 
Внимание, в этом случае невозможно будет использовать подход с указанием функции в атрибуте html. То есть в JS коде вам надо находить элементы, и для них создавать функции-обработчики нужных событий.
2. В поле "Full Name" запретите вводить цифры.
3. В поле "Your username" запретите вводить точки и запятые.
4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”. */
window.onload = function (){
    let fullName = document.getElementById('fullname-input');
    let username = document.getElementById('username-input');
    let checkbox = document.getElementById('check-input');

    fullName.addEventListener('keydown', function(event) {
            if (event.key >= '0' && event.key <= '9') {
                event.preventDefault(); 
            }
    });
    
    username.addEventListener('keydown', function(event) {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault(); 
            }
    });
    
    checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                console.log('Согласен');
            } else {
                console.log('не согласен');
            }
    });

/*5. При нажатии на кнопку “Sign Up”:
• Проверьте на существование значения в каждом текстовом поле. Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert. Сообщение должно быть следующего вида: "Заполните поле E-mail".
• Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.
• Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
• Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
• Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается и пользователя перебрасывает на страницу логина (см. п.6). 
Модального окна в макете нет, его нужно создать самостоятельно, соблюдая общую стилистику макета. */
    let eMail = document.getElementById('mail-input');
    let password = document.getElementById('password-input');
    let passwordSecond = document.getElementById('repeat-password-input');

document.getElementById('create-registration').onclick = function(event){
    event.preventDefault();
    if (!fullName.value){
        alert('Заполните имя');
        return;
    }
    if (!username.value){
        alert('Заполните имя пользователя');
        return;
    }
    if (!eMail.value){
        alert('Заполните почту ');
        return;
    }
    if (!password.value){
        alert('Заполните пароль');
        return;
    }
    if (password.value.length < 8) {
        alert('Пароль должен быть не меньше 8 символов');
        return;
    }
    if (!passwordSecond.value){
        alert('Повторите пароль');
        return;
    }
    if (password.value !== passwordSecond.value ){
        alert('Пароли не совпадают! ');
        return;
    }
    if (!checkbox.checked) {
        alert('Согласитесь с правилами');
        return;
    }
    document.getElementById("popup").style.display = "flex"; 
    document.getElementById('agree-reg-btn').onclick = function(){
        document.getElementById("popup").style.display = "none"; 
        document.getElementById("regForm").reset();
        change_form(); 
    }

}       

let textTitle = document.getElementsByClassName('title-form')[0];

function change_form(){
    textTitle.innerHTML = "Log in to the system";
    fullName.style.display = 'none';
    document.getElementById('block-fullname-input').style.display = 'none';
    document.getElementById('block-mail-input').style.display = 'none';
    document.getElementById('block-repeat-password').style.display = 'none';
    document.getElementById('block-agree-form').style.display = 'none';

    document.getElementById('q-form-id').style.display = 'none';
    document.getElementById('create-registration').innerHTML = "Sign In";
    document.getElementById('create-registration').onclick = function(){
        sign_func();
    }
}
function sign_func(){
    if (!username.value){
        alert('Заполните имя пользователя');
        return;
    }
    if (!password.value){
        alert('Заполните пароль');
        return;
    }
    if (password.value.length < 8) {
        alert('Пароль должен быть не меньше 8 символов');
        return;
    }
    alert('Добро пожаловать,' + username.value);
    document.getElementById("regForm").reset();
}
document.getElementById('q-form-id').addEventListener('click', function() {
    change_form(); 
    document.getElementById('create-registration').onclick = function(){
        sign_func();
    }
});

}

alert("HELLO!");
console.log("Сообщение тест");