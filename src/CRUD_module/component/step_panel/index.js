import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {nodeurl} from "../../../tool/fetch-help";
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";


class StepPanelReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            name:this.props.data.name,
            feed_back:this.props.data.feed_back,
            step_number:this.props.data.step_number,
            type:this.props.data.type,
            finish:this.props.data.finish,
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
        fetch(`${nodeurl}/step`,option)
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
            <div className='d-flex justify-content-around'>
                <div>{this.props.data.format}</div>
                <div className='ml-3' onClick={this.toggle(1)}>
                    <MDBIcon style={{cursor:'pointer'}} className='grey-text' far icon="edit" />
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
                                     value={this.state.name}
                                     onChange={(e) => {
                                         this.setState({
                                             name: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-3'>
                            <div className='col-2 mr-1'>Feedback</div>
                            <div className='col-9'>
                                 <textarea

                                     className={`form-control`}
                                     placeholder="feedback"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.feed_back}
                                     onChange={(e) => {
                                         this.setState({
                                             feed_back: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-3'>
                            <div className='col-2 mr-1'>Step Number</div>
                            <div className='col-9'>
                                 <textarea

                                     className={`form-control form-control-lg`}
                                     placeholder="Step Number"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.step_number}
                                     onChange={(e) => {
                                         this.setState({
                                             step_number: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-3'>
                            <div className='col-2 mr-2'>Type</div>
                            <div className='col-9'>
                                 <textarea

                                     className={`form-control form-control-lg`}
                                     placeholder="Name"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.type}
                                     onChange={(e) => {
                                         this.setState({
                                             type: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-3'>
                            <div className='col-2 mr-1'>Finish</div>
                            <div className='col-9'>
                                 <textarea

                                     className={`form-control form-control-lg`}
                                     placeholder="Finish"
                                     style={{
                                         borderStyle:'solid',
                                         borderWidth:'1px',
                                         borderColor:'#7e57c2',
                                         borderRadius:'15px',
                                         fontFamily:'\'Rajdhani\', sans-serif',
                                         fontSize:'20px',
                                     }}
                                     value={this.state.finish}
                                     onChange={(e) => {
                                         this.setState({
                                             finish: e.target.value
                                         });
                                     }}

                                 />
                            </div>
                        </div>
                        <div className='row align-items-center mt-3'>
                            <div className='col-2 mr-1'>Format</div>
                            <div className='col-9'>
                                 <textarea

                                     className={`form-control form-control-lg`}
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
                                    problem_ID: this.props.data.problem_ID,
                                    name:this.state.name,
                                    feed_back:this.state.feed_back,
                                    step_number:this.state.step_number,
                                    type:this.state.type,
                                    finish:this.state.finish,
                                    format:this.state.format
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
export const StepPanel = withRouter(StepPanelReact);
