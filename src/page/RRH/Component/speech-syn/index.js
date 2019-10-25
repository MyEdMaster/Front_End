
'use strict'



//------------------------SPEECH RECOGNITION-----------------------------


const synth = window.speechSynthesis
// const synth = speechSynthesis

//-----------------------JS Global Variable----------------------------


const voices = [];

//------------------------COMPONENT-----------------------------


const populateVoiceList=()=>{
    let voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
        let option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        if(voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);

    }
};

export const handleSyn=(text)=>{
    populateVoiceList()


    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged =()=>{populateVoiceList();}
    }



    let utterThis = new SpeechSynthesisUtterance(text);

    for(let i = 0; i < voices.length ; i++) {
        utterThis.voice = voices[i];

    }
    utterThis.pitch = 1.5;
    utterThis.rate = 1;
    utterThis.lang = 'en-US';
    synth.speak(utterThis);

};



