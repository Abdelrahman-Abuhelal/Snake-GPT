import { sendContentToApi } from "./api.mjs";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var activeTab;
  if (request.action === "get_content") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      activeTab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: ["contentScript.js"],
        },
        function (result) {
          var content = result[0].result;
          generateOrRetrieveUniqueId(content, function(contentId) {
            sendResponse({ contentData: content, contentId: contentId });
            sendContentToApi(contentId, content);
          });
        }
      );
    });
  }
  return true;
});

function generateOrRetrieveUniqueId(content, callback) {
  chrome.storage.local.get(content, function (data) {
    var storedContent = data[content]; // Check if content already has an ID stored
    if (storedContent) {
      callback(storedContent); // Return the existing ID
    } else {
      var contentId = generate_uuidv4(); // Generate a new ID
      var newData = {};
      newData[content] = contentId;
      chrome.storage.local.set(newData, function () {
        callback(contentId); // Store the ID and return it
      });
    }
  });
}



function generate_uuidv4() {
  return Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
}