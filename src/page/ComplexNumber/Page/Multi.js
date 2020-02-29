import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBModal, MDBInput, MDBModalFooter} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';

import classes from './index.module.css'
import {ComplexNumberMenu} from "./Menu";
import {url} from "../../../tool/fetch-help";
import Joyride from 'react-joyride';
import {deleteMark} from "../../../tool/delete-mark";

export class ComplexMult extends React.Component {
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
                    target: ".problem_list",
                    placement: 'bottom',
                    content: "Here is a complex number problem_list"
                },
                {
                    target: ".add",
                    placement: 'bottom',
                    content: "You can add your own problem_list"
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
    componentDidUpdate(prevProps) {
        this.mark = deleteMark(this.state.a, this.state.b, this.state.c, this.state.d)
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
        fetch(`${url}/complex_number/3`,option)
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
    };
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
                        Multiplication
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="2">
                        <ComplexNumberMenu/>
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        <Video url='https://myedmaster.oss-us-east-1.aliyuncs.com/multcomplex.mp4'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <p className={classes.ph}>
                            You probably know by now that a complex number is a combination of a real number and an imaginary number.
                            We generally write complex numbers in &nbsp;<InlineMath>a + bi</InlineMath>&nbsp; form,  where a is the real number and &nbsp;<InlineMath> bi </InlineMath>&nbsp; is the imaginary number.
                            For example, &nbsp;<InlineMath> + 7i </InlineMath>&nbsp;or <InlineMath> - 2i</InlineMath>.
                        </p>
                        <p className={classes.ph}>
                            Typically, whether adding, subtracting, multiplying or dividing complex numbers, we enclose each complex number inside parentheses like this
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
                            The process we use to multiply complex numbers is essentially the same process that we use when multiplying polynomials, but with a slight twist when working with more than one imaginary term.
                            <tr/><br/>
                            Let’s look at a simple problem.
                            <BlockMath>(4 - 2i)</BlockMath>
                            <tr/><br/>
                            Just like with polynomials, you have to distribute the &nbsp;<InlineMath> 23 </InlineMath>&nbsp;
                            to both the real part, the &nbsp;<InlineMath>4</InlineMath>, and the imaginary part, the &nbsp;<InlineMath> - 2i </InlineMath>, of the complex number.
                            <tr/><br/>
                            &nbsp;<InlineMath>23(4) = 92</InlineMath>&nbsp; and &nbsp;<InlineMath>(-2i) = -46i</InlineMath>
                            <tr/><br/>
                            Your answer then becomes a complex number consisting of the real part, &nbsp;<InlineMath>92</InlineMath>, and the imaginary part,&nbsp;<InlineMath>-46i</InlineMath>,
                            or &nbsp;<InlineMath>(92 - 46i)</InlineMath>.
                            <tr/><br/>
                            Let’s look at another problem.
                            <BlockMath>3i(5 + 4i)</BlockMath>
                            Notice now that the number outside the parentheses is an imaginary number.  You still have to distribute the 3i to both parts of the complex number
                            <tr/><br/>
                            &nbsp;<InlineMath>3i(5) = 15i</InlineMath>&nbsp;and &nbsp;<InlineMath>3i(4i) = 12i^2</InlineMath>&nbsp; Wait…what?  Here’s that little twist I mentioned earlier.
                            <tr/><br/>
                            Okay, so let’s look at this.  You’ve got &nbsp;<InlineMath>12i^2</InlineMath>.  Well, we can rewrite that as &nbsp;<InlineMath>12(i^2)</InlineMath>, right?
                            And what did we learn &nbsp;<InlineMath>i^2</InlineMath>&nbsp; is?  &nbsp;<InlineMath>-1</InlineMath>&nbsp;.
                            So now we have &nbsp;<InlineMath>12(-1)</InlineMath>, which gives you &nbsp;<InlineMath>-12</InlineMath>.  That becomes the real part of your complex number answer,
                            and the &nbsp;<InlineMath>15i</InlineMath>&nbsp; is the imaginary part &nbsp;<InlineMath>(-1 + 15i)</InlineMath>.  Here’s another one.
                            <BlockMath>-2i(3 - 3i)</BlockMath>
                            Distribute the &nbsp;<InlineMath>-2i</InlineMath>&nbsp; first.
                            <tr/><br/>
                            &nbsp;<InlineMath>-2i(3) = -6i</InlineMath>&nbsp;and &nbsp;<InlineMath>-2i(-3i) = 6i^2</InlineMath>,
                            which is &nbsp;<InlineMath>6(-1)</InlineMath>, or &nbsp;<InlineMath>-6</InlineMath>.  Your answer is&nbsp;<InlineMath>(-6 - 6i)</InlineMath>.
                            Probably the most important thing to remember when multiplying complex numbers is to be careful of signs when distributing and multiplying,
                            and again when simplifying any powers of &nbsp;<InlineMath>i</InlineMath>.
                            <tr/><br/>
                            Now we’ll move on to multiplying two complex numbers together.  Remember, the process is the same as multiplying two binomials,
                            but we have that extra twist associated with any powers of &nbsp;<InlineMath>i</InlineMath>.
                            <BlockMath>(3 - 2i)(4 + 3i)</BlockMath>
                            Just like multiplying two binomials, you can use the FOIL method when multiplying two complex numbers.
                            <br/><tr/>
                            First times first, &nbsp;<InlineMath>3(4) = 12</InlineMath>
                            <br/>
                            Outer times outer, &nbsp;<InlineMath>3(3i) = 9i</InlineMath>
                            <br/>
                            Inner times inner, &nbsp;<InlineMath>-2i(4) = -8i</InlineMath>&nbsp;  watch those signs!
                            <br/>
                            Last times last, &nbsp;<InlineMath>-2i(3i) = -6i^2</InlineMath>, or &nbsp;<InlineMath>-6(-1)</InlineMath> &nbsp;or &nbsp;<InlineMath>6</InlineMath>
                            <tr/><br/>
                            And then, just like with multiplying binomials, you combine like terms

                            &nbsp;<InlineMath>9i - 8i = i</InlineMath> &nbsp; and &nbsp;<InlineMath>12 + 6 = 18</InlineMath>, so your answer is &nbsp;<InlineMath>(18 + i)</InlineMath>.
                            It’s really pretty simple, as long as you pay attention to your signs.
                            <tr/><br/>
                            Let’s try another problem.
                            <BlockMath>(-5 + 2i) (2 - 4i)</BlockMath>
                            FOIL first.
                            <BlockMath>-5(2) = -10</BlockMath>
                            <BlockMath>-5(-4i) = 20i</BlockMath>
                            <BlockMath>2i(2) = 4i</BlockMath>
                            <BlockMath>2i(-4i) = -8i^22 = -8(-1) = 8.</BlockMath>
                            Combine like terms next.  &nbsp;<InlineMath>-10 + 8 = -2</InlineMath>&nbsp; &nbsp;<InlineMath>-10 + 8 = -2</InlineMath>&nbsp;
                            and &nbsp;<InlineMath>20i + 4i = 24i</InlineMath>.
                            And your answer is &nbsp;<InlineMath>(-2 + 24i)</InlineMath>.
                            <tr/><br/>
                            Here are some problems for you to try
                        </p>
                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(2 - 3i)(-1 + 6i)</BlockMath>
                                <BlockMath>(13 + 2i)(4 + i)</BlockMath>
                                <BlockMath>(8 - 5i)(3 - 5i)</BlockMath>
                                <BlockMath>(-4 + 16i)(4 - 4i)</BlockMath>
                                <BlockMath>(7 + 11i)(9 + 3i)</BlockMath>
                                <BlockMath>(42 - 7i)(1 + 2i)</BlockMath>
                                <BlockMath>(-3 - 3i)(-3 - 3i)</BlockMath>
                                <BlockMath>25(3 - 4i)</BlockMath>
                                <BlockMath>-3i(4 - 6i)</BlockMath>
                                <BlockMath>(10 - 8i)(6 + 5i)</BlockMath>
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
                                ({this.state.a} {this.mark[0]} {this.mark[1]}i) * ({this.state.c} {this.mark[2]} {this.mark[3]}i).
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
                                    Add your own problem in the form (a + bi) * (c + di). You can set the values of a, b, c, and d below.
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
                            onClick={() => {this.props.history.push('/complex/divi');}}
                        >Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </div>

        );
    }
}
