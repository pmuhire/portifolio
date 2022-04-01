const email=document.getElementById('email');
const password=document.getElementById('password');
function validate(){
    if(password.value===''){
       password.focus();
       return false;
    }
    if(email.value===''){
        email.focus();
        return false;
    }
}
function store(){
    let email=document.getElementById('email');
    localStorage.setItem("email",email.value);
}