import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import {nodeurl} from "../../../tool/fetch-help";


class ParamPanelReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1:false,
            format:this.props.data.format
        };

    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };
    put = (body) =>{
        const option={
            method:'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(body)
        };
        fetch(`${nodeurl}/second_level_parameter`,option)
            .then(response=>response.json())
            .then(res=>{
                console.log(res);
                //this.props.modify();
            })

    };
    handleSaveData(){

        const {onSave} =this.props;
        onSave()
    }
    render() {

        return (
            <div className={classes.param}>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>{this.props.data.format}</div>
                    <div className='col-2'>
                        <MDBIcon style={{cursor:'pointer'}}className='grey-text' far icon="edit" onClick={this.toggle(1)}/>
                    </div>
                </div>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
                    <MDBModalHeader>Edit Param</MDBModalHeader>

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
                                     value={this.state.format}
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
                                    id:this.props.data.ID,
                                    problem_ID:this.props.data.problem_ID,
                                    format:this.state.format
                                };
                                this.put(body);
                                this.handleSaveData()
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
export const ParamPanel = withRouter(ParamPanelReact);