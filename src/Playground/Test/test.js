import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";



const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
};
const options = {
    autoStart: false,
}


const Dictaphone = ({
                        transcript,
                        resetTranscript,
                        browserSupportsSpeechRecognition,
                        listening,
                        stopListening,
                        startListening,
                        recognition,


                    }) => {
    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div>
            <button onClick={resetTranscript}>Reset</button>
            <button onMouseDown={startListening} onMouseUp={stopListening} {...recognition.lang='en-US'}>
                🎤
            </button>

            <textarea
                value={transcript}
            />
        </div>
    );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone)