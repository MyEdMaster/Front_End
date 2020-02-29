'use strict'
import React from 'react';
import classes from './index.module.css';

import {MDBBtn, MDBCard,MDBIcon, MDBModal, MDBModalBody} from 'mdbreact';
import {handleSyn} from "../../../RRH/Component/speech-syn";
import {cancelSyn} from "../../../RRH/Component/speech-syn";
import q from '../../Lib/question-mark.jpg'
import {url} from "../../../../tool/fetch-help";
import Joyride from 'react-joyride';

//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';


export class AskQuestionComplex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backend:'',
            modal1: false,
            modal2: false,
            redQuestion:'',
            wolfQuestion:'',
            answer:'',
            q1:'',
            q2:'',
            q3:'',
            change:false,
            tag:0,
            button:'',
            example:'',
            defaultQuestion:'',
            listening: false,
            speechState:'Click to start...',
            hints:'',
            steps: [
                {
                    target: ".rrh",
                    content: "Click here to ask questions"
                },
                {
                    target: ".bbw",
                    content: "Click here to ask Big Bad Wolf questions"
                }
            ]

        };
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
        this.Button = this.Button.bind(this)

    }
    myClick=(text)=>{
        alert(text);
    }

    toggle = nr => () => {
        cancelSyn()
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber],
            answer:''
        });
    }
    Button = (text) => {
        if (text === 1 && this.state.backend.example1_exist === '1') {
                return (
                    <MDBBtn
                        color='white'
                        size='sm'
                        className='py-0'
                        style={{borderRadius: '5px'}}
                        onClick={() => {
                                this.setState({
                                    example: 'e.g.'+ this.state.backend.example1
                                })
                        }}
                    >
                        show example
                    </MDBBtn>
                )
        }
        if (text === 2 && this.state.backend.example2_exist === '1') {
            return (
                <MDBBtn
                    color='white'
                    size='sm'
                    className='py-0'
                    style={{borderRadius: '5px'}}
                    onClick={() => {
                        this.setState({
                            example: 'e.g.'+ this.state.backend.example2
                        })
                    }}
                >
                    show example
                </MDBBtn>
            )
        }
        if (text === 3 && this.state.backend.example3_exist === '1') {
            return (
                <MDBBtn
                    color='white'
                    size='sm'
                    className='py-0'
                    style={{borderRadius: '5px'}}
                    onClick={() => {
                        this.setState({
                            example: 'e.g.'+ this.state.backend.example3
                        })
                    }}
                >
                    show example
                </MDBBtn>
            )
        }
    };

    searchAnswer=(value)=>{
        cancelSyn()
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({question:value})
        };
        fetch(`${url}/ask_question/p2`,option)
            .then(response=>response.json())
            .then(answer=>{
                this.setState({
                    backend:answer
                })
                switch (answer.type) {
                    case '1':
                        this.setState({
                            hints:'',
                            answer:answer.answer1,
                            tag:1,
                            example:this.Button(1)
                        });
                        handleSyn((answer.answer1.replace('?', '.')));
                        break;
                    case '2':
                        this.setState({
                            hints:'Which is this the question you want to ask?',
                            q1:answer.question1,
                            q2:answer.question2,
                            q3:answer.question3,
                            tag:2,
                        });
                        handleSyn('Which is this the question you want to ask?');

                        break;
                    case '3':
                        this.setState({
                            hints:'The words don not add up',
                            tag:3,
                            example:''
                        });
                        handleSyn('The words don not add up')
                }

            })

    };
    //--------------Speech Recognition--------------
    toggleListen() {
        cancelSyn()
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }

    handleListen() {

        console.log('listening?', this.state.listening)

        if (this.state.listening) {
            recognition.start();
            recognition.onend = () => {
                this.setState({
                    speechState:'...continue listening...'
                });
                recognition.start()
            }

        } else {
            recognition.stop();
            recognition.onend = () => {
                this.setState({
                    speechState:'Click to start...'
                });
            }
        }

        recognition.onstart = () => {
            this.setState({
                speechState:'Listening...Click to pause'
            });
        }

        let finalTranscript = '';
        recognition.onresult = event => {
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }
            if (this.state.modal1){
                this.setState({
                    redQuestion:finalTranscript
                })
            }
            else if(this.state.modal2){
                this.setState({
                    wolfQuestion:finalTranscript
                })
            }
            document.getElementById('interim').innerHTML = interimTranscript;
            document.getElementById('final').value = finalTranscript;

            //-------------------------COMMANDS------------------------------------

            const transcriptArr = finalTranscript.split(' ');
            const stopCmd = transcriptArr.slice(-3, -1);
            console.log('stopCmd', stopCmd);

            if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
                recognition.stop();
                recognition.onend = () => {
                    console.log('Stopped listening per command');
                    const finalText = transcriptArr.slice(0, -3).join(' ');
                    document.getElementById('final').value = finalText
                }
            }
        }

        //-----------------------------------------------------------------------

        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }

    }

    render() {
        const { steps } = this.state;
        return (
            <div>
                <Joyride
                    steps={steps}
                    continuous={true}
                    scrollToFirstStep={true}
                    scrollToSteps={false}
                    styles={{
                        marginTop:'4000px',
                        options: {

                            primaryColor: '#7e57c2',
                            zIndex: 1000,
                        }
                    }}
                />

                <div className={classes.fixed1}>
                    <button className="button button rrh" onClick={this.toggle(2)}>
                        <img src={q} alt="Little Red Riding Hood" height="75" width="75"/></button>
                </div>


                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered size="lg">

                    <MDBModalBody className="text-center">
                        <div className={classes.title} style={{color:'#7e57c2', borderColor:'#7e57c2'}}>
                            <span>TRY ASKING A QUESTION</span>
                        </div>
                        {this.state.tag===2?(null):(
                            <div>
                                <div className="d-flex justify-content-center align-content-center mt-5 mb-3">
                                    <div className="flex-grow-1">
                                        <input
                                            id='final'
                                            className={`form-control form-control-lg ${classes.searchInput}`}
                                            placeholder="Ask your question here"
                                            style={{
                                                borderStyle:'solid',
                                                borderWidth:'1px',
                                                borderColor:'#7e57c2',
                                                borderRadius:'15px',
                                                fontFamily:'\'Rajdhani\', sans-serif',
                                                fontSize:'20px',
                                            }}
                                            onChange={(e) => {
                                                const str=e.target.value
                                                this.setState({
                                                    wolfQuestion: str
                                                });
                                            }}
                                            onKeyDown={(e) =>{
                                                if(e.keyCode===13){
                                                    if(this.state.wolfQuestion===''){
                                                        alert('Please input your question')
                                                    }
                                                    else{
                                                        this.searchAnswer(this.state.wolfQuestion)
                                                    }}
                                            }
                                            }
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <MDBBtn
                                            tag="a" floating color="green" style={{margin:'6px'}}
                                            onClick={()=>{
                                                if(this.state.wolfQuestion===''){
                                                    alert('Please input your question')
                                                }
                                                else{
                                                    this.searchAnswer(this.state.wolfQuestion)
                                                }}
                                            }
                                        >
                                            <MDBIcon icon="question" />
                                        </MDBBtn>
                                    </div>
                                    <div className="ml-1">
                                        <MDBBtn
                                            tag="a" floating color="purple lighten-2" style={{margin:'6px'}}
                                            onClick={this.toggleListen}
                                        >
                                            <MDBIcon icon="microphone" />
                                        </MDBBtn>

                                    </div>
                                </div>
                                <div className={classes.speechBorder}>
                                    <div className={classes.body}>{this.state.speechState}</div>
                                    <div id='interim'></div>
                                </div>
                            </div>
                        )}

                        <div className="mt-3">
                            <MDBCard
                                size="8"
                                text="white"
                                className="py-3 px-3 w-100 purple lighten-2"
                                style={{boxShadow:'none', borderRadius:'15px',}}
                            >
                                <p
                                    style={{borderStyle:'solid',borderColor:'white',borderWidth:'0 0 1px 0'}}
                                    className={classes.pb1}
                                >Hints/Answer</p>

                                {this.state.tag===2? (
                                    <div>
                                        <p className={classes.pb3}>{this.state.hints}</p>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'',
                                                    answer:this.state.backend.answer1,
                                                    example:this.Button(1),
                                                })
                                                handleSyn(this.state.backend.answer1)
                                            }}
                                            className={classes["select-ques2"]}
                                        >
                                            {this.state.q1}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'',
                                                    answer:this.state.backend.answer2,
                                                    example:this.Button(2)
                                                })
                                                handleSyn(this.state.backend.answer2)
                                            }}
                                            className={classes["select-ques2"]}
                                        >
                                            {this.state.q2}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'',
                                                    answer:this.state.backend.answer3,
                                                    example:this.Button(3)
                                                })
                                                handleSyn(this.state.backend.answer3)
                                            }}
                                            className={classes["select-ques2"]}
                                        >
                                            {this.state.q3}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'Could you rephrase the question？',
                                                    answer:'',
                                                    example:''
                                                })
                                                handleSyn('Could you rephrase the question')
                                            }}
                                            className={classes["select-ques2"]}
                                        >
                                            None of above
                                        </div>
                                    </div>
                                ):(
                                    <div>
                                        <p className={classes.pb3}>{this.state.hints}</p>
                                        <p
                                            className={classes.pb2}
                                        >
                                            {this.state.answer}<span>{this.state.button}</span>
                                        </p>
                                        <p className={classes.pb4}>
                                            {this.state.example}
                                        </p>

                                    </div>

                                )}
                            </MDBCard>

                        </div>

                    </MDBModalBody>
                </MDBModal>

            </div>
        );
    }
}
