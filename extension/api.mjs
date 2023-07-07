const authToken = "d7110028a6e7b225e4b9ebe31bdd091c"; 
export function sendContentToApi(content_id,received_content) {
  const contentData = {
    content_id:content_id,
    content_data: received_content
  }

  fetch("http://localhost:3000/content", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      

    },
    body: JSON.stringify(contentData),
  })
    .then(response => response.json()) 
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  }

  export function sendPromptToApi(content_id,received_prompt) {
    const promptData = {
        prompt_data: received_prompt,
        content_id : content_id 
    }
    fetch("http://127.0.0.1:8000/receive-data/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${authToken}`,
      },
      body: JSON.stringify(promptData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  
    }

sendContentToApi();