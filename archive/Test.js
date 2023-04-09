let clickBtn = document.getElementById('click');
clickBtn.addEventListener('click',handleClick);

function handleClick(event){
console.log(event,'eve');
window.location.href = '2.php';
}