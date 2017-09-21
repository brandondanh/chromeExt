// $(document).ready(function() {
//   $.get("http://setgetgo.com/randomword/get.php",{},function(data){
  // $.ajax({ url: 'http://setgetgo.com/randomword/get.php', success: function(data) { alert(data); } });
  $.get('http://slack-server.elasticbeanstalk.com/messages')
  .then(function(data) {
    // document.getElementById('demo').innerHTML = data;
    alert("boo");
  });
  


const query = { active: true, currentWindow: true };
function getURL() {

  chrome.tabs.query(query, (tabs) => {
    var url = tabs[0].url;
  
    if (url.indexOf('www.amazon.com') !== -1) {
      randomSearch('amazon');
    }
    else if (url.indexOf('www.ebay.com') !== -1) {
      randomSearch('ebay');
    }

  });

}

window.setInterval(getURL, 5000);

function randomSearch(site) {

  // $.ajax({ url: 'http://setgetgo.com/randomword/get.php', success: function(data) { alert(data); } });
  let searchUrl;
  // find random word for searchTerm
  // $.ajax({ url: 'http://setgetgo.com/randomword/get.php', success: function(data) { 
    let searchTerm = "tree";
    
      if (site === 'amazon') {
        searchUrl = ("https://duckduckgo.com/?q=!ducky+site%3Aebay.com%2Fitm+er&ia=web").concat(searchTerm);
        var newWind = window.open(searchUrl);
      }
      else if (site === 'ebay') {
        var newWind = window.open("https://www.ebay.com");
      }
      
      setTimeout(function() {
        newWind.close();
      }, 1200);

  // } });
  
}

