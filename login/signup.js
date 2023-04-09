const  form = document.getElementById("form");
form.addEventListener('submit',formSubmit);

function formSubmit(event)
{
    event.preventDefault()
    const  email = document.getElementById("email");
    const  username = document.getElementById("username");
    const  password = document.getElementById("password");
    const  confirm_password = document.getElementById("confirm_password");
    console.log(email.value,username.value,password.value,confirm_password.value);
    
    let isConfirmed = confirmPassword(password.value,confirm_password.value);
   
    if(!isConfirmed)
    {
        alert('please enter correct password');
        return;
    }
    let user = {
        email:email.value,
        username:username.value,
        password:password.value,
        confirm_password:confirm_password.value,
    }
    let userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
    window.location.href = "login.html";

}
function confirmPassword(pass,cPass)

{
    return pass == cPass;

}

