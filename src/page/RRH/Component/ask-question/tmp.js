import {MDBBtn, MDBModal, MDBModalBody} from "mdbreact";
import bbw from "../../Lib/bbw.jpg";
import classes from "./index.module.css";
import React from "react";

<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} frame position="top">
    <MDBModalBody className="text-center">
        <div className="d-flex justify-content-center align-items-center">
            <div className="px-3">
                <img src={bbw} alt="Little Red Riding Hood" height="71" width="50"/>
            </div>
            <div>
                Try asking the Big Bad Wolf a question!
            </div>
            <div className="ml-3">
                <input
                    className={` px-5 form-control form-control-lg ${classes.searchInput}`}

                    style={{
                        fontSize: '1.09vw',
                        width: '30vw'
                    }}
                    onChange={(e) => {
                        this.setState({
                            wolfQuestion: e.target.value
                        });
                    }}
                />
            </div>
            <div className="ml-3">
                <MDBBtn color="primary" size="sm" onClick={()=>{this.searchAnswer(this.state.wolfQuestion)}}>Ask</MDBBtn>
            </div>
        </div>
        <p className={classes.title}>
            {this.state.answer}
        </p>
        <div>
            {this.state.tag<1? (
                <div className="d-flex justify-content-center align-items-center">
                    <MDBBtn
                        color="primary"
                        size="sm"
                        onClick={()=>{this.searchAgain(this.state.defaultQuestion)}}
                    >
                        YES
                    </MDBBtn>
                    <MDBBtn
                        size="sm"
                        onClick={()=>{
                            this.setState({
                                answer:'Sorry, we cannot find the answer',
                                tag:1
                            })
                        }}
                    >
                        NO
                    </MDBBtn>
                </div>
            ):(null)
            }
        </div>
    </MDBModalBody>
</MDBModal>
