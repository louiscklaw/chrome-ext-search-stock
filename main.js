searchStock = function(word){
  var query = word.selectionText;

  // https://www.youtube.com/results?search_query=stm32f103
  // var searchParam = '&sp=CAISAhAB'
  var octopartTargetUrl = "http://www.aastocks.com/tc/stocks/quote/dynamic-chart.aspx?symbol=0" + query ;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  var octopartTargetUrl = "http://www.aastocks.com/tc/stocks/quote/detailchart.aspx?symbol=0" + query ;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

};

chrome.contextMenus.create({
  title: "Search stock by number",
  contexts:["selection"],
  onclick: searchStock
});
