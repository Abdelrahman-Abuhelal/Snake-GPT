import { sendContentToApi } from "./api.mjs";
//import { v4 as uuid } from "../node_modules/uuid/wrapper.mjs";

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
          var contentId ="0"; // Generate a unique id for the content
          sendResponse({ contentData:content, contentId: contentId });
          sendContentToApi(contentId, content);
        }
      );
    });
  }
  return true;
});
