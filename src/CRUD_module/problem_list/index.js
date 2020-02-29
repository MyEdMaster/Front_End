import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {ProblemPanel} from "../component/problem_panel";
import {nodeurl} from "../../tool/fetch-help";
import {ProblemAdd} from "../component/problem_add";

class ProblemListReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false

        }
    }
    componentDidMount() {
        const option={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        fetch(`${nodeurl}/problem`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    backend:res,
                    render:1

                });
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.modify){
            const option={
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                }
            };
            fetch(`${nodeurl}/problem`,option)
                .then(response=>response.json())
                .then(res=>{
                    this.setState({
                        backend:res,
                        render:1

                    });
                });
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

    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (

                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <div className='mt-2'>
                                All Problems
                            </div>
                            <div className={classes.title}>
                                <div className ='row py-2'>
                                    <div className='col-1'>#</div>
                                    <div className='col-2'>Name</div>
                                    <div className='col-3'>Description</div>
                                    <div className='col-2'>Para number</div>
                                    <div className='col-3'>Start Format</div>
                                    <div className='col-1'> <ProblemAdd onSave={this.handleOnSave}/></div>
                                </div>
                            </div>
                            {
                                this.state.backend.map((item, index)=>{
                                    return <ProblemPanel key={index} id={item.ID}/>
                                })
                            }

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
export const ProblemList = withRouter(ProblemListReact);