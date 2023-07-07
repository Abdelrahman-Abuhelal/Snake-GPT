//import { sendPromptToApi } from "./api.mjs";

document.addEventListener('DOMContentLoaded', function() {

  var scrapingToggle = document.getElementById('agree-toggle');
  var contentContainer = document.getElementById('content-container');
  var promptText= document.getElementById('prompt_text');
  var contentData;
  var contentId;
// default checkbox value
  chrome.storage.sync.get('scrapingEnabled', function(data) {
    let isScrapingEnabled = data.scrapingEnabled;

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

  promptText.addEventListener("keydown",function(e){
    if(e.code=="Enter"){
      let enteredPrompt=e.target.value;
    //  sendPromptToApi(contentId,enteredPrompt);
     }
  });

  //this function works when the checkbox is enabled, it will display the content and send an action to the background 
  function enableScraping() {
    chrome.runtime.sendMessage({ action: 'get_content' }, function(response) {

      if (response && response.contentData && response.contentId) {
        contentData =response.contentData;
        contentId = response.contentId;
        console.log("DSAFSAFASF");

        contentContainer.textContent = contentData;
        //sendDataToAPI(response.content);
        console.log(contentData);   
      }
    });
    
  }

  function disableScraping() {
    contentContainer.textContent = '';
  }
});
