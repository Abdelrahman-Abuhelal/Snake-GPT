console.log('Background running');

chrome.tabs.query(
    {active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "get_content" }, function(response) {
      console.log(response);
    });
  });
  