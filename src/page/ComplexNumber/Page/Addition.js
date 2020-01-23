import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBModal, MDBInput, MDBModalFooter} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';

import classes from './index.module.css'
import {ComplexNumberMenu} from "./Menu";
import {url} from "../../../tool/fetch-help";
import {deleteMark} from "../../../tool/delete-mark";
import Joyride from 'react-joyride';


export class ComplexAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal14: false,
            answers:[],
            a:'-6',
            b:'-4',
            c:'2',
            d:'5',
            value:'',
            step:1,
            hint:'',
            isRight:true,
            finish:false,
            finishText:'',

            steps: [
                {
                    target: ".problem",
                    placement: 'bottom',
                    content: "Here is a complex number problem"
                },
                {
                    target: ".add",
                    placement: 'bottom',
                    content: "You can add your own problem"
                },
                {
                    target: ".submit",
                    placement: 'bottom',
                    content: "Submit your answer step by step (you could skip first step）"
                }
            ]
        };
        this.mark = deleteMark(this.state.a, this.state.b, this.state.c, this.state.d)

    }

    componentDidMount() {
        this.node.scrollIntoView();
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };

    post = ()=>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({
                "A":this.state.a,
                "B":this.state.b,
                "C":this.state.c,
                "D":this.state.d,
                "step":this.state.step.toString(),
                "answer":this.state.value,
            })
        };
        fetch(`${url}/complex_number/1`,option)
            .then(response=>response.json())
            .then(answer=>{
                this.setState({
                    hint:answer.content
                })
                if (answer.type === '0'){
                    this.setState({
                        isRight:false
                    })
                }
                else if (answer.type === '1'){
                    let arr = this.state.answers;
                    let step= answer.step;
                    arr.push([step, this.state.value])
                    this.setState({
                        answers:arr,
                        step:step,
                        isRight:true,
                        value:''
                    })
                }
                else if(answer.type === '2'){
                    let arr = this.state.answers;
                    let step= answer.step;
                    arr.push([step, this.state.value])
                    this.setState({
                        answers:arr,
                        step:step,
                        isRight:true,
                        value:'',
                        finish:true,
                        finishText:'Finished! You got it.'
                    })
                }
            })
    }


    render() {
        const { run,steps } = this.state;
        return (
            <div ref={node => this.node = node}>
                <Joyride
                    steps={steps}
                    continuous={true}
                    //scrollToFirstStep={true}
                    scrollToSteps={false}
                    //showOverlay={false}
                    //showStepsProgress={true}
                    //run={run}
                    styles={{
                        options: {
                            primaryColor: '#66bb6a',
                            zIndex: 1000,
                        }
                    }}
                />

                <div className="d-flex align-items-baseline justify-content-center">
                    <div className={classes.title1}>
                        COMPLEX NUMBERS: &nbsp;
                    </div>
                    <div className={classes.title2}>
                       Addition
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="2">
                        <ComplexNumberMenu/>
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        <Video url='https://myedmaster.oss-us-east-1.aliyuncs.com/addcomplex.mp4'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <p className={classes.ph}>
                            Adding <span className={classes.high}>complex numbers</span> is actually rather straightforward and simple.
                            <br/>
                            A complex number is a combination of a <span className={classes.high}>real number</span> and an
                            &nbsp;<span className={classes.high}>imaginary number</span>. We generally write <span className={classes.high}>complex numbers </span>
                            in &nbsp;<InlineMath>a + bi</InlineMath>&nbsp;form, where &nbsp;<InlineMath>a</InlineMath>&nbsp; is the
                            &nbsp;<span className={classes.high}>real number</span> and
                            &nbsp;<InlineMath>bi</InlineMath>&nbsp;is the <span className={classes.high}>imaginary number</span>. For example,
                            &nbsp;<InlineMath>3 + 7i</InlineMath>&nbsp;or
                            &nbsp;<InlineMath>5 - 2i</InlineMath>&nbsp;.
                            <tr/>
                            <br/>
                            Typically, whether adding, subtracting, multiplying or dividing complex numbers, we enclose each complex number inside parentheses like this:

                        </p>
                        <br/>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(6 - 5i) + (2 + 3i)</BlockMath>
                                <BlockMath>(4 + 8i) - (3 - 2i)</BlockMath>
                                <BlockMath>(7 - 4i)(5 + 9i)</BlockMath>
                                <BlockMath>(8 - 6i)/(1- 3i)</BlockMath>
                            </p>
                        </MDBRow>
                        <br/>
                        <p className={classes.ph}>
                            When adding or subtracting complex numbers, you can only combine like terms, meaning you can only combine the real part of each number together and the imaginary part of each number together.
                            <tr/><br/>
                            So, using the problem &nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>&nbsp;
                            , you would first combine the real parts, the&nbsp;<InlineMath>6</InlineMath>&nbsp;and the
                            &nbsp;<InlineMath>2</InlineMath>&nbsp;, to get&nbsp;<InlineMath>8</InlineMath>&nbsp;
                            ; and then you would combine the imaginary parts, the
                            &nbsp;<InlineMath>-5i</InlineMath>&nbsp;and the &nbsp;<InlineMath>3i</InlineMath>&nbsp;, to get
                            &nbsp;<InlineMath>- 2i</InlineMath>&nbsp;. This leaves you with the complex number
                            &nbsp;<InlineMath>8 - 2i</InlineMath>&nbsp;.
                            <tr/><br/>

                            On a side note, since we are dealing with addition, you could also simply rewrite the problem without the parentheses,
                            &nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>&nbsp;, and then combine like terms. That’s completely legal in the case of an addition problem, but keep in mind it doesn’t work exactly like that for subtraction. We’ll talk about that when we discuss subtracting complex numbers.
                            <tr/><br/>
                            Let’s try another.
                            <tr/><br/>
                            Given
                            &nbsp;<InlineMath>(-3 + 2i) + (7 - i)</InlineMath>&nbsp;. Combine the real parts,
                            &nbsp;<InlineMath>-3 + 7</InlineMath>&nbsp;, to get&nbsp;<InlineMath>4</InlineMath>&nbsp;
                            . Then combine the imaginary parts,&nbsp;<InlineMath>2i - i</InlineMath>&nbsp;, to get
                            &nbsp;<InlineMath>i</InlineMath>&nbsp;. You are left with the complex number
                            &nbsp;<InlineMath>4 + i</InlineMath>&nbsp;.
                            <tr/><br/>
                            Nothing to it, is there? Here are some more for you to try.
                            <tr/><br/>
                        </p>
                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(6 - i) + (-4 + 5i)</BlockMath>
                                <BlockMath>(8 - 12i) + (-4 + 12i)</BlockMath>
                                <BlockMath>(21 + 4i) +(13 + 7i)</BlockMath>
                                <BlockMath>(-15 + 2i) + (-7 - 8i)</BlockMath>
                                <BlockMath>(-9 - 3i) + (6 - 8i)</BlockMath>
                                <BlockMath>(4 - 28i) + (16 + 25i)</BlockMath>
                                <BlockMath>(1 - 9i) + (-4 + 2i)</BlockMath>
                                <BlockMath>(31 - 13i) + (-31 + 13i)</BlockMath>
                                <BlockMath>(5 + 10i) +(-6 - 9i)</BlockMath>
                            </p>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <div className="problem"></div>
                <MDBRow center>
                    <MDBCol size="8" className="add">
                        <MDBCard
                            size="8"
                            color="blue-grey"
                            text="white"
                            className="py-3 px-3 w-100"
                            style={{boxShadow:'none', borderRadius:'0'}}
                        >


                            <p className={`${classes.pb}`}>Problem</p>

                            <p
                                className={`${classes.pb2}`}
                                style={{borderStyle:'solid',borderBottomColor:'#9e9e9e', borderWidth:'0 0 1px 0'}}
                            >
                                Solve the following:
                                ({this.state.a} {this.mark[0]} {this.mark[1]}i) + ({this.state.c} {this.mark[2]} {this.mark[3]}i).
                                Begin your work by first rewriting the problem in 'Step 1' in the worksheet.
                                <tr/><br/>
                            </p>
                            <p
                                className={`${classes.pb3} add`}

                                onClick={this.toggle(14)}
                            >
                                ADD YOUR OWN PROBLEM
                            </p>
                        </MDBCard>

                        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg" centered>
                            <div className="p-3">
                                <div
                                    toggle={this.toggle(14)}

                                    style={{
                                        fontFamily:'\'Roboto\',sans-serif',
                                        fontSize:'28px',
                                        fontWeight:'bolder'
                                    }}
                                >
                                    Add Your Own Problem
                                </div>
                                <br/>
                                <div
                                    style={{
                                        fontFamily:'\'Roboto\',sans-serif',
                                        fontSize:'16px',
                                        fontWeight:'bolder'
                                    }}
                                >
                                    Add your own problem in the form (a + bi) + (c + di). You can set the values of a, b, c, and d below.
                                </div>
                                <div className="d-flex justify-content-between">
                                    <MDBInput
                                        onChange={(e) => {
                                            this.setState({
                                                a: e.target.value
                                            });
                                        }}

                                        label="a" className="mr-3"  size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                    />
                                    <MDBInput
                                        onChange={(e) => {
                                            this.setState({
                                                b: e.target.value
                                            });
                                        }}
                                        label="b" className="mr-3" size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                    />
                                    <MDBInput
                                        onChange={(e) => {
                                            this.setState({
                                                c: e.target.value
                                            });
                                        }}
                                        label="c" className="mr-3 " size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                    />
                                    <MDBInput
                                        onChange={(e) => {
                                            this.setState({
                                                d: e.target.value
                                            });
                                        }}
                                        label="d" size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                    />
                                </div>
                            </div>

                            <MDBModalFooter>
                                <MDBBtn
                                    color="deep-purple"
                                    size="md"
                                    onClick={this.toggle(14)}
                                    style={{
                                        fontFamily:'\'Roboto\',sans-serif',
                                        fontSize:'12px',
                                        fontWeight:'bolder'
                                    }}
                                >Cancel
                                </MDBBtn>
                                <MDBBtn
                                    className="orange accent-2"
                                    size="md"
                                    onClick={()=>{
                                        this.setState({
                                            modal14:false,
                                            answers:[],
                                            finish:false,
                                            step:1
                                        })
                                    }}
                                    style={{
                                        fontFamily:'\'Roboto\',sans-serif',
                                        fontSize:'12px',
                                        fontWeight:'bolder'
                                    }}
                                >Set</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>

                    </MDBCol>
                </MDBRow>
                <div className="submit mt-5"></div>
                <MDBRow center>

                    <MDBCol size="8" >
                        <div className={`${classes.worksheet} px-3 py-3`}>
                            <label className={classes.ws}>
                                Worksheet
                            </label>
                            <div
                                className="px-3 pt-3"
                            >
                                {this.state.answers.map((item, index)=>{
                                    return<div
                                        key={index}
                                        className="py-2 d-flex align-items-baseline"
                                        style={{
                                            border:'solid',
                                            borderColor:'#388e3c',
                                            borderWidth:'0 0 2px 0',
                                            fontFamily:'\'Roboto\',sans-serif',
                                            fontSize:'18px',
                                            fontWeight:'bolder'
                                        }}
                                    >
                                        <span style={{fontWeight:'bold',color:'#388e3c'}}>Step{item[0]-1}</span> &nbsp;{item[1]}

                                    </div>
                                })}
                            </div>
                            {!this.state.finish?(
                                <div className="px-3 d-flex align-items-baseline">

                                    <div className="flex-grow-1">

                                        <MDBInput
                                            label={`Step ${this.state.step.toString()}`}
                                            className="mr-3 submit"
                                            size="sm"
                                            value={this.state.value}
                                            style={this.state.isRight ?{
                                                border:'solid',
                                                borderColor:'#81c784',
                                                borderWidth:'0 0 2px 0',
                                                fontFamily:'\'Roboto\',sans-serif',
                                                fontSize:'18px'
                                            }:{
                                                border:'solid',
                                                borderColor:'#d32f2f',
                                                borderWidth:'0 0 2px 0',
                                                fontFamily:'\'Roboto\',sans-serif',
                                                fontSize:'18px'
                                            }}
                                            onChange={(e) => {
                                                this.setState({
                                                    value: e.target.value
                                                });
                                            }}
                                        />

                                    </div>
                                    <div className="ml-4">
                                        <MDBBtn
                                            tag="a" floating className=" green lighten-2 m-0"
                                            onClick={()=>{this.post()}}
                                        >
                                            <MDBIcon icon="clipboard-check" />
                                        </MDBBtn>
                                        {/*<MDBBtn*/}
                                        {/*tag="a" floating className=" orange lighten-2"*/}
                                        {/*>*/}
                                        {/*<MDBIcon icon="microphone" />*/}
                                        {/*</MDBBtn>*/}
                                    </div>

                                </div>
                            ):(
                                <p className={classes.pb4}>Finished! You got it</p>
                            )}



                            <div className="px-3 pt-3">
                                <MDBCard
                                    size="8"
                                    text="white"
                                    className="py-3 px-3 w-100 green lighten-3"
                                    style={{boxShadow:'none', borderRadius:'0'}}
                                >
                                    <p className={classes.pb}>Hints/Feedback</p>
                                    <p className={classes.pb2}>{this.state.hint}</p>
                                    {/*<MDBRow center>*/}
                                    {/*<MDBBtn tag="a" floating disabled className="grey lighten-1">*/}
                                    {/*<MDBIcon icon="angle-left" />*/}
                                    {/*</MDBBtn>*/}
                                    {/*<MDBBtn tag="a" floating disabled className="grey lighten-1">*/}
                                    {/*<MDBIcon icon="angle-right" />*/}
                                    {/*</MDBBtn>*/}
                                    {/*</MDBRow>*/}
                                </MDBCard>
                            </div>

                        </div>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow center>
                    <MDBCol size="2">
                        <MDBBtn
                            color="deep-purple lighten-1"
                            className={`${classes.btn} w-100 mt-3`}
                            onClick={() => {this.props.history.goBack();}}
                        >Previous Lesson</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn
                            color="deep-purple lighten-1"
                            className={`${classes.btn} w-100 mt-3`}
                            onClick={() => {this.props.history.push('/complex/subt');}}
                        >Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </div>

        );
    }
}
