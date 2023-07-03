// Remove icons and images from the content
function removeIconsAndImages() {
  var icons = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
  var images = document.querySelectorAll("img");
  
  icons.forEach(function(icon) {
    icon.remove();
  });
  
  images.forEach(function(image) {
    image.remove();
  });
}

function getCleanContent() {
  removeIconsAndImages();
  var content = document.body.textContent;
  return content.trim();
}
var content = getCleanContent();

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "get_content") {
    var content = getCleanContent();
    sendResponse({ content: content });
  }
});