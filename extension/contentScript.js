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
content;