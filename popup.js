// Send a message to the background script to retrieve the content
chrome.runtime.sendMessage({ action: "get_content" }, function(response) {
    if (response && response.content) {
      document.getElementById("content").innerHTML = response.content;
    }
  });
  