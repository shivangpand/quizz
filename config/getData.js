
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
  console.log('d', data);
  console.log('baclk');
  // return data;
  // fetch('http://localhost/quizz/config/index.php',{
  //   headers : headers
  // }) 
  // .then(response => console.log(response))
  // .then(data => {
  //   // Use the retrieved data in your JavaScript code
  //   console.log(data);
  //   // return data
  // });
}
getAllData();
// module.exports = data;