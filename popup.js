document.addEventListener('DOMContentLoaded', function() {
  var scrapingToggle = document.getElementById('scraping-toggle');
  var contentContainer = document.getElementById('content-container');

  // Retrieve the user's preference from storage
  chrome.storage.sync.get('scrapingEnabled', function(data) {
    var isScrapingEnabled = data.scrapingEnabled;

    // Set the initial state of the checkbox and content display based on the preference
    scrapingToggle.checked = isScrapingEnabled;
    if (isScrapingEnabled) {
      enableScraping();
    } else {
      disableScraping();
    }
  });
  scrapingToggle.addEventListener('change', function() {
   var isScrapingEnabled = scrapingToggle.checked;

    if (isScrapingEnabled) {
      enableScraping();
    } else {
      disableScraping();
    }

    // Store the updated preference in storage
    chrome.storage.sync.set({ 'scrapingEnabled': isScrapingEnabled });
  });

  function enableScraping() {
    chrome.runtime.sendMessage({ action: 'get_content' }, function(response) {
      if (response && response.content) {
        contentContainer.textContent = response.content;
        console.log(response.content);   
      }
    });
  }

  function disableScraping() {
    contentContainer.textContent = '';
  }
});
