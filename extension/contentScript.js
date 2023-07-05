var allowedTags = ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

var content = Array.from(document.querySelectorAll(allowedTags.join(',')))
  .filter(function(element) {
    return (
      element.tagName !== 'STYLE' &&
      element.tagName !== 'SCRIPT' &&
      element.tagName !== 'IMG' &&
      element.tagName !== 'FOOTER' &&
      element.tagName !== 'A' &&
      element.tagName !== 'HEAD' &&
      !hasParentStyle(element)
    );
  })
  .map(function(element) {
    return element.textContent.trim();
  })
  .join(' ');

function hasParentStyle(element) {
  var parent = element.parentNode;
  while (parent) {
    if (parent.tagName === 'STYLE') {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}

content;


  
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get_content") {
    var content = getCleanContent();
    sendResponse({ content: content });
  }
});

content