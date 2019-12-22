import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol,MDBBtn, MDBCard, MDBIcon} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';
import video from '../Lib/movie/addcomplex.mp4'
import classes from './index.module.css'


export class ComplexPage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-baseline justify-content-center">
                    <div className={classes.title1}>
                        COMPLEX NUMBERS: &nbsp;
                    </div>
                    <div className={classes.title2}>
                       Addition
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6" className={classes.font3}>
                        <Video url={video}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6">
                        <p className={classes.ph}>
                            Adding <span className={classes.high}>complex numbers</span> is actually rather straightforward and simple.
                            <br/>
                            A complex number is a combination of a <span className={classes.high}>real number</span> and an
                            <span className={classes.high}>imaginary number</span>. We generally write <span className={classes.high}>complex numbers</span>
                            in &nbsp;<InlineMath>a + bi</InlineMath>&nbsp;form, where &nbsp;<InlineMath>a</InlineMath>&nbsp; is the
                            <span className={classes.high}>real number</span> and
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
                <MDBRow center>
                    <MDBCol size="8">
                        <MDBCard
                            size="8"
                            color="blue-grey"
                            text="white"
                            className="py-3 px-3 w-100"
                            style={{boxShadow:'none', borderRadius:'0'}}
                        >
                            <p className={classes.pb}>Problem</p>
                            <p className={classes.pb2}>Simplify the following 2+7i + 9+9i</p>
                        </MDBCard>
                        <br/>
                        <div className={`${classes.worksheet} px-3 py-3`}>
                            <label className={classes.ws}>
                                Worksheet
                            </label>
                            <div className="p-1">
                                 <textarea
                                     className="form-control"
                                     id="exampleFormControlTextarea1"
                                     rows="10"
                                     style={{border:'solid',borderColor:'#7e57c2', borderWidth:'1px'}}
                                 />
                            </div>
                            <MDBRow center>
                                <MDBBtn tag="a" floating gradient="peach">
                                    <MDBIcon icon="thumbs-up" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating gradient="blue">
                                    <MDBIcon icon="check" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="clipboard-check" />
                                </MDBBtn>
                            </MDBRow>

                        </div>
                        <br/>
                        <MDBCard
                            size="8"
                            text="white"
                            className="py-3 px-3 w-100 orange lighten-1"
                            style={{boxShadow:'none', borderRadius:'0'}}
                        >
                            <p className={classes.pb}>Hints/Feedback</p>
                            <p className={classes.pb2}>Type in the complex numbers you're adding to organize your thoughts</p>
                            <MDBRow center>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="angle-left" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="angle-right" />
                                </MDBBtn>
                            </MDBRow>

                        </MDBCard>
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
                            onClick={() => {this.props.history.push('/complex/page3');}}
                        >Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </div>

        );
    }
}
