import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import {nodeurl} from "../../../tool/fetch-help";


class StepAddReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            name:'',
            feed_back:'',
            step_number:-1,
            type:-1,
            finish:-1,
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
        fetch(`${nodeurl}/step_create`,option)
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
                <MDBIcon
                    icon="plus-circle"
                    size='2x'
                    className='grey-text'
                    style={{cursor:'pointer'}}
                    onClick={this.toggle(1)}
                />
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
                    <MDBModalHeader>Add Step</MDBModalHeader>

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

                                    problem_ID: this.props.problem_ID,
                                    name:this.state.name,
                                    feed_back:this.state.feed_back,
                                    step_number:this.state.step_number,
                                    type:this.state.type,
                                    finish:this.state.finish,
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
export const StepAdd = withRouter(StepAddReact);