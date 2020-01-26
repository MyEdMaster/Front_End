'use strict'
import React from 'react';
import classes from './index.module.css';
import llrh from '../../Lib/llrh.jpg';
import bbw from '../../Lib/bbw.jpg';
import {MDBBtn, MDBCard,MDBIcon, MDBModal, MDBModalBody} from 'mdbreact';
import {handleSyn} from "../speech-syn";
import {cancelSyn} from "../speech-syn";
import {url} from "../../../../tool/fetch-help";
import Joyride from 'react-joyride';

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
            defaultQuestion:'',
            listening: false,
            speechState:'Click to start...',
            hints:'',
            steps: [
                {
                    target: ".rrh",
                    content: "Click here to ask Little Red Riding Hood questions"
                },
                {
                    target: ".bbw",
                    content: "Click here to ask Big Bad Wolf questions"
                }
            ]

        };
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)

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


    searchAnswer=(value)=>{
        cancelSyn()
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({question:value})
        };
        fetch(`${url}/ask_question/p1`,option)
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
                            tag:1
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
                            tag:3
                        });
                        handleSyn('The words don not add up')
                }

            })


        // fetch(`${url}/getanswer`,option)
        //     .then(response=>response.text())
        //     .then(answer=>{
        //         if (answer.substr(0, 1) === '0'){
        //             this.setState({
        //                 hints:'Is this the question you want to ask?',
        //                 answer:answer.substring(1,answer.length),
        //                 tag:0,
        //                 defaultQuestion:answer.substring(1,answer.length)
        //             })
        //             handleSyn('Is this the question you want to ask')
        //             handleSyn((answer.substring(1,answer.length).replace('?', '.')))
        //         }
        //         else if(answer.substr(0, 1) === '2'){
        //             this.setState({
        //                 hints:'',
        //                 answer:'I cannot understand your question, could you ask it in another way'
        //                 // answer:answer.substring(1,answer.length),
        //                 // tag:0,
        //                 // defaultQuestion:answer.substring(1,answer.length)
        //             })
        //             handleSyn('I cannot understand your question, could you ask it in another way')
        //         }
        //         else{
        //             this.setState({
        //                 hint:'',
        //                 answer:answer.substring(1,answer.length)
        //             })
        //             handleSyn((answer.substring(1,answer.length).replace('?', '.')))
        //         }
        //
        //     })
        //     .catch(5000)
    }
    // searchAgain=(answer)=>{
    //     cancelSyn()
    //     const newoption={
    //         method:'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body:JSON.stringify({"question":answer})
    //     };
    //     fetch(`${url}/getanswer`,newoption)
    //         .then(response=>response.text())
    //         .then(newanswer=>{
    //             this.setState({
    //                 answer:newanswer.substring(1,newanswer.length),
    //                 tag:1,
    //                 hints:''
    //             })
    //             handleSyn('The answer is')
    //             handleSyn(newanswer.substring(1,newanswer.length).replace('?', '.'))
    //         })
    // };
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
                            // arrowColor: '#e3ffeb',
                            // backgroundColor: '#e3ffeb',
                            //overlayColor: 'rgba(121, 85, 72, 0.1)',
                            primaryColor: '#7e57c2',
                            //textColor: '#004a14',
                            // width: 900,
                            zIndex: 1000,
                        }
                    }}
                />

                <div className={classes.fixed}>
                    <button className="button button rrh" onClick={this.toggle(1)}>
                        <img src={llrh} alt="Little Red Riding Hood" height="142" width="100"/></button>
                </div>
                <div className={classes.fixed1}>
                    <button className="button button bbw" onClick={this.toggle(2)}><img
                        src={bbw} alt="Big Bad Wolf" height="142" width="100"/></button>
                </div>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">

                    <MDBModalBody className="text-center">
                        <div className={classes.title}>
                            <span>TRY ASKING</span>
                            <img src={llrh} alt="Little Red Riding Hood" height="71" width="50"/>
                            <span >A QUESTION</span>
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
                                            onKeyDown={(e) =>{
                                                if(e.keyCode===13){
                                                    if(this.state.redQuestion===''){
                                                        alert('Please input your question')
                                                    }
                                                    else{
                                                        this.searchAnswer(this.state.redQuestion)
                                                    }}
                                            }
                                            }
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <MDBBtn
                                            tag="a" floating color="green" style={{margin:'6px'}}
                                            onClick={()=>{
                                                if(this.state.redQuestion===''){
                                                    alert('Please input your question')
                                                }
                                                else{
                                                    this.searchAnswer(this.state.redQuestion)
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
                                className="py-3 px-3 w-100 green lighten-2"
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
                                                    hint:'',
                                                    answer:this.state.backend.answer1
                                                })
                                                handleSyn(this.state.backend.answer1)
                                            }}
                                            className={classes["select-ques"]}
                                        >
                                            {this.state.q1}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'',
                                                    answer:this.state.backend.answer2
                                                })
                                                handleSyn(this.state.backend.answer2)
                                            }}
                                            className={classes["select-ques"]}
                                        >
                                            {this.state.q2}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'',
                                                    answer:this.state.backend.answer3
                                                })
                                                handleSyn(this.state.backend.answer3)
                                            }}
                                            className={classes["select-ques"]}
                                        >
                                            {this.state.q3}
                                        </div>
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    tag:1,
                                                    hints:'Could you rephrase the question？',
                                                    answer:''
                                                })
                                                handleSyn('Could you rephrase the question')
                                            }}
                                            className={classes["select-ques"]}
                                        >
                                            None of above
                                        </div>
                                    </div>
                                ):(
                                    <div>
                                        <p className={classes.pb3}>{this.state.hints}</p>
                                        <p className={classes.pb2}>{this.state.answer}</p>
                                    </div>

                                )}

                            </MDBCard>
                            {/*<div>*/}
                            {/*{this.state.tag<1? (*/}
                            {/*<div className="d-flex justify-content-center align-items-center">*/}

                            {/*<MDBBtn*/}
                            {/*tag="a" floating className="green"*/}
                            {/*onClick={()=>{*/}
                            {/*this.searchAgain(this.state.defaultQuestion)*/}
                            {/*this.setState({*/}
                            {/*tag:1*/}
                            {/*})*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*<MDBIcon icon="check" />*/}
                            {/*</MDBBtn>*/}
                            {/*<MDBBtn*/}
                            {/*tag="a" floating className="red lighten-1"*/}
                            {/*onClick={()=>{*/}
                            {/*this.setState({*/}
                            {/*answer:'Sorry, we cannot find the answer',*/}
                            {/*tag:1*/}
                            {/*})*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*<MDBIcon icon="times" />*/}
                            {/*</MDBBtn>*/}

                            {/*</div>*/}
                            {/*):(null)*/}
                            {/*}*/}
                            {/*</div>*/}
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
                                                    answer:this.state.backend.answer1
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
                                                    answer:this.state.backend.answer2
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
                                                    answer:this.state.backend.answer3
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
                                                    answer:''
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
                                        <p className={classes.pb2}>{this.state.answer}</p>
                                    </div>

                                )}

                            </MDBCard>
                            {/*<div>*/}
                            {/*{this.state.tag<1? (*/}
                            {/*<div className="d-flex justify-content-center align-items-center">*/}

                            {/*<MDBBtn*/}
                            {/*tag="a" floating className="green"*/}
                            {/*onClick={()=>{*/}
                            {/*this.searchAgain(this.state.defaultQuestion)*/}
                            {/*this.setState({*/}
                            {/*tag:1*/}
                            {/*})*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*<MDBIcon icon="check" />*/}
                            {/*</MDBBtn>*/}
                            {/*<MDBBtn*/}
                            {/*tag="a" floating className="red lighten-1"*/}
                            {/*onClick={()=>{*/}
                            {/*this.setState({*/}
                            {/*answer:'Sorry, we cannot find the answer',*/}
                            {/*tag:1*/}
                            {/*})*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*<MDBIcon icon="times" />*/}
                            {/*</MDBBtn>*/}

                            {/*</div>*/}
                            {/*):(null)*/}
                            {/*}*/}
                            {/*</div>*/}
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
