import { sendContentToApi } from "./api.js";
import { v4 as uuid } from "node_modules/uuid";

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
          var contentId = uuid(); // Generate a unique id for the content
          const cont_det = {
            content: content,
            id: contentId,
          };
          sendResponse(cont_det);
          sendContentToApi(contentId, content);
        }
      );
    });
  }
});
