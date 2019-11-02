import React from 'react';
import classes from '../../ComplexNumber/Page/index.module.css';
import classes2 from './index.module.css'

import {AskQuestion} from "../Component/ask-question";
import {MDBBtn, MDBCard, MDBCol, MDBIcon, MDBModalBody, MDBRow} from "mdbreact";
import {handleSyn} from "../Component/speech-syn";


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

export class End extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listening: false,
            speechState:'Click to start...',
            hints:'',
            question:'',
            answer:'',
            tag:'',
            render:0,
            feedback:''
        };
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
    }
    componentDidMount() {
        const option={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        }
        fetch('http://localhost:5050/feedback/question',option)
            .then(response=>response.text())
            .then(question=>{
                this.setState({
                    question:question,
                    render:1
                })
                handleSyn(question.replace('?', '.'))
            })
    }
    componentWillMount() {
        handleSyn(this.state.answer)
    }


    searchAnswer=(value)=>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({"answer":value})
        };
        fetch('http://localhost:5050/feedback/checkanswer',option)
            .then(response=>response.text())
            .then(answer=>{
                if (answer.substr(0, 1) === '0'){

                    this.setState({

                        feedback:answer.substring(1,answer.length),

                        tag:'No.'
                    })
                    handleSyn('The answer is')
                    handleSyn((answer.substring(1,answer.length).replace('?', '.')))
                }
                else{
                    this.setState({
                       feedback:'',
                        tag:'Yes! You got it.'
                    })
                    handleSyn('Yes! You got it')
                }


            })
            // .then(answer=>{
            //
            // })
    }

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
        };

        let finalTranscript = '';
        recognition.onresult = event => {
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }

            this.setState({
                answer:finalTranscript
            });
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

        return (
            <div className={`${classes.body} align-content-center w-100 h-100 text-center`}>
                <AskQuestion/>

                <div className="d-flex align-items-baseline justify-content-center">
                    <div className={classes.title1}>
                        Q & A
                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <div className={classes2.ph}>
                            Great! Now you read the story and we have some question for you to answer.
                        </div>
                        <br/>

                        <div className={classes2.border} style={{borderWidth:'1px'}}>

                            <p className={classes2.ph}>
                                {this.state.question}
                            </p>

                            <div className="d-flex justify-content-center align-content-start mt-3 mb-3">
                                <div className="flex-grow-1">
                                    <input
                                        id='final'
                                        className={`form-control form-control-lg ${classes.searchInput}`}
                                        placeholder="Answer question here"
                                        style={{
                                            borderStyle:'solid',
                                            borderWidth:'1px',
                                            borderColor:'#81c784',
                                            borderRadius:'15px',
                                            fontFamily:'\'Rajdhani\', sans-serif',
                                            fontSize:'22px',
                                        }}
                                        onChange={(e) => {
                                            const str=e.target.value
                                            this.setState({
                                                answer: str
                                            });
                                        }}
                                    />
                                </div>
                                <div className="ml-3">
                                    <MDBBtn
                                        tag="a" floating color="green" style={{margin:'6px'}}
                                        onClick={()=>{this.searchAnswer(this.state.answer)}}
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
                            <div>
                                <div className={classes2.body2}>{this.state.speechState}</div>
                                <div id='interim'></div>
                            </div>
                            <div className="mt-3">
                                <MDBCard
                                    size="8"
                                    text="white"
                                    className="py-1 px-3 w-100"
                                    style={{boxShadow:'none', borderRadius:'0px',backgroundColor:'#e8eaf6'}}
                                >
                                    {/*<p*/}
                                    {/*style={{borderStyle:'solid',borderColor:'#54B948',borderWidth:'0 0 0 0'}}*/}
                                    {/*className={classes2.pb1}*/}
                                    {/*>Hints/Feedback</p>*/}
                                    <p className={classes2.pb2}>{this.state.tag}</p>

                                    <p className={classes2.pb2}>{this.state.feedback}</p>
                                </MDBCard>
                            </div>
                        </div>
                        <br/>
                    </MDBCol>

                </MDBRow>
                <div style={{padding:'30px 0 250px 0'}}>
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes2.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/cover');}}
                        className={classes2.a}>Again &raquo;
                    </div>
                </div>
            </div>
        );
    }
}
