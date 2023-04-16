let python_btn = document.getElementById('python_btn');
let oops_btn = document.getElementById('oops_btn');
let cpp_btn = document.getElementById('cpp_btn');
let dbms_btn = document.getElementById('dbms_btn');
let dsa_btn = document.getElementById('dsa_btn');
let osa_btn = document.getElementById('osa_btn');
let java_btn = document.getElementById('java_btn');
python_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'python'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
oops_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'oops'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
cpp_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'c++'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
dbms_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'dbms'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
dsa_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'dsa'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
osa_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'osa'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})
java_btn.addEventListener('click',()=>{
    var d = new Date();
    let email = 'java'
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'email' + "=" + email+ ";" + expires + ";path=/";
    location.href='../login/quiz.html'
})