console.log('Service Worker running');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "get_content") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "get_content" }, function(response) {
          sendResponse(response);
        });
      });
      return true; // Indicates that sendResponse will be called asynchronously
    }
  });
  