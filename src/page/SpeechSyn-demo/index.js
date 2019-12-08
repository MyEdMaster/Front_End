
'use strict'
import React, { Component } from "react"


//------------------------SPEECH RECOGNITION-----------------------------

// const SpeechSynthesis =  window.speechSynthesis || window.webkitspeechSynthesis
// const synth = new SpeechSynthesis()
const synth = window.speechSynthesis
//
// recognition.continous = true
// recognition.interimResults = true
// recognition.lang = 'en-US'
//-----------------------JS Global Variable----------------------------


const voices = [];

//------------------------COMPONENT-----------------------------

export class SpeechSyn extends Component {

    constructor() {
        super()
        this.state = {


        }
        // this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
    }

    // toggleListen() {
    //     this.setState({
    //         tag: !this.state.listening
    //     }, this.handleSyn)
    // }

    populateVoiceList=()=>{
        let voices = synth.getVoices();
        for(let i = 0; i < voices.length ; i++) {
            let option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            if(voices[i].default) {
                option.textContent += ' -- DEFAULT';
            }

            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            // document.querySelector('select').appendChild(option)
            // document.getElementById('test').innerHTML= option
            // voiceSelect.appendChild(option);
        }
    }
    handleListen(){
        this.populateVoiceList()
        let inputForm = document.querySelector('form');
        let inputTxt = document.querySelector('.txt');
        // let voiceSelect = document.querySelector('select');
        // let pitch = document.querySelector('#pitch');
        // let rate = document.querySelector('#rate');

        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged =()=>this.populateVoiceList();
        }

        inputForm.onsubmit = (event)=>{
            event.preventDefault();

            let utterThis = new SpeechSynthesisUtterance('it is my life');
            // let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
            for(let i = 0; i < voices.length ; i++) {
                utterThis.voice = voices[i];
                // if(voices[i].name === selectedOption) {
                //
                // }
            }
            utterThis.pitch = 0.8;
            utterThis.rate = 0.8;
            synth.speak(utterThis);
            inputTxt.blur();
        }
    }
    render() {
        return (
            <div style={container}>
                <button id='microphone-btn' style={button} onClick={this.handleListen} />
                <h1>Speech synthesiser</h1>

                <p>Enter some text in the input below and press return or the "play" button to hear it. change voices
                    using the dropdown menu.</p>

                <form>
                    <input type="text" className="txt"/>
                        {/*<div>*/}
                            {/*<label htmlFor="rate">Rate</label>*/}
                            {/*<input type="range" min="0.5" max="2" value="1" step="0.1"*/}
                                                                     {/*id="rate"/>*/}
                            {/*<div className="rate-value">1</div>*/}
                            {/*<div className="clearfix"></div>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<label htmlFor="pitch">Pitch</label>*/}
                            {/*<input type="range" min="0" max="2" value="1" step="0.1"*/}
                                                                       {/*id="pitch"/>*/}
                            {/*<div className="pitch-value">1</div>*/}
                            {/*<div className="clearfix"></div>*/}
                        {/*</div>*/}
                        {/*<select>*/}

                        {/*</select>*/}
                        <div className="controls">
                            <button id="play" type="submit">Play</button>
                        </div>
                </form>
                {/*<input id='interim' style={interim}></input>*/}
                {/*<input id='final' style={final}></input>*/}
            </div>
        )
    }
}



//-------------------------CSS------------------------------------

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    button: {
        width: '60px',
        height: '60px',
        background: 'lightblue',
        borderRadius: '50%',
        margin: '6em 0 2em 0'
    },
    interim: {
        color: 'gray',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    },
    final: {
        color: 'black',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    }
}

const { container, button, interim, final } = styles
