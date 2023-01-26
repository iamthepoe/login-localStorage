let password = document.getElementById('password');
let username = document.getElementById('username')

password.addEventListener('focus',()=>{
    password.style.borderColor = "#0079f2";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#757575"
});
username.addEventListener('focus',()=>{
    username.style.borderColor = "#0079f2";
});
username.addEventListener('blur',()=>{
    username.style.borderColor = "#757575"
});