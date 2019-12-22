import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import {MDBIcon, MDBBtn, MDBInput, MDBRow} from 'mdbreact'


export const SpeakRecog=()=> {
    const [value, setValue] = useState("");
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result);
        }
    });

    return (
        <div>
      <textarea
          value={value}
          onChange={event => setValue(event.target.value)}
      />
            <MDBBtn
                tag="a" floating className=" orange lighten-2"
                onMouseDown={listen} onMouseUp={stop}
            >
                <MDBIcon icon="microphone" />
            </MDBBtn>
            {listening && <div>Go ahead I'm listening</div>}
        </div>
    );
}
