console.log("spider-man is in background");

chrome.browserAction.onClicked.addListener(sendData)

function sendData(tab){
  const data = {
    setImg: true
  }

  chrome.tabs.sendMessage(tab.id,data)
}
