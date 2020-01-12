import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol,MDBBtn} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';
import classes from './index.module.css'
import {SpeakRecogAnylysis} from "../SpeakModuleAnalysis";
import {ComplexNumberMenu} from "./Menu";


export class ComplexPage4 extends React.Component {
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
                        Q & A
                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="2">
                        <ComplexNumberMenu/>
                    </MDBCol>
                    <MDBCol size="8">
                        {/*<div className={classes.ph}>*/}
                            {/*This page will assess the student to determine their proficiency at various topics of knowledge in this module, and adjust its knowledge model based on it.*/}
                        {/*</div>*/}
                        <br/>

                        <div className={classes.border} style={{borderWidth:'1px'}}>

                            <p className={classes.ph2} style={{fontSize:'40px'}}>
                                What is the format of a dividing complex numbers problem?
                            </p>

                            <div className="flex-grow-1 px-3">
                                {/*<input*/}
                                    {/*placeholder="Enter your response here"*/}
                                    {/*style={{*/}
                                        {/*borderStyle:'solid',*/}
                                        {/*borderWidth:'1px',*/}
                                        {/*borderColor:'#33b5e5',*/}
                                        {/*borderRadius:'15px',*/}
                                        {/*fontFamily:'\'Rajdhani\', sans-serif',*/}
                                        {/*fontSize:'30px',*/}
                                        {/*width:'100%'*/}
                                    {/*}}*/}
                                {/*/>*/}
                                <SpeakRecogAnylysis/>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <MDBBtn color=" orange lighten-2" className={`${classes.btn} mt-3 white-text`}>Submit</MDBBtn>
                                </div>
                                <div>
                                    <MDBBtn color=" brown lighten-1" className={`${classes.btn} mt-3 white-text`}>Next Question</MDBBtn>
                                </div>
                            </div>
                        </div>

                        <br/>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="2">
                        <MDBBtn color="deep-purple lighten-1" className={`${classes.btn} w-100 mt-3`}>Previous Lesson</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn color="deep-purple lighten-1" className={`${classes.btn} w-100 mt-3`}>Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
