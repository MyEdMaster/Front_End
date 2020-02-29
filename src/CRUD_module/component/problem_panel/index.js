import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {nodeurl} from "../../../tool/fetch-help";
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";



class ProblemPanelReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1:false,
            backend:'',
            name:'',
            description:'',
            parameter_number:0,
            start_format:''
        };

    }
    componentDidMount() {
        const option={
            method:'GET',
            // mode: 'cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
            }
        };
        fetch(`${nodeurl}/problem/${this.props.id}`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    backend:res[0],
                    description:res[0].description,
                    parameter_number:res[0].parameter_number,
                    start_format:res[0].start_format
                });
            })

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
            <div
                className={classes.table}
                onClick={()=>{
                    this.props.history.push(`/problem/${this.props.id}`);
                }}
            >

                <div className='row'>
                    <div className='col-1'>{this.state.backend.ID}</div>
                    <div className='col-2'>{this.state.backend.name}</div>
                    <div className='col-3'>{this.state.backend.description}</div>
                    <div className='col-2'>{this.state.backend.parameter_number}</div>
                    <div className='col-3'>{this.state.backend.start_format}</div>
                    <div className='col-1'>
                        <MDBIcon style={{cursor:'pointer'}}className='grey-text' far icon="edit" onClick={this.toggle(1)}/>
                    </div>
                </div>

                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
                    <MDBModalHeader>Edit Step</MDBModalHeader>

                    <MDBModalBody className="text-center">
                        <div className='row align-items-center'>
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
                                     value={this.state.backend.name}
                                     onChange={(e) => {
                                         this.setState({
                                             name: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center'>
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
                                     value={this.state.backend.description}
                                     onChange={(e) => {
                                         this.setState({
                                             description: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center'>
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
                                     value={this.state.backend.parameter_number}
                                     onChange={(e) => {
                                         this.setState({
                                             parameter_number: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center'>
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
                                     value={this.state.backend.start_format}
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
                                    id:this.state.backend.ID,
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
export const ProblemPanel = withRouter(ProblemPanelReact);