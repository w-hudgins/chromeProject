

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "contextMenu",
      title: "Save Word", 
      contexts:["selection"], 
});

});

chrome.runtime.onInstalled.addListener(function() {
  localStorage.setItem('date', '123');
});

function onClickHandler(info) {
  var baseUrl = "https://script.google.com/macros/s/AKfycbzuKhuTttxHdesJ1E831dvp_kly97-5wex5rhxr9R8/exec?word=";
  var bool = "false";
  var now = new Date();
  var day =  now.getDate();
  var month = now.getMonth();
  var date = day + '/' + month;

  if (date == localStorage.getItem('date')){
    bool = "false";

  }
  if(date != localStorage.getItem('date')){
    bool = "true";
    localStorage.removeItem('date');
    localStorage.setItem('date', date);
  }

  var text = info.selectionText;

  var url = baseUrl + text + "&bool=" + bool;

  chrome.tabs.create({"url": url});

};

chrome.contextMenus.onClicked.addListener(onClickHandler);

/*
chrome.contextMenus.onClicked.addListener(function(){
  

});
*/