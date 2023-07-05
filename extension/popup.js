document.addEventListener('DOMContentLoaded', function() {
  var scrapingToggle = document.getElementById('agree-toggle');
  var contentContainer = document.getElementById('content-container');
// default checkbox value
  chrome.storage.sync.get('scrapingEnabled', function(data) {
    var isScrapingEnabled = data.scrapingEnabled;

    scrapingToggle.checked = isScrapingEnabled;
    if (isScrapingEnabled) {
      enableScraping();
    } else {
      disableScraping();
    }
  });

  //  checkbox value if any change to it 
  scrapingToggle.addEventListener('change', function() {
   var isScrapingEnabled = scrapingToggle.checked;

    if (isScrapingEnabled) {
      enableScraping();
    } else {
      disableScraping();
    }

    chrome.storage.sync.set({ 'scrapingEnabled': isScrapingEnabled });
  });

  function enableScraping() {
    chrome.runtime.sendMessage({ action: 'get_content' }, function(response) {
      if (response && response.content) {
        contentContainer.textContent = response.content;
        //sendDataToAPI(response.content);
        console.log(response.content);   
      }
    });
    
  }

  function disableScraping() {
    contentContainer.textContent = '';
  }
});
