chrome.tabs.getCurrent(function(tab){
    alert(tab.url);
}
);



// chrome.tabs.getCurrent((tab) => {
//     alert(tab.title);
// });
// alert(window);

// let query = { 'active': true, 'lastFocusedWindow': true };
const query = { active: true, currentWindow: true };

function getURL() {
  // chrome.tabs.query({
  //     active: true,
  //     currentWindow: true
  //   }, function(tabs) {
  //     var tab = tabs[0];
  //     var url = tab.url;
  //     alert(url);
  //   })
  // }

//     chrome.tabs.query(query, (tabs) => {
//     var url = tabs[0].url;
//     alert(url);
//     //alert(window.location.href);
//   });
  chrome.tabs.getCurrent(function(tab) {alert(tab.url);});
}
window.setInterval(getURL, 2000);

window.addEventListener('hashchange', () => {
  const searchPage = window.open('https://www.ebay.com');
  // searchPage.blur();
  // window.focus();
  alert('entered');

  // changeBackgroundColor("pink");
});
