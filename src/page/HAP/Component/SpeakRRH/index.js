import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import {MDBIcon, MDBBtn, MDBInput, MDBRow} from 'mdbreact'
import classes from "../ask-question/index.module.css";


export const SpeakRecog=()=> {
    const [value, setValue] = useState("");
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result);
        }
    });

    return (
        <div>

            <div className="d-flex justify-content-center items-align-baseline">
                <div className="ml-3">
                    <input
                        className={`form-control form-control-lg ${classes.searchInput}`}

                        style={{
                            fontSize: '1.09vw',
                            width: '30vw'
                        }}
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
                <div className="ml-3">
                    <MDBBtn
                        tag="a" floating className=" orange lighten-2"
                        onMouseDown={listen} onMouseUp={stop}
                    >
                        <MDBIcon icon="microphone" />
                    </MDBBtn>
                </div>

            </div>
            <div>
                {listening && <div>Go ahead I'm listening</div>}
            </div>


        </div>
    );
}
