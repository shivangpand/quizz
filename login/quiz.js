let quizBackBtn = document.getElementById('quizBackBtn');
quizBackBtn.onclick = ()=>{location.href = '../welcome/welcome.html'}
async function getAllData() { 
  const url = 'http://localhost/quizz/config/index.php';
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
  console.log('data', data); 
  return data;
}
