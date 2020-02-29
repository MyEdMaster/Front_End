import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {Nav} from "../../page/Nav";
import {nodeurl} from "../../tool/fetch-help";
import { MDBStepper, MDBStep, MDBIcon} from "mdbreact";
import {StepPanel} from "../component/step_panel";
import {ParamPanel} from "../component/param_panel";
import {StepAdd} from "../component/step_add";
import {ParamAdd} from "../component/param_add";
import {ProblemEdit} from "../component/problem_edit";

class ProblemDetailReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false,
        };
    }
    async componentDidMount() {
        const problem={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        const select={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({problem_ID: this.props.match.params.id})
        };
        await fetch(`${nodeurl}/problem/${this.props.match.params.id}`,problem)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    problem:res[0],
                });
            });
        await fetch(`${nodeurl}/second_level_parameter`,select)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    param:res,

                });
            });
        await fetch(`${nodeurl}/step`,select)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    step:res,
                    render:1
                });
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.modify) {
            const problem={
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                }
            };
            const select={
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body:JSON.stringify({problem_ID: this.props.match.params.id})
            };
            fetch(`${nodeurl}/problem/${this.props.match.params.id}`,problem)
                .then(response=>response.json())
                .then(res=>{
                    this.setState({
                        problem:res[0],
                    });
                });
            fetch(`${nodeurl}/second_level_parameter`,select)
                .then(response=>response.json())
                .then(res=>{
                    this.setState({
                        param:res,

                    });
                });
            fetch(`${nodeurl}/step`,select)
                .then(response=>response.json())
                .then(res=>{
                    this.setState({
                        step:res,
                    });
                })
            this.setState({
                modify:false,
            })
        }
    }
    handleOnSave = () =>{
        this.setState({
            modify:true
        })
    };
    handleStep=(step)=>{
        let hash = new Object();

        for (let i=0; i<step.length; i++){

            let index = step[i].step_number;
            //console.log(step_arr[index].length())
            if(!hash[index]){
                hash[index]=[];
            }
            hash[index].push(step[i])
        }
        //console.log(step_arr)
        return(hash)
    };
    findMaxStep=(hash)=>{
        let maxkey = 0;
        for(let key in hash){
            let keyvalue = parseInt(key);
            if(keyvalue>maxkey){
                maxkey = keyvalue;
            }
        }
        return maxkey
    };

    render() {
        if(this.state.render ===1){

            const hash = this.handleStep(this.state.step);
            const maxStep=this.findMaxStep(hash);

            console.log(hash);
            return (
                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <div className ='mt-3 d-flex'>
                                <div  className='mr-3'>Problem Info</div>
                                <ProblemEdit onSave={this.handleOnSave} data={this.state.problem}/>
                            </div>
                            <div className={classes.Card}>
                                <div>{`Name:`} {this.state.problem.name}</div>
                                <div>{this.state.problem.description}</div>
                                <div>{`Param Num:`} {this.state.problem.parameter_number}</div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-8'>
                                    <div className='d-flex'>

                                    </div>
                                    <div>Step</div>
                                    <StepAdd problem_ID={this.state.problem.ID} onSave={this.handleOnSave}/>
                                    <MDBStepper vertical className='p-0'>
                                        <MDBStep className="completed ">
                                            <a>
                                                <span className="circle" >0</span>
                                                <span className="label">Start Format</span>
                                            </a>
                                            <div>
                                                <div className={`step-content white`}>{this.state.problem.start_format}</div>
                                            </div>

                                        </MDBStep>
                                        <MDBStep className="completed ">
                                            <a>
                                                <span className="circle" >1</span>
                                                <span className="label">First Step</span>
                                            </a>
                                            <div className=' d-flex flex-wrap ml-5'>
                                                {
                                                    hash[1]?(
                                                        hash[1].map((item, index)=>{
                                                        return<div className="step-content white lighten-4 ml-0 mr-2">
                                                            <StepPanel onSave={this.handleOnSave} key={index} data={item}/>
                                                        </div>;
                                                        })
                                                    ):null

                                                }
                                            </div>

                                        </MDBStep>
                                        <MDBStep className="active">
                                            <a>
                                                <span className="circle ">2</span>
                                                <span className="label">Second Step</span>
                                            </a>
                                            <div className=' d-flex flex-wrap ml-5'>
                                                {
                                                    hash[2]?(
                                                        hash[2].map((item, index)=>{
                                                            return<div className="step-content white lighten-4 ml-0 mr-2">
                                                                <StepPanel onSave={this.handleOnSave} key={index} data={item} />
                                                            </div>;
                                                        })
                                                    ):null

                                                }
                                            </div>

                                        </MDBStep>
                                        <MDBStep className="active">
                                            <a>
                                                <span className="circle">3</span>
                                                <span className="label">Third Step</span>
                                            </a>
                                            <div className=' d-flex flex-wrap ml-5'>
                                                {
                                                    hash[3]?(
                                                        hash[3].map((item, index)=>{
                                                            return<div className="step-content white lighten-4 ml-0 mr-2">
                                                                <StepPanel onSave={this.handleOnSave} key={index} data={item}/>
                                                            </div>;
                                                        })
                                                    ):null

                                                }
                                            </div>
                                        </MDBStep>
                                        <MDBStep className="active">
                                            <a>
                                                <span className="circle">4</span>
                                                <span className="label">Forth Step</span>
                                            </a>
                                            <div className=' d-flex flex-wrap ml-5'>
                                                {
                                                    hash[4]?(
                                                        hash[4].map((item, index)=>{
                                                            return<div className="step-content white lighten-4 ml-0 mr-2">
                                                                <StepPanel onSave={this.handleOnSave} key={index} data={item}/>
                                                            </div>;
                                                        })
                                                    ):null

                                                }
                                            </div>
                                        </MDBStep>
                                        <MDBStep>
                                            <a>
                                                <span className="circle">5</span>
                                                <span className="label">Fifth Step</span>
                                            </a>
                                        </MDBStep>
                                    </MDBStepper>

                                </div>
                                <div className='col-4'>
                                    <div>Second Level Parameter</div>
                                    <div className={classes.param}>
                                        <div className='row'>
                                            <div className='col-2'>#</div>
                                            <div className='col-8'>Format</div>
                                            <div className='col-2'>
                                               <ParamAdd onSave={this.handleOnSave} problem_ID={this.state.problem.ID}/>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        this.state.param.map((item, index) => {
                                            return <div className={classes.param} key={index}>
                                                <ParamPanel onSave={this.handleOnSave} data={item}/>
                                            </div>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
        else{
            return null
        }

    }
}
export const ProblemDetail = withRouter(ProblemDetailReact);