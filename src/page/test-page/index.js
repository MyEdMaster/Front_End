import React from "react";
// import {Test} from "../../Playground/Test";
// import {Speech} from "../SpeechRecog-demo"
// import {SpeechSyn} from "../SpeechSyn-demo";
import {MDBBtn, MDBCol, MDBRow} from "mdbreact";
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';
// import {handleSyn} from "../RRH/Component/speech-syn";
// import {cancelSyn} from "../RRH/Component/speech-syn";
import bbw from '../RRH/Lib/basket.jpg';
import 'hopscotch/dist/css/hopscotch.css';
import Floater from 'react-floater';
import classes from "../ComplexNumber/Page/index.module.css";
import {BlockMath, InlineMath} from "react-katex";



export class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [
                {
                    target: ".p1",
                    placement: 'top',
                    content: "Here is a complex number problem"
                },
                {
                    target: ".p2",
                    placement: 'top',
                    content: "You can add your own problem"
                },
                {
                    target: ".p3",
                    placement: 'top',
                    content: "Submit your answer step by step (you could skip first step）"
                }
            ]
        };

    }


    render() {
        const { steps } = this.state;



        return (

            <div>
                <div>
                    <Joyride
                        steps={steps}
                        continuous={true}
                        scrollToFirstStep={true}
                        scrollToSteps={false}
                        styles={{
                            options: {


                                primaryColor: '#7e57c2',
                                zIndex: 1000,
                            }
                        }}
                    />
                    <MDBRow>
                        <MDBCol size="3">

                        </MDBCol>
                        <MDBCol size="6">
                            <p className={classes.ph}>
                                Dividing complex numbers can be a lot more challenging.
                                <tr/><br/>
                                A <span className={classes.high}>complex number</span> is a combination of a <span className={classes.high}>real number</span> and an <span className={classes.high}>imaginary number</span>.
                                We generally write <span className={classes.high}>complex numbers</span> in
                                &nbsp;<InlineMath>a + bi</InlineMath>&nbsp;form, where  &nbsp;<InlineMath>a</InlineMath>&nbsp;
                                is the real number and&nbsp;<InlineMath>bi</InlineMath>&nbsp;is the imaginary number. For example,
                                &nbsp;<InlineMath>3 + 7i</InlineMath>&nbsp;or&nbsp;<InlineMath>5 - 2i</InlineMath>&nbsp;.
                                <tr/><br/>
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
                                Dividing complex numbers can be a lot more challenging.
                                <tr/><br/>
                                When adding or subtracting complex numbers, you can only combine <span className={classes.high}>like terms</span>,
                                meaning you can only combine the real part of each number together and the imaginary part of each number together.
                                <tr/><br/>
                                So, using the problem&nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>
                                , you would first combine the real parts, the&nbsp;<InlineMath>6</InlineMath>&nbsp;
                                and the&nbsp;<InlineMath>2</InlineMath>&nbsp;, to get
                                &nbsp;<InlineMath>8</InlineMath>&nbsp;; and then you would combine the imaginary parts, the
                                &nbsp;<InlineMath>-5i</InlineMath>&nbsp;and the&nbsp;<InlineMath>3i</InlineMath>&nbsp;,
                                to get&nbsp;<InlineMath>-2i</InlineMath>&nbsp;. This leaves you with the complex number
                                &nbsp;<InlineMath>8 - 2i</InlineMath>&nbsp;.
                                <tr/><br/>

                                On a side note, since we are dealing with addition, you could also simply rewrite the problem without the parentheses,
                                &nbsp;&nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>, and then combine like terms.
                                That’s completely legal in the case of an addition problem, but keep in mind it doesn’t work exactly like that for subtraction. We’ll talk about that when we discuss subtracting complex numbers.
                                <tr/><br/>
                                Let’s try another.
                                <tr/><br/>

                                Given
                                &nbsp;<InlineMath>(-3 + 2i) + (7 - i)</InlineMath>&nbsp;. Combine the real parts,
                                &nbsp;<InlineMath>-3 + 7</InlineMath>&nbsp;, to get&nbsp;<InlineMath>4</InlineMath>.
                                Then combine the imaginary parts,&nbsp;<InlineMath>2i - i</InlineMath>,
                                to get&nbsp;<InlineMath>i</InlineMath>. You are left with the complex number
                                &nbsp;<InlineMath>4 + i</InlineMath>.
                                <tr/><br/>

                                Nothing to it, is there? Here are some more for you to try.
                                <tr/><br/>

                                Before we get into dividing complex numbers, you’ll need to stretch your brain a bit and
                                think back to that thing called a <span className={classes.high}>conjugate</span>.
                                <tr/><br/>
                                <p className="p1">
                                    P1111111
                                    To form the conjugate of a <span className={classes.high}>binomial</span>, you simply change the sign between the two terms. Given the binomial
                                    &nbsp;<InlineMath>2 + 5x</InlineMath>, the conjugate would be
                                    &nbsp;<InlineMath>2 - 5x</InlineMath>. Given the binomial
                                    &nbsp;<InlineMath>3 - 8y</InlineMath>, the conjugate would be
                                    &nbsp;<InlineMath>3 + 8y</InlineMath>.
                                    <tr/><br/>
                                    And, since a complex number is also a binomial comprised of a real term and an
                                    <span className={classes.high}>imaginary term</span>, given the complex number
                                    &nbsp;<InlineMath>5 - 3i</InlineMath>, the complex conjugate would be
                                    &nbsp;<InlineMath>5 + 3i</InlineMath>.
                                </p>

                                <tr/><br/>

                                Easy. Alright, now let’s get back to dividing complex numbers.
                                <tr/><br/>

                                The first step in dividing complex numbers is to multiply the numerator and denominator by the complex conjugate of the denominator. Don’t panic, it’s actually very simple. Take a look.
                                <BlockMath>(3 -2i)/(5 + 4i)</BlockMath>
                                <tr/><br/>
                                To form the conjugate of the denominator,
                                &nbsp;<InlineMath>(5 + 4i)</InlineMath>, simply change the sign between the two terms and get
                                &nbsp;<InlineMath>(5 - 4i)</InlineMath>. Now, multiply numerator and denominator by the conjugate,
                                &nbsp;<InlineMath>(5 - 4i)</InlineMath>.
                                <tr/><br/>

                                <BlockMath>(3 -2i)(5 - 4i)/(5 + 4i)(5 - 4i)</BlockMath>
                                <tr/><br/>

                                FOIL the numerator:
                                &nbsp;<InlineMath>15 - 12i - 10i + 8i^2)</InlineMath>&nbsp;which becomes
                                &nbsp;<InlineMath>-8</InlineMath>&nbsp;and combine like terms to get
                                &nbsp;<InlineMath>(7 - 22i)</InlineMath>.
                                <tr/><br/>

                                FOIL the denominator:
                                &nbsp;<InlineMath>25 - 20i + 20i - 16i^2)</InlineMath>&nbsp;
                                which becomes &nbsp;<InlineMath>16</InlineMath>, and combine like terms to get
                                &nbsp;<InlineMath>41</InlineMath>.
                                <tr/><br/>

                                You end up with
                                &nbsp;<InlineMath>(7 - 22i)/41</InlineMath>
                                , but since complex numbers are technically two separate parts and therefore, shouldn’t
                                share the <span className={classes.high}>denominator</span>, we split the answer into two parts like this
                                <tr/><br/>
                                <BlockMath>7/41 - (21/44)i</BlockMath>.
                                <tr/><br/>
                                We’ll do another problem.
                                <tr/><br/>
                                <BlockMath>(4 + 6i)/(-1 -3i)</BlockMath>.
                                <tr/><br/>


                                First, multiply both <span className={classes.high}>numerator</span> and <span className={classes.high}>denominator</span> by the conjugate of the denominator, which is
                                &nbsp;<InlineMath>(-1 + 3i)</InlineMath>. Notice how the negative 1 does not change—only
                                the sign between the two terms changes.
                                <tr/><br/>
                                <BlockMath>(4 + 6i)(-1 -3i)/(-1 - 3i)(-1 + 3i)</BlockMath>.
                                <tr/><br/>

                                FOIL the numerator:
                                &nbsp;<InlineMath>-4 + 12i - 6i + 18i^2</InlineMath>&nbsp;
                                which becomes&nbsp;<InlineMath>-18</InlineMath>&nbsp;and combine like terms to get
                                &nbsp;<InlineMath>(-22 + 12i)</InlineMath>.
                                <tr/><br/>

                                FOIL the denominator:
                                &nbsp;<InlineMath>1 - 3i + 3i -9i^2</InlineMath>&nbsp;
                                which becomes&nbsp;<InlineMath>9</InlineMath>&nbsp;
                                and combine like terms to get&nbsp;<InlineMath>10</InlineMath>&nbsp;.
                                <tr/><br/>
                                You’re left with
                                &nbsp;<InlineMath>-22 + 12i/10</InlineMath>&nbsp;
                                which when split becomes
                                &nbsp;<InlineMath>-22/10 +(12/10)i</InlineMath>; . However, you can further reduce each fraction,
                                so your final answer is
                                <tr/><br/>
                                <BlockMath>-11/5 + (6/5)i</BlockMath>.
                                <tr/><br/>
                                Here are some problems for you to try.
                                <tr/><br/>
                            </p>

                            <MDBRow className={classes.border} center>
                                <p className={`{classes.ph2} p2`}>
                                    <BlockMath>(3 - 2i)/(-4 - 7i)</BlockMath>
                                    <BlockMath>(5 + 4i)/(2 + i)</BlockMath>
                                    <BlockMath>(6 - 3i)/(9 + 3i)</BlockMath>
                                    <BlockMath>(1 - 2i)/(5 - 8i)</BlockMath>
                                    <BlockMath>(-7 + 4i)/(2 - 4i)</BlockMath>
                                    <BlockMath>(3 + 3i)/(-3 - 3i)</BlockMath>
                                    <BlockMath>(5 + i)/(4 - 5i)</BlockMath>

                                </p>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </div>


                {/*<div data-intro='Hello step one!'>*/}
                    {/*<button onClick={()=>{*/}
                        {/*introJs(".introduction-farm").start();*/}
                    {/*}}>*/}

                    {/*</button>*/}
                    {/*Hello world*/}
                {/*</div>*/}
                {/*<div className="app">*/}
                    {/*<Joyride*/}
                        {/*steps={steps}*/}
                        {/*styles={{*/}
                            {/*options: {*/}
                                {/*arrowColor: '#e3ffeb',*/}
                                {/*backgroundColor: '#e3ffeb',*/}
                                {/*overlayColor: 'rgba(79, 26, 0, 0.4)',*/}
                                {/*primaryColor: '#000',*/}
                                {/*textColor: '#004a14',*/}
                            {/*},*/}
                        {/*}}*/}
                {/*/>*/}
                    {/*<MDBBtn onClick={()=>{*/}
                        {/*//handleSyn('Independence Day is commonly associated with fireworks, parades, barbecues, carnivals, fairs, picnics, concerts, baseball games, family reunions, political speeches, and ceremonies, in addition to various other public and private events celebrating the history, government, and traditions of the United States. Independence Day is the national day of the United States.')*/}
                        {/*handleSyn('how are you one we are permit to the lives and always')*/}
                        {/*handleSyn('how are you two')*/}

                    {/*}}>*/}
                        {/*say*/}
                    {/*</MDBBtn>*/}
                    {/*<MDBBtn onClick={()=>{*/}
                        {/*cancelSyn()*/}

                    {/*}}>*/}
                        {/*cancel*/}
                    {/*</MDBBtn>*/}

                {/*</div>*/}


                {/*This is a test page*/}
                {/*<Test/>*/}

                {/*<Speech/>*/}
                {/*<SpeechSyn/>*/}

            </div>

        );
    }
}
