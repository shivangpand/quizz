// // getdata from localstorage
// let user = JSON.parse(localStorage.getItem('keyname'));
// //username password
// 2 function
// redirect
const  form = document.getElementById("form");
let getAllData = require('../config/getData');
form.addEventListener('submit',formSubmit);
function formSubmit(event)
{
    event.preventDefault()
    const  username = document.getElementById("username");
    const  password = document.getElementById("password");
    console.log(username.value,password.value,);
    
    let isUsername = username(username.value);
   
    if(!isusername)
    {
        alert('please enter correct username');
        return;
    }
    let user = {
        username:username.value,
        password:password.value,
    }
    // let userString = JSON.stringify(user);
    let user2 = JSON.parse(localStorage.getItem('user'))
    localStorage.setItem('user', userString);
    window.location.href = "login.html";
}

async function consoleData(){
    
    let data = await getAllData();

    console.log('data',data);
}
consoleData();

















