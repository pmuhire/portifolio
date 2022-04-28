const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const fullName = document.getElementById('full-names');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateSignUpForm();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateSignUpForm = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const fullNameValue = fullName.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (fullNameValue === '') {
        setError(fullName, 'Full names required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Provide a password of atleast 8 characters');
    } else {
        setSuccess(password);
    }

};
const validateLoginForm = () => {

}

fetch("https://my-brand-backend-app.herokuapp.com/api/users")
    .then((res) => {
        res.json()
            .then((users) => { console.log(users) })
    })
    .catch(err => console.log(err))

let _data = {
    email: "pmuhire22@gmail.com",
    fullNames: "Muhire Patrick",
    password: "helloThere",
    userName: "pmuhire455"
}

fetch('https://my-brand-backend-app.herokuapp.com/api/user', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

function loginApi(email, password) {
    let data = {
        email: email,
        password: password,
    }
    fetch('https://my-brand-backend-app.herokuapp.com/api/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

}
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
loginApi(emailValue,passwordValue)