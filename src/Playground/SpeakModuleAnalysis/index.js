import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import {MDBIcon,MDBBtn} from 'mdbreact'
export const SpeakRecogAnylysis=()=> {
    const [value, setValue] = useState("");
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result);
        }
    });

    return (
        <div>
            <div>
            <input
                placeholder="Enter your response here"
                style={{
                    padding:'0 5px',
                    borderStyle:'solid',
                    borderWidth:'1px',
                    borderColor:'#33b5e5',
                    borderRadius:'15px',
                    fontFamily:'\'Rajdhani\', sans-serif',
                    fontSize:'30px',
                    width:'100%'
                }}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            </div>
            <div className="d-flex justify-content-center">
                <MDBBtn tag="a" size="lg" floating color="red" onMouseDown={listen} onMouseUp={stop}>
                    <MDBIcon icon="microphone" />
                </MDBBtn>
            </div>

            {listening && <div>Go ahead I'm listening</div>}
        </div>
    );
}
