console.log("say hello to spider-man");

const spiderMan = "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/bc425ba4-a6e2-49e6-97ca-02fcbf3af727/bc964855-5ada-4888-9a91-017127da6737/1280x720/match/image.jpg"

const setSpiderMan = () => {
  console.log('called');
  const images = document.querySelectorAll("img")
  images.forEach(img=>{
    img.src = spiderMan
  })
}

const gotMsg = (msg,sender,senderResponse) =>{
  if (msg.setImg == true){
    setSpiderMan()
  }
}

chrome.runtime.onMessage.addListener(gotMsg)