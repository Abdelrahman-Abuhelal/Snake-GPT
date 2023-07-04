var allowedTags = ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

var content = Array.from(document.querySelectorAll(allowedTags.join(',')))
  .filter(function(element) {
    // Exclude style and script elements
    return element.tagName !== 'STYLE' && element.tagName !== 'SCRIPT';
  })
  .map(function(element) {
    return element.textContent.trim();
  })
  .join(' ');

content;

  
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get_content") {
    var content = getCleanContent();
    sendResponse({ content: content });
  }
});

content