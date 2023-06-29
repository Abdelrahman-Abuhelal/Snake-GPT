
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get_content") {
    var content = document.body.innerHTML;
    sendResponse({ content: content });
  }
});
