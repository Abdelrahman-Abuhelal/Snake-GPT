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
          var contentId =generate_uuidv4(); // Generate a unique id for the content
          sendResponse({ contentData:content, contentId: contentId });
          sendContentToApi(contentId, content);
        }
      );
    });
  }
  return true;
});


function generate_uuidv4() {
  return Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
}