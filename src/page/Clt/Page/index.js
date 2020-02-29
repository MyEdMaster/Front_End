import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBModal, MDBInput, MDBModalFooter} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';

import classes from './index.module.css'

import {url} from "../../../tool/fetch-help";
import Joyride from 'react-joyride';
import {deleteMark} from "../../../tool/delete-mark";



export class CltPage extends React.Component {
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
        let from;
        if(this.props.location.state != null){

            from = this.props.location.state.from
            this.setState({
                jump:true
            })
        }
        const urlTo = from;

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
                    {/*<div className={classes.title1}>*/}
                        {/*FOIL: &nbsp;*/}
                    {/*</div>*/}
                    <div className={classes.title2}>
                        Combining Like Terms
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="2">
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        <Video url='https://myedmaster.oss-us-east-1.aliyuncs.com/comb.mp4'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <p className={classes.ph}>
                            Before we get into combining like terms, let’s refresh your memory about what algebraic terms and like terms are so we’re all on the same page
                        </p>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            What are algebraic terms?&nbsp;&nbsp;
                            <InlineMath>-5</InlineMath>,&nbsp;&nbsp;<InlineMath>2/3</InlineMath>,&nbsp;&nbsp;<InlineMath>4</InlineMath>
                        </div>
                        <p className={classes.ph}>
                            Algebraic terms can be numbers;
                        </p>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            letters that we call variables,<InlineMath>x</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            with numbers, &nbsp;&nbsp;<InlineMath>3x</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            exponents, &nbsp;&nbsp;<InlineMath>x^2</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            or a combination; &nbsp;&nbsp;<InlineMath>3x^2</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start mt-2`}>
                            they can also be the product of two or more variables, &nbsp;&nbsp;	<InlineMath>xy</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            with numbers,&nbsp;&nbsp;<InlineMath>-2xy</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            exponents,&nbsp;&nbsp; <InlineMath>x^2y^3</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            or a combination;&nbsp;&nbsp; <InlineMath>-2x^2y^2</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start mt-2`}>
                            and algebraic terms can also be the quotient of two or more variables,	&nbsp;&nbsp;<InlineMath>x/y</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            again with numbers,&nbsp;&nbsp; <InlineMath>3x/2y</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            exponents, &nbsp;&nbsp;<InlineMath>x^2/y^3</InlineMath>
                        </div>
                        <div className={`${classes.ph} d-flex justify-content-start`}>
                            or a combination thereof.&nbsp;&nbsp;<InlineMath>3x^2/2y^3</InlineMath>
                        </div>

                        <p className={`${classes.ph} mt-3`}>
                            When we see an algebraic term,  <InlineMath>3x^2</InlineMath>, the number in front of the variable is called the coefficient.  We already said that the letter is called the variable.  And the raised number to the right of the variable is called the exponent.
                        </p>
                        <p className={classes.ph}>
                            Although it looks like there’s no coefficient in this term, <InlineMath>-x^2</InlineMath>, we understand when there is no coefficient, that there’s a <InlineMath>1</InlineMath>.  So in this case, it would be a  <InlineMath>-1</InlineMath>.
                        </p>
                        <p className={classes.ph}>
                            In an algebraic expression, terms are separated by operation signs. To count the number of terms in an expression like this,   <InlineMath>2x^2y - 4a + 2m/3n + 9 </InlineMath>, first, find the operation signs.  In this case, we have a minus, a plus, and a plus.
                        </p>
                        <p className={classes.ph}>
                            Then, simply count the terms.  There are 4 terms in this expression.
                        </p>
                        <p className={classes.ph}>
                            The sign in front of a term goes with that term, and we understand that no sign in front of a term means it is a positive.  So the terms in this expression are
                        </p>
                        <div  className={`${classes.ph} d-flex justify-content-between mt-2`}>
                            <InlineMath>2x^2y</InlineMath><InlineMath>- 4a</InlineMath><InlineMath>2m/3n</InlineMath>and <InlineMath>9</InlineMath>.
                        </div>
                        <p className={classes.ph}>
                            What are like terms?
                            <br/>
                            Like terms contain the same variables with the same exponents.  So, when comparing two or more terms to determine if they are like, simply look at the variables and the exponents.
                        </p>
                        <p className={classes.ph}>
                            For example, given <InlineMath>3x</InlineMath> and <InlineMath>7x</InlineMath>, we look at the variable, which is x, and although we don’t write it, we know that each has an exponent of <InlineMath>1</InlineMath>.  So, since they have the same variable raised to the same exponent, we say they are like terms.
                        </p>
                        <p className={classes.ph}>
                            In these two terms,  <InlineMath>-2x^2y^3</InlineMath>     and      <InlineMath>5x^2y^3</InlineMath> , we see they have variables with exponents.  When we compare them, we see that both have an <InlineMath>x^2</InlineMath> and a <InlineMath>y^3</InlineMath>.  Since they have the same variables raised to the same exponents, we say they are like terms.
                            <br/>
                            Notice how the coefficients do not need to be the same in order to have like terms.
                        </p>
                        <p className={classes.ph}>
                            One way to think of like terms is with playing cards.
                        </p>
                        <img>

                        </img>
                        <p className={classes.ph}>
                            hink of the number as the coefficient, and the suit—hearts, diamonds, spades, and clubs—as the variable.  If you were asked to sort these into ‘like terms’, it might look something like this…
                        </p>
                        <img>

                        </img>
                        <p className={classes.ph}>
                            All the diamonds would go together, both spades, there’s only one heart and one club.  So, we sort them by their suit, which we said was the variable.  What might that look like mathematically?
                        </p>
                        <p className={classes.ph}>
                            To group these terms into like terms, we’ll look at the variables and exponents.
                        </p>
                        <div  className={`${classes.ph} d-flex justify-content-between mt-2`}>
                            <InlineMath>-2y</InlineMath><InlineMath>9xy</InlineMath><InlineMath>x^2y^3</InlineMath><InlineMath>3x^2</InlineMath>
                            <InlineMath>-2x^2y^3</InlineMath><InlineMath>4x^2y</InlineMath><InlineMath>-xy</InlineMath><InlineMath>5x^2y^3</InlineMath>
                        </div>
                        <p className={classes.ph}>
                            The first term has a <InlineMath>y</InlineMath>.  Since there are no other terms with just a <InlineMath>y</InlineMath>, we’ll set it off to the side.
                            The second term has an <InlineMath>xy</InlineMath>.  We notice that there is one other term with just <InlineMath>xy</InlineMath>, so we group those together.
                            The next term has an <InlineMath>x^2y^3</InlineMath>.  If we look, we see there are two other terms with an <InlineMath>x^2y^3</InlineMath>, so we’ll group those together.
                            That leaves us with an <InlineMath>x^2</InlineMath> term and an <InlineMath>x^2y</InlineMath> term.

                        </p>
                        <div  className={`${classes.ph} d-flex justify-content-between mt-2`}>
                            <InlineMath>9xy</InlineMath><InlineMath>x^2y^2</InlineMath><InlineMath>3x^2</InlineMath><InlineMath>4x^2y</InlineMath><InlineMath>-2y</InlineMath>
                        </div>
                        <div  className={`${classes.ph} d-flex justify-content-start mt-2`}>
                            <InlineMath>-xy</InlineMath>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<InlineMath>-2x^2y^3</InlineMath>
                        </div>
                        <div  className={`${classes.ph} d-flex justify-content-between mt-2`}>
                            <InlineMath>5x^2y^3</InlineMath>
                        </div>

                        <p className={classes.ph}>
                            Now that you know how to group like terms, let’s move on and start combining like terms.
                        </p>
                        <p className={classes.ph}>
                            Given an algebraic expression, <InlineMath>3x^2y + 2y - x^2y^2 - 4x^2y + 8y</InlineMath> , to combine like terms, we first have to find the like terms.
                            We have two <InlineMath>x^2y</InlineMath> terms that we will group together.  We have two y terms that we’ll group together.  And we have one <InlineMath>x^2y^2</InlineMath> term that we’ll set off to the side.

                        </p>
                        <div  className={`${classes.ph} d-flex justify-content-between`}>
                            <InlineMath>3x^2y-4x^2y</InlineMath><InlineMath>2y+8y</InlineMath><InlineMath>-x^2y^2</InlineMath>
                        </div>
                        <p className={classes.ph}>
                            Now, to combine like terms, we simply combine the coefficients by adding or subtracting.<br/>
                            <InlineMath>3 - 4 = -1</InlineMath> and we keep the <InlineMath>x^2y</InlineMath>  &nbsp;&nbsp;&nbsp;&nbsp;  <InlineMath>-1x^2y</InlineMath><br/>
                            <InlineMath>2 + 8 = +10</InlineMath> and we keep the <InlineMath>y</InlineMath>  &nbsp;&nbsp;&nbsp;&nbsp; <InlineMath>+10y</InlineMath><br/>
                            When we put all of that together, it looks something like this:<br/>
                            <InlineMath>-x^2y + 10y - x^2y^2</InlineMath><br/>
                            When writing algebraic terms, we typically write them alphabetically and in descending order of exponents, so the <InlineMath>-x^2y^2</InlineMath> term would go first.<br/>
                            <InlineMath>-x^2y^2 + 10y - x^2y</InlineMath>
                        </p>

                        <p className={classes.ph}>
                            Combining like terms is as simple as
                            --identifying the terms with the same variables and exponents
                            then
                            adding or subtracting the coefficients of those terms.
                            It is a process you will use repeatedly in nearly every area and level of mathematics.
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
                                        <div className="d-flex justify-content-start">
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
