
function getAllData(){
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost/quizz/config/index.php');
  headers.append('Access-Control-Allow-Credentials', 'true');
  fetch('http://localhost/quizz/config/index.php',{
    headers : headers
  })
  .then(response => console.log(response))
  .then(data => {
    // Use the retrieved data in your JavaScript code
    console.log(data);
    // return data
  });
}
getAllData();
// module.exports = data;