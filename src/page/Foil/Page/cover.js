import React from 'react';

import {MDBRow, MDBCol,MDBBtn} from 'mdbreact'

import classes from './index.module.css'
import {InlineMath} from "react-katex";
import {ComplexNumberMenu} from "./Menu";
import {deleteMark} from "../../../tool/delete-mark";


export class FoilHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test:'',
            render:0

        };
        this.mark = deleteMark(this.state.a, this.state.b, this.state.c, this.state.d)
    }

    render() {

        return (
            <div>
                <div className={classes.font}>
                    A-List Empire:
                </div>
                <div className={classes.font2}>
                    Multiplying Binomials Using FOIL
                </div>
                <MDBRow>
                    <MDBCol size="2">
                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        Welcome to the A-List Empire Multiplying Binomials Using FOIL Module. In this module, you will have the opportunity to learn about the various properties of foil.
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6" className={classes.border}>
                        <div className={classes.euq}>
                            <InlineMath>(ax + b)(cx + d)</InlineMath>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8" className={classes.font3}>
                        Have fun! Feel free to ask questions at any time!
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="2">
                        <MDBBtn
                            color="deep-purple lighten-1"
                            className={`${classes.btn} w-100 mt-3`}
                            onClick={() => {this.props.history.push('/foil/page');}}
                        >Start Learning</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
