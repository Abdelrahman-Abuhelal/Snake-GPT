chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get_content") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: ["contentScript.js"],
        },
        function(result) {
          var content = result[0].result;
          sendResponse({ content: content });
        }
      );
    });
    return true;
  }
});
