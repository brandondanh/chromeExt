

  const chatDiv = document.createElement('div');
  chatDiv.setAttribute("id", "myBox");
  chatDiv.style.width = '10px';
  chatDiv.style.height = '10px';
  chatDiv.style.position = 'absolute';
  chatDiv.innerHTML = "<iframe src='https://www.amazon.com' width='' height='' />";
  document.body.appendChild( chatDiv);
  // chatDiv.load("https://www.amazon.com");
  // $('#myBox').html("<iframe src='https://www.amazon.com' width='' height='' />");

// const query = { active: true, currentWindow: true };
// function getURL() {

//   chrome.tabs.query(query, (tabs) => {
//     var url = tabs[0].url;
  
//     if (url.indexOf('www.amazon.com') !== -1) {
//       randomSearch('amazon');
//     }
//     else if (url.indexOf('www.ebay.com') !== -1) {
//       randomSearch('ebay');
//     }

//   });

// }

// window.setInterval(getURL, 5000);

// function randomSearch(site) {

//   const URL = 'http://setgetgo.com/randomword/get.php';
//   const xhttpGet = new XMLHttpRequest();
//   xhttpGet.onreadystatechange = function() {
//       if (xhttpGet.readyState == 4 && xhttpGet.status == 200) {
//         // do stuff here
//         let searchUrl;
        
//         let searchTerm = xhttpGet.responseText;
        
//         if (site === 'amazon') {
//           searchUrl = ("https://duckduckgo.com/?q=!ducky+site%3Aamazon.com%2Fgp%2Fproduct+").concat(searchTerm);
//           // var newWind = window.open(searchUrl);
//           window.location.replace(URL);
//         }
//         else if (site === 'ebay') {
//           var newWind = window.open("https://duckduckgo.com/?q=!ducky+site%3Aebay.com%2Fitm+" + searchTerm + "&ia=web").concat(searchTerm);
//         }
        
//         setTimeout(function() {
//           newWind.close();
//         }, 2500);
//       }
//   }; 

//   xhttpGet.open('GET', URL, true);
//   xhttpGet.send();

// }

