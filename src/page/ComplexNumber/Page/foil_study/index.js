import React from 'react';
import {Video} from "../../video-component/video";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBModal, MDBInput, MDBModalFooter} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';

import classes from './index.module.css'
import {url} from "../../../../tool/fetch-help";
import Joyride from 'react-joyride';
import {deleteMark} from "../../../../tool/delete-mark";
import {Nav} from "../../../Nav";


export class FoilPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal14: false,
            answers:[],
            a:'-6',
            b:'-4',
            c:'3',
            d:'5',
            value:'',
            step:1,
            hint:'',
            isRight:true,
            finish:false,
            finishText:'',
            select:'1',
            equation:'',
            jump:false,

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
        this.str =''
        this.neq = this.handle()


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

    post = (value)=>{
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
        fetch(`${url}/FOIL/${value}`,option)
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
    handle = (value) =>{
        switch (value) {
            case '1':
                let arr = new Array();
                arr.push(' ');
                arr.push('(');
                arr.push(this.state.a);
                arr.push('x');
                arr.push(this.mark[0]);
                arr.push(this.mark[1]);
                arr.push(')');
                arr.push('(');
                arr.push(this.state.c);
                arr.push('x');
                arr.push(this.mark[2]);
                arr.push(this.mark[3]);
                arr.push(')');
                arr.push(' ');
                let str = arr.join("");
                this.setState({
                    equation:str
                });
                break;
            case '2':
                let arr2 = new Array();
                arr2.push(' ');
                arr2.push('(');
                arr2.push(this.state.a);
                arr2.push('x');
                arr2.push(this.mark[0]);
                arr2.push(this.mark[1]);
                arr2.push('y');
                arr2.push(')');
                arr2.push('(');
                arr2.push(this.state.c);
                arr2.push('x');
                arr2.push(this.mark[2]);
                arr2.push(this.mark[3]);
                arr2.push(')');
                arr2.push(' ');
                let str2 = arr2.join("");
                this.setState({
                    equation:str2
                });
        }

    };



    render() {
        const { run,steps } = this.state;

        return (
            <div ref={node => this.node = node}>
                <Nav/>
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
                <div
                    className={classes.float}
                    onClick={()=>{
                        this.props.history.push('complex/divi')
                    }}
                >
                    Back to Complex Numbers →
                </div>

                <div className="d-flex align-items-baseline justify-content-center">
                    <div className={classes.title1}>
                        FOIL: &nbsp;
                    </div>
                    <div className={classes.title2}>
                        Multiplying Binomials
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="2">
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        <Video url='https://myedmaster.oss-us-east-1.aliyuncs.com/FOILvid2.mp4'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <p className={classes.ph}>
                            Multiplying Binomials Using FOIL
                            <br/>

                            What do you do when you have something that looks like this? <InlineMath>(2x+1)(3x-2)</InlineMath>?
                            <br/>
                            Or this <InlineMath>(-2x^2y^2-5xy^2)(x+3)</InlineMath>?
                            <br/>
                            Or this <InlineMath>(8x-4)(8x+4)</InlineMath>?
                            <br/>
                            These are all examples of multiplying two binomials, but exactly how are you supposed to do that?
                            Let’s take a look…
                            <br/>
                            Given <InlineMath>(x+1)(x-3)</InlineMath>, all you need to do is multiply everything in the first set of parentheses by everything in the second set of parentheses and then combine like terms.
                            <br/>
                            Boom.
                            <br/>
                            Easy, right?  Not so much.
                            <br/>
                            While that is exactly what you have to do, it’s much easier said than done. That’s why we use the FOIL Method.
                            <br/>
                            FOIL?  Yes, but not the tin foil kind of foil.
                            FOIL stands for First, Outer, Inner, Last, and when applied to multiplying two binomials


                        </p>
                        <br/>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                It looks like this:
                                <br/>
                                Using the example from earlier, <InlineMath>(x+1)(x-3)</InlineMath>,
                                <br/>
                                The F refers to the First term in each binomial 		<InlineMath>(x+1)(x-3)</InlineMath>
                                <br/>
                                The O refers to the Outer terms of the binomials	<InlineMath>(x+1)(x-3)</InlineMath>
                                <br/>
                                The I refers to the Inside terms of the binomials		<InlineMath>(x+1)(x-3)</InlineMath>
                                <br/>
                                And the L refers to the Last term in each binomial	<InlineMath>(x+1)(x-3)</InlineMath>
                            </p>
                        </MDBRow>
                        <br/>
                        <p className={classes.ph}>
                            It’s that simple.

                            Here’s how it works.
                            Step 1: Multiply

                            Again, given <InlineMath>(x+1)(x-3)</InlineMath>

                            F tells us to multiply the first terms	<InlineMath>x</InlineMath> times <InlineMath>x</InlineMath> which equals <InlineMath>x^2</InlineMath> and we write that down first
                            O tells us to multiply the outer terms	<InlineMath>x</InlineMath> times <InlineMath>-3</InlineMath> equals <InlineMath>-3x</InlineMath> and we write that next
                            I tells us to multiply the inner terms	<InlineMath>1</InlineMath> times <InlineMath>x</InlineMath> gives us <InlineMath>x</InlineMath> and we write that down
                            And L tells us to multiply the last terms <InlineMath>1</InlineMath> times <InlineMath>-3</InlineMath> equals <InlineMath>-3</InlineMath> and we write that last
                        </p>
                        <p className={classes.ph}>
                            <BlockMath>x^2-3x+x-3</BlockMath>
                            F   O   I   L
                        </p>
                        <p className={classes.ph}>
                            Once you have all four FOIL terms, you’re ready for Step 2.

                            In Step 2, you combine like terms.
                            Remember…you’re adding or subtracting now.

                            <BlockMath>x^2-3x+x-3</BlockMath>

                            There’s only one squared term, so we just bring it down.
                            Much of the time, the Outer and Inner terms will be like terms, so you can combine them and bring them down.
                            And there’s nothing to combine with the last term, so it comes down and you’ve got your answer

                            <BlockMath>x^2-2x-3</BlockMath>

                            Let’s look at some examples.
                            <BlockMath>(2x+1)(3x-2)</BlockMath>
                            In this problem,
                        </p>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                First times first<InlineMath>2x</InlineMath>times <InlineMath>3x</InlineMath> is <InlineMath>6x^2</InlineMath><br/>
                                Outer times outer	<InlineMath>2x</InlineMath> times <InlineMath>-2</InlineMath> is <InlineMath>-4x</InlineMath><br/>
                                Inner times inner	<InlineMath>1</InlineMath> times <InlineMath>3x</InlineMath> is <InlineMath>3x</InlineMath><br/>
                                And last times last	<InlineMath>1</InlineMath> times <InlineMath>-2</InlineMath> is <InlineMath>-2</InlineMath><br/>
                                <BlockMath>6x^2-4x+3x-2</BlockMath>

                            </p>
                        </MDBRow>
                        <p className={classes.ph}>

                            The outers and inners combine to give you <InlineMath>-x</InlineMath>, leaving you with <InlineMath>6x^2-x-2</InlineMath> as your answer.

                        </p>
                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                In the second example, <InlineMath>(5x-4)(6x-3)</InlineMath><br/>
                                First times first	<InlineMath>5x</InlineMath> times <InlineMath>6x</InlineMath> is <InlineMath>30x^2</InlineMath><br/>
                                Outer times outer	<InlineMath>5x</InlineMath> times <InlineMath>-3</InlineMath> is <InlineMath>-15x</InlineMath><br/>
                                Inner times inner	<InlineMath>-4</InlineMath> times <InlineMath>6x</InlineMath> is <InlineMath>-24x</InlineMath><br/>
                                And last times last	<InlineMath>-4</InlineMath> times <InlineMath>-3</InlineMath> is <InlineMath>+12</InlineMath><br/>

                                <BlockMath>30x^2-15x-24x+12</BlockMath>
                            </p>
                        </MDBRow>
                        <p className={classes.ph}>
                            Again, the outers and inners combine to give you <InlineMath>-39x</InlineMath>, so your answer is <InlineMath>30x^2-39x+12</InlineMath>

                            Notice how both answers are trinomials—they each have 3 terms.

                            Most of the time, the product of two binomials will be a trinomial. However, that’s not always the case.
                            Look at this example.

                        </p>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(2x+1)(3y-2)</BlockMath>
                                First times first	<InlineMath>2x</InlineMath> times <InlineMath>3y</InlineMath> equals <InlineMath>6xy</InlineMath><br/>
                                Outer times outer	<InlineMath>2x</InlineMath> times <InlineMath>-2</InlineMath> equals <InlineMath>-4x</InlineMath><br/>
                                Inner times inner	<InlineMath>1</InlineMath> times <InlineMath>3y</InlineMath> equals <InlineMath>3y</InlineMath><br/>
                                And last times last	<InlineMath>1</InlineMath> times <InlineMath>-2</InlineMath> equals <InlineMath>-2</InlineMath>

                                <BlockMath>6xy-4x+3y-2</BlockMath>

                            </p>
                        </MDBRow>
                        <p className={classes.ph}>
                            Notice there are no like terms to combine, so your answer has 4 terms instead of 3.
                        </p>
                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                In the second example, <InlineMath>(3x+2)(3x-2)</InlineMath><br/>
                                First times first		<InlineMath>3x</InlineMath> times <InlineMath>3x</InlineMath> equals <InlineMath>9x^2</InlineMath><br/>
                                Outer times outer	<InlineMath>3x</InlineMath> times <InlineMath>-2</InlineMath> equals <InlineMath>-6x</InlineMath><br/>
                                Inner times inner	<InlineMath>2</InlineMath> times <InlineMath>3x</InlineMath> equals <InlineMath>6x</InlineMath><br/>
                                And last times last	<InlineMath>2</InlineMath> times <InlineMath>-2</InlineMath> equals <InlineMath>-4</InlineMath>

                                <BlockMath>9x^2-6x+6x-4</BlockMath>
                                <BlockMath>9x^2-4</BlockMath>

                            </p>
                        </MDBRow>
                        <p className={classes.ph}>
                            The outer and inner terms cancel out each other and leave you with a binomial as your answer.

                            Here are some problems for you to try. You can pause the video, do the problems, and when you’re done, resume the video and check your work.


                        </p>
                        <div className="problem"></div>
                        <MDBRow center>
                            <MDBCol className="add">
                                <MDBCard
                                    size="8"
                                    color="blue-grey"
                                    text="white"
                                    className="py-3 px-3 w-100"
                                    style={{boxShadow:'none', borderRadius:'0'}}
                                >
                                    <div className='d-flex justify-content-between'>
                                        <div className={`${classes.pb}`}>Problem</div>
                                        <div className='mr-3'>
                                            <select
                                                className="browser-default"
                                                size = 'sm'
                                                onChange={(e)=>{
                                                    this.handle(e.target.value);
                                                    this.setState({
                                                        // equation:this.str,
                                                        select:e.target.value,
                                                        answers:[],
                                                        finish:false,
                                                        step:1,
                                                    });
                                                }}
                                            >
                                                <option>Choose your format</option>
                                                <option value="1">(ax+b)(cx+d)</option>
                                                <option value="2">(ax+by)(cx+d)</option>
                                            </select>
                                        </div>
                                    </div>




                                    <p
                                        className={`${classes.pb2}`}
                                        style={{borderStyle:'solid',borderBottomColor:'#9e9e9e', borderWidth:'0 0 1px 0'}}
                                    >
                                        Solve the following:
                                        {this.state.equation}
                                        Begin your work by first rewriting the problem in 'Step1' in the worksheet.
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
                                            Add your own problem in the chosen format. You can set the values of a, b, c, and d below.
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
                                                this.handle(this.state.select);
                                                this.setState({
                                                    // equation:this.str,
                                                    modal14:false,
                                                    answers:[],
                                                    finish:false,
                                                    step:1,
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

                            <MDBCol>
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
                                                    onClick={()=>{this.post(this.state.select)}}
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
                        <tr/><br/>
                        <p className={classes.ph}>
                            Using the FOIL method for multiplying binomials
                            Helps ensure you multiply both terms in the first binomial by both terms in the second,
                            Helps you keep your work organized as you solve the problem,
                            And makes it easier to review your work for errors,

                            So next time you’re multiplying two binomials, wrap things up quickly and easily with FOIL!

                        </p>
                    </MDBCol>
                </MDBRow>

                {/*<br/>*/}
                {/*<MDBRow center>*/}
                {/*<MDBCol size="2">*/}
                {/*<MDBBtn*/}
                {/*color="deep-purple lighten-1"*/}
                {/*className={`${classes.btn} w-100 mt-3`}*/}
                {/*onClick={() => {this.props.history.goBack();}}*/}
                {/*>Previous Lesson</MDBBtn>*/}
                {/*</MDBCol>*/}
                {/*<MDBCol size="2">*/}
                {/*<MDBBtn*/}
                {/*color="deep-purple lighten-1"*/}
                {/*className={`${classes.btn} w-100 mt-3`}*/}
                {/*onClick={() => {this.props.history.push('/complex/subt');}}*/}
                {/*>Next Lesson</MDBBtn>*/}
                {/*</MDBCol>*/}
                {/*</MDBRow>*/}

            </div>

        );
    }
}
