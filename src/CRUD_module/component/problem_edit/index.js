import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {nodeurl} from "../../../tool/fetch-help";
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";



class ProblemEditReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1:false,
            name:this.props.data.name,
            description:this.props.data.description,
            parameter_number:this.props.data.parameter_number,
            start_format:this.props.data.start_format
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
        fetch(`${nodeurl}/problem`,option)
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
            <div>
                <MDBIcon style={{cursor:'pointer'}}className='grey-text' far icon="edit" onClick={this.toggle(1)}/>

                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
                    <MDBModalHeader>Edit Problem</MDBModalHeader>

                    <MDBModalBody className="text-center">
                        <div className='row align-items-center mt-2'>
                            <div className='col-2 mr-1'>Name</div>
                            <div className='col-9'>
                                 <textarea
                                     className={`form-control`}
                                     placeholder="Name"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.name}
                                     onChange={(e) => {
                                         this.setState({
                                             name: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-2'>
                            <div className='col-2 mr-1'>Description</div>
                            <div className='col-9'>
                                 <textarea
                                     className={`form-control`}
                                     placeholder="Description"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.description}
                                     onChange={(e) => {
                                         this.setState({
                                             description: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-2'>
                            <div className='col-2 mr-1'>Param Number</div>
                            <div className='col-9'>
                                 <textarea
                                     className={`form-control`}
                                     placeholder="Param Number"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.parameter_number}
                                     onChange={(e) => {
                                         this.setState({
                                             parameter_number: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-2'>
                            <div className='col-2 mr-1'>Start Format</div>
                            <div className='col-9'>
                                 <textarea
                                     className={`form-control`}
                                     placeholder="Start Format"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.start_format}
                                     onChange={(e) => {
                                         this.setState({
                                             start_format: e.target.value
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
                                    name:this.state.name,
                                    description:this.state.description,
                                    parameter_number:this.state.parameter_number,
                                    start_format:this.state.start_format
                                };
                                this.put(body);
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
export const ProblemEdit = withRouter(ProblemEditReact);