//
searchStockPrice = function(word){
  var query = word.selectionText;

  // https://github.com/search?q=stm32f103
  var octopartTargetUrl = "http://www.aastocks.com/tc/stocks/quote/detail-quote.aspx?symbol=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

};

// http://www.aastocks.com/tc/stocks/quote/detailchart.aspx?symbol=27834
searchStockGraph = function(word){
  var query = word.selectionText;

  // https://github.com/search?q=stm32f103
  var octopartTargetUrl = "http://www.aastocks.com/tc/stocks/quote/detailchart.aspx?symbol=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

};

searchStockAll = function(word)
{
  searchStockGraph(word);
  searchStockPrice(word);
}

chrome.contextMenus.create({
  title: "_search all",
  contexts:["selection"],
  onclick: searchStockAll
});

chrome.contextMenus.create({
  title: "search stock price",
  contexts:["selection"],
  onclick: searchStockPrice
});

chrome.contextMenus.create({
  title: "search stock graph",
  contexts:["selection"],
  onclick: searchStockGraph
});

searchPriceOnHKEX = function(word){
  var query = word.selectionText;

  // https://www.hkex.com.hk/Market-Data/Securities-Prices/Equities/Equities-Quote?sc_lang=zh-HK&sym=788
  var octopartTargetUrl = "https://www.hkex.com.hk/Market-Data/Securities-Prices/Equities/Equities-Quote?sc_lang=zh-HK&sym=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

};

chrome.contextMenus.create({
  title: "price on HKEX",
  contexts:["selection"],
  onclick: searchPriceOnHKEX
});
