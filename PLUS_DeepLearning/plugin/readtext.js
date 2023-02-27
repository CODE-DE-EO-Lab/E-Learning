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
    
read.readfile=function(t, lang){
     

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
				*/


