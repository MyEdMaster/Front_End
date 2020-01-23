import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol,MDBBtn} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';

import classes from './index.module.css'
import {ComplexNumberMenu} from "./Menu";


export class ComplexIntro extends React.Component {
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
                        COMPLEX NUMBERS:
                    </div>
                    <div className={classes.title2}>
                        What is <InlineMath>i</InlineMath> ?
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="2">
                        <ComplexNumberMenu/>
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        <Video url='https://myedmaster.oss-us-east-1.aliyuncs.com/complex1.mp4'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <p className={classes.ph}>
                            Up until now, all the math you've done has more than likely focused around
                            the <span className={classes.high}>real numbers</span> which consists of
                            &nbsp;<span className={classes.high}>rational numbers</span> and
                            &nbsp;<span className={classes.high}>irrational numbers</span>: the rational
                            numbers including numbers like
                            &nbsp;<span className={classes.high}>integers, whole numbers, and natural
                            numbers&nbsp;</span>; the irrational numbers consisting of numbers like &nbsp;
                            <span className={classes.high}><InlineMath> \pi </InlineMath>
                            &nbsp;or &nbsp;<InlineMath>\sqrt3</InlineMath>&nbsp;</span>
                                ; numbers like that that can’t be represented by a fraction.
                        </p>
                        <br/>
                        <p className={classes.ph}>
                            But if we take a wider view, we see that in addition to the real numbers,
                            we have an entirely separate category of numbers called the imaginary numbers.
                            The imaginary numbers include numbers like
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            and the square root of a negative number. We’re going to focus on i in this lesson.
                        </p>
                        <br/>
                        <p className={classes.ph}>
                            So, what exactly is
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            ? “&nbsp;<InlineMath>i</InlineMath> &nbsp;” is what we call the imaginary unit. By definition,
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            is a number that when squared equals -1. You may also see
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            defined as
                            &nbsp;<InlineMath>\sqrt(-1)</InlineMath> &nbsp;
                            . While that’s not incorrect, we’ll explore more about that later when we tackle complex numbers. For now, just know that
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            can be defined either way. You can already see that
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            is probably going to be an interesting number, since up to this point, you’ve likely been taught that any number squared is going to be a positive. Now, here I am telling you that i represents some number, that when squared, equals -1, and if
                            &nbsp;<InlineMath>i^2</InlineMath> &nbsp;
                            equals -1, what in the world is i raised to some other power? Oh my gosh, how do I figure that out? Relax, it’s easier than you think. Let’s take a look at the powers of
                            &nbsp;<InlineMath>i</InlineMath> &nbsp;
                            and find out more.
                        </p>
                        <br/>
                        <MDBRow className={classes.border}>
                            <p className={classes.ph2}>
                                &nbsp;<InlineMath>i^0 = 1</InlineMath> &nbsp;
                                , since any number raised to the 0 power is 1.
                                <tr/><br/>
                                &nbsp;<InlineMath>i^1 = i</InlineMath> &nbsp;, since any number raised to the first power equals itself.<tr/><br/>
                                &nbsp;<InlineMath>i^2 = -1</InlineMath> &nbsp;, since any number
                                &nbsp;<InlineMath>\sqrt(x)^2 = x </InlineMath> &nbsp;.<tr/><br/>
                                &nbsp;<InlineMath>i^3 = -i</InlineMath> &nbsp;, and we can show that by rewriting
                                &nbsp;<InlineMath>i^3 </InlineMath> &nbsp;
                                as
                                &nbsp;<InlineMath>i^2 * i</InlineMath> &nbsp;
                                . We know that
                                &nbsp;<InlineMath>i^2 = -1</InlineMath> &nbsp;, so
                                &nbsp;<InlineMath>-1 * i = -i</InlineMath> &nbsp;.<tr/><br/>
                                And, of course,
                                &nbsp;<InlineMath>i^4 = 1</InlineMath> &nbsp;
                                , since
                                &nbsp;<InlineMath>i^4 = (i^2)^2</InlineMath> &nbsp;
                                , which is just
                                &nbsp;<InlineMath>((-1)^2)</InlineMath> &nbsp;
                                , which equals 1.
                            </p>
                        </MDBRow>
                        <br/>
                        <p className={classes.ph}>
                            This brings us to a full circle. As you can see, from these rules, you can tell what
                            &nbsp;<InlineMath>i^x </InlineMath> &nbsp;, because
                            is for any
                            &nbsp;<InlineMath>x</InlineMath> &nbsp;, because
                            power. You just have to put
                            &nbsp;<InlineMath>i^x </InlineMath> &nbsp;
                            in terms of the first 4 degrees. In other words, factor out
                            &nbsp;<InlineMath>i^4 </InlineMath> &nbsp;
                            , because you know it simply equals 1, and then just solve for the remaining power using the above 4 rules.
                        </p>
                        <br/>
                        <MDBRow className={classes.border}>
                            <p className={classes.ph2}>
                                For example,
                                &nbsp;<InlineMath>i^9 = 1</InlineMath> &nbsp;, because
                                &nbsp;<InlineMath>i^9 = i(i^4)^2 = i(1^2) = i</InlineMath> &nbsp;.<tr/><br/>
                                Another example is that
                                &nbsp;<InlineMath>i^23 = -i</InlineMath> &nbsp;, because
                                &nbsp;<InlineMath>i^23 = i^3(i^4)^5 = i^3(1)^5 = -i</InlineMath> &nbsp;. See? Easy!
                            </p>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
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
                            onClick={() => {this.props.history.push('/complex/add');}}
                        >Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
