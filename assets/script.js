var speech= new SpeechSynthesisUtterance();

function speak(){
    speech.text= textToSpeech.value;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}
alert("Enter a Text and click on a speaker button")


