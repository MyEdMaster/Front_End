import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import {nodeurl} from "../../../tool/fetch-help";


class ParamAddReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1:false,
            format:''
        };

    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };
    post = (body) =>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(body)
        };
        fetch(`${nodeurl}/second_level_parameter_create`,option)
            .then(response=>response.json())
            .then(res=>{
                console.log(res);
            })

    };
    handleSaveData(){

        const {onSave} =this.props;
        onSave()
    }
    render() {

        return (
            <div>
                <MDBIcon style={{cursor:'pointer'}}className='grey-text' icon="plus" onClick={this.toggle(1)}/>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
                    <MDBModalHeader>Add Param</MDBModalHeader>

                    <MDBModalBody className="text-center">
                        <div className='row align-items-center'>
                            <div className='col-2 mr-1'>Name</div>
                            <div className='col-9'>
                                 <textarea
                                     className={`form-control`}
                                     placeholder="Format"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     onChange={(e) => {
                                         this.setState({
                                             format: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn
                            color="deep-purple"
                            size="md"
                            onClick={this.toggle(1)}
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
                                    modal1:false,
                                });
                                let body={
                                    problem_ID:this.props.problem_ID,
                                    format:this.state.format
                                };
                                this.post(body);
                                this.handleSaveData();
                            }}
                            style={{
                                fontFamily:'\'Roboto\',sans-serif',
                                fontSize:'12px',
                                fontWeight:'bolder'
                            }}
                        >Save</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}
export const ParamAdd = withRouter(ParamAddReact);