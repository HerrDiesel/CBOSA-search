chrome.runtime.onInstalled.addListener(() => {
    let contextMenuItem = {
        "id": "searchCBOSA",
        "title": "Search CBOSA",
        "contexts": ["selection"]
    };
      
    chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "searchCBOSA" && clickData.selectionText) {
        chrome.tabs.create({url: "http://orzeczenia.nsa.gov.pl/cbo/search?sygnatura=" + clickData.selectionText});
    }
});
