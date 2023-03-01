var read={};

read.speech = new SpeechSynthesisUtterance();
var paused= false;

// define function for the event the speech ends
 
read.speech.onend= function(){read.forward()};
//set Timeout to make it easier to listen
setTimeout(function(){read.speech.onend;},1000);
read.forward=function(){
    //check for possible fragments
   var ind=Reveal.getIndices();
   var i =ind.f;
   if (i == undefined){
  
   Reveal.next();
}
if(i !== null && i !== ''){
    Reveal.nextFragment();
    read.speech.onend= function(){Reveal.next()};
    setTimeout(function(){read.speech.onend;},1000);
    
}
   
   
    
    }
// define speech and attributes
    
read.readfile=function(t){
     
 
    let userAgentString= navigator.userAgent;
    // Detect Internet Explorer (not usable for voice!!)
    if(userAgentString.indexOf("MSIE")>-1 || userAgentString.indexOf("rv")<-1){
        lang='female en-IE';
        console.log('MSIE', lang)
    }
    // Detect Chrome (favorite)
    if(userAgentString.indexOf("Chrome")>-1){
        lang='en-GB';
        console.log('Chrome', lang)
    }
    //Detect Firefox (only one voice available)
    if(userAgentString.indexOf("Firefox")>-1){
        lang='en-US';
        console.log('Firefox',lang)
    }
    //Detect Safari (favorite)
    if(userAgentString.indexOf("Safari")>-1){
        lang='en-GB';
        console.log('Safari', lang)
    }
    //Detect Samsung Browser (favorite))
    if(userAgentString.indexOf('SamsungBrowser')>-1){
        lang="en-IE";
        console.log('SamsungBrowser', lang)
    }
    //Detect Microsoft Edge (favorite))
    if(userAgentString.indexOf('Edge')>-1){
        lang="female en-IE";
        console.log('Edge', lang)
    }
    //Detect Opera (only one voice available)
    if(userAgentString.indexOf('Opera')>-1 || userAgentString.indexOf('OPR')>-1) {
        lang="en-US";
        console.log('Opera', lang)
    }
    
  console.log(lang)


    read.speech.lang = lang;
    read.speech.volume = 1;
    read.speech.rate = 1;
    read.speech.pitch = 1;                
    read.speech.text= t;

if (paused){
        paused= false;
        window.speechSynthesis.resume();
    }
else{
    window.speechSynthesis.speak(read.speech);
}

  
    
   };
read.pause=function(){
    window.speechSynthesis.pause();
   
};
read.resume=function(){
    window.speechSynthesis.resume();
    }
// delete all the text still in the memory
read.delete=function()
{window.speechSynthesis.cancel();
}
    //get an overview over the different voices
    	/*
		
	const getVoices = () => {
  					return new Promise((resolve) => {
   					 let voices = speechSynthesis.getVoices()

   					 if (voices.length) {
     					 resolve(voices)
     					 return
   						 }
    
						const voiceschanged = () => {
						voices = speechSynthesis.getVoices()
						resolve(voices)
						}
						
						speechSynthesis.onvoiceschanged = voiceschanged
					})
				}

				const printVoicesList = async () => {
				(await getVoices()).forEach((voice) => {
					console.log(voice.name, voice.lang)
				})  
				}

				printVoicesList()
				

/*