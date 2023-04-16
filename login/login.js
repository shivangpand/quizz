

async function getAllData() {
    const url = 'http://localhost/quizz/login/login.php';
    const options = {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      },
      withCredentials: true // set the withCredentials option to true
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('res', data); 
    return data;
  } 

const  form = document.getElementById("form"); 
form.addEventListener('submit',formSubmit);
async function formSubmit(event)
{
    event.preventDefault();
    const  username = document.getElementById("username").value;
    const  password = document.getElementById("password").value;
    console.log(username,password);
    let allUsers = await   getAllData(); 
    let isUsername = false
    allUsers.forEach((user,idx) => { 
        if(username == user.name && password == user.password){
           isUsername = true;
        }
    });
   
    if(!isUsername)
    {
        alert('please enter correct username & password');
        return;
    }else{
        alert('Login Sucessful');
    }
    let user = {
        username:username,
        password:password,
    }
    let userString = JSON.stringify(user); 
    localStorage.setItem('user', userString);
    window.location.href = "../welcome/welcome.html";
}

async function consoleData(){
    
    let data = await getAllData();

    console.log('data',data);
}
// consoleData();

















