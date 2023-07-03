const apiUrl = "http://127.0.0.1:8000/receive-data/";

function sendData() {
  const data = {
    key1: "value1",
    key2: "value2",
  };

  const authToken = "d7110028a6e7b225e4b9ebe31bdd091c"; // Replace with the actual token

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${authToken}`,
    },
    body: JSON.stringify(data),
  })
  
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

sendData();
