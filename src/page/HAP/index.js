import React from 'react';
import classes from './index.module.css';

import {hap} from "./index.mock";
import {Audio} from "../RRH/Component/audio";
import {Nav} from "../Nav";
import {withRouter} from 'react-router-dom';
export class HapPageReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backend:'',
            status:0

        };

    }
    componentDidMount() {
        let index = parseInt(this.props.match.params.id) - 1;
        this.setState({
            backend:hap.page[index]
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let index = parseInt(this.props.match.params.id) - 1;
            this.setState({
                backend:hap.page[index]
            })
        }
    }


    myClick=(text)=>{
        alert(text);
    }

    render() {
        const index = this.props.match.params.id;
        console.log(this.state.backend.image_url)
        return (
            <div className='cell-wall' key={this.props.location.key}>
                <div className='cell-membrane align-content-center w-100 text-center'>
                    <Nav/>
                    <Audio audio={this.state.backend.audio_url}/>
                    <div>
                        <img
                            className='img-fluid w-50 my-2'
                            src={this.state.backend.image_url}
                        />
                    </div>
                    <p className={classes.body}>
                        {this.state.backend.content}
                    </p>
                    <div
                        onClick={() => {
                            if(index === '1'){
                                this.props.history.push(`/hapcover`);
                            }

                            else{
                                let idn = parseInt(index) - 1;
                                this.props.history.push(`/hap/${idn}`);
                            }
                        }}
                        className={classes.a}>&laquo; Previous
                    </div>
                    {
                        index === '13'?(
                            <div
                                onClick={() => {
                                    this.props.history.push(`/hapcover`);
                                }}
                                className={classes.a}>Again &raquo;
                            </div>
                        ):(
                            <div
                                onClick={() => {
                                    let idn = parseInt(index) + 1;
                                    this.props.history.push(`/hap/${idn}`);
                                }}
                                className={classes.a}>Next &raquo;
                            </div>
                        )
                    }
                </div>

                </div>


        );
    }
}
export const HapPage = withRouter(HapPageReact)