// api.js

function sendDataToAPI(content) {
    fetch('https://your-django-api.com/api/your-endpoint/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }
  