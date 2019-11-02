'use strict'
import React from 'react';
import classes from './index.module.css';
import llrh from '../../Lib/llrh.jpg';
import bbw from '../../Lib/bbw.jpg';
import {MDBBtn, MDBCard,MDBIcon, MDBModal, MDBModalBody} from 'mdbreact';
import {handleSyn} from "../speech-syn";

//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';


export class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            redQuestion:'',
            wolfQuestion:'',
            answer:'',
            change:false,
            tag:1,
            defaultQuestion:'',
            listening: false,
            speechState:'Click to start...',
            hints:''

        };
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)

    }
    myClick=(text)=>{
        alert(text);
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber],
            answer:''
        });
    }
    searchAnswer=(value)=>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({"question":value})
        };
        fetch('http://localhost:5050/getanswer',option)
            .then(response=>response.text())
            .then(answer=>{
                if (answer.substr(0, 1) === '0'){
                    this.setState({
                        hints:'Is this the question you want to ask?',
                        answer:answer.substring(1,answer.length),
                        tag:0,
                        defaultQuestion:answer.substring(1,answer.length)
                    })
                    handleSyn('Is this the question you want to ask')
                    handleSyn((answer.substring(1,answer.length).replace('?', '.')))
                }
                else if(answer.substr(0, 1) === '2'){
                    this.setState({
                        hints:'',
                        answer:'I cannot understand your question, could you ask it in another way'
                        // answer:answer.substring(1,answer.length),
                        // tag:0,
                        // defaultQuestion:answer.substring(1,answer.length)
                    })
                    handleSyn('I cannot understand your question, could you ask it in another way')
                }
                else{
                    this.setState({
                        hint:'',
                        answer:answer.substring(1,answer.length)
                    })
                    handleSyn((answer.substring(1,answer.length).replace('?', '.')))
                }

            })
            .catch(5000)
    }
    searchAgain=(answer)=>{
        const newoption={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({"question":answer})
        };
        fetch('http://localhost:5050/getanswer',newoption)
            .then(response=>response.text())
            .then(newanswer=>{
                this.setState({
                    answer:newanswer.substring(1,newanswer.length),
                    tag:1,
                    hints:''
                })
                handleSyn('The answer is')
                handleSyn(newanswer.substring(1,newanswer.length).replace('?', '.'))
            })
    };
    //--------------Speech Recognition--------------
    toggleListen() {
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
        console.log(this.state.redQuestion)
        console.log(this.state.wolfQuestion)
        return (
            <div>
                <div className={classes.fixed}>
                    <button className="button button" onClick={this.toggle(1)}>
                        <img src={llrh} alt="Little Red Riding Hood" height="142" width="100"/></button>
                </div>
                <div className={classes.fixed1}>
                    <button className="button button" onClick={this.toggle(2)}><img
                        src={bbw} alt="Big Bad Wolf" height="142" width="100"/></button>
                </div>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">

                    <MDBModalBody className="text-center">
                        <div className={classes.title}>
                            <span>TRY ASKING</span>
                            <img src={llrh} alt="Little Red Riding Hood" height="71" width="50"/>
                            <span >A QUESTION</span>
                        </div>
                        {this.state.tag<1?(null):(
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
                                                borderColor:'#81c784',
                                                borderRadius:'15px',
                                                fontFamily:'\'Rajdhani\', sans-serif',
                                                fontSize:'20px',
                                            }}
                                            onChange={(e) => {
                                                const str=e.target.value
                                                this.setState({
                                                    redQuestion: str
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <MDBBtn
                                            tag="a" floating color="green" style={{margin:'6px'}}
                                            onClick={()=>{this.searchAnswer(this.state.redQuestion)}}
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
                                className="py-3 px-3 w-100 green lighten-2"
                                style={{boxShadow:'none', borderRadius:'15px',}}
                            >
                                <p
                                    style={{borderStyle:'solid',borderColor:'white',borderWidth:'0 0 1px 0'}}
                                    className={classes.pb1}
                                >Hints/Answer</p>
                                {this.state.tag<1? (
                                    <p className={classes.pb3}>{this.state.hints}</p>
                                ):(null)}
                                <p className={classes.pb2}>{this.state.answer}</p>
                            </MDBCard>
                            <div>
                                {this.state.tag<1? (
                                    <div className="d-flex justify-content-center align-items-center">

                                        <MDBBtn
                                            tag="a" floating className="green"
                                            onClick={()=>{
                                                this.searchAgain(this.state.defaultQuestion)
                                                this.setState({
                                                    tag:1
                                                })
                                            }}
                                        >
                                            <MDBIcon icon="check" />
                                        </MDBBtn>
                                        <MDBBtn
                                            tag="a" floating className="red lighten-1"
                                            onClick={()=>{
                                                this.setState({
                                                    answer:'Sorry, we cannot find the answer',
                                                    tag:1
                                                })
                                            }}
                                        >
                                            <MDBIcon icon="times" />
                                        </MDBBtn>

                                    </div>
                                ):(null)
                                }
                            </div>
                        </div>

                        {/*{this.state.change?(*/}
                            {/*null*/}
                        {/*):(*/}

                            {/*<p>*/}
                                {/*{this.state.answer}*/}
                            {/*</p>*/}
                        {/*)}*/}
                    </MDBModalBody>
                </MDBModal>
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered size="lg">

                    <MDBModalBody className="text-center">
                        <div className={classes.title} style={{color:'#7e57c2', borderColor:'#7e57c2'}}>
                            <span>TRY ASKING</span>
                            <img src={bbw} alt="Little Red Riding Hood" height="71" width="50"/>
                            <span >A QUESTION</span>
                        </div>

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
                                />
                            </div>
                            <div className="ml-3">
                                <MDBBtn
                                    tag="a" floating color="green lighten-2" style={{margin:'6px'}}
                                    onClick={()=>{this.searchAnswer(this.state.wolfQuestion)}}
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
                        <div className={classes.speechBorder} >
                            <div className={classes.body}>{this.state.speechState}</div>
                            <div id='interim'></div>
                        </div>

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
                                {this.state.tag<1? (
                                    <p className={classes.pb3}>{this.state.hints}</p>
                                ):(null)}

                                <p className={classes.pb2}>{this.state.answer}</p>
                            </MDBCard>
                            <div>
                                {this.state.tag<1? (
                                    <div className="d-flex justify-content-center align-items-center">

                                        <MDBBtn
                                            tag="a" floating className="green"
                                            onClick={()=>{
                                                this.searchAgain(this.state.defaultQuestion)
                                                this.setState({
                                                    tag:1
                                                })
                                            }}
                                        >
                                            <MDBIcon icon="check" />
                                        </MDBBtn>
                                        <MDBBtn
                                            tag="a" floating className="red lighten-1"
                                            onClick={()=>{
                                                this.setState({
                                                    answer:'Sorry, we cannot find the answer',
                                                    tag:1
                                                })
                                            }}
                                        >
                                            <MDBIcon icon="times" />
                                        </MDBBtn>

                                    </div>
                                ):(null)
                                }
                            </div>
                        </div>

                        {/*{this.state.change?(*/}
                        {/*null*/}
                        {/*):(*/}

                        {/*<p>*/}
                        {/*{this.state.answer}*/}
                        {/*</p>*/}
                        {/*)}*/}
                    </MDBModalBody>
                </MDBModal>

            </div>
        );
    }
}
