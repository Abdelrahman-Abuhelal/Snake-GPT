const apiUrl = "http://127.0.0.1:8000/receive-data/";
const authToken = "d7110028a6e7b225e4b9ebe31bdd091c"; 
export function sendDataToAPI(received_content) {

  const ourData = {
    content: received_content ,
    key2: "value2",
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,

    },
    body: JSON.stringify({ourData}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  }

  sendDataToAPI();