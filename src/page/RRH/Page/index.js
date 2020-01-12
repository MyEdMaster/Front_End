import React from 'react';
import classes from './index.module.css';

import {rrh} from "./index.mock";
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
import {Nav} from "../../Nav";

export class RrhPage extends React.Component {
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
            backend:rrh.page[index]
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let index = parseInt(this.props.match.params.id) - 1;
            this.setState({
                backend:rrh.page[index]
            })
        }
    }


    myClick=(text)=>{
        alert(text);
    }

    render() {
        const index = this.props.match.params.id;
        console.log(index)
        return (
            <div className={`${classes.body} align-content-center w-100 h-100 text-center`}>
                <Nav/>
                <AskQuestion/>
                <Audio audio={this.state.backend.audio_url}/>
                <div style={{padding:'30px 50px'}}>
                    <img className="py-2" src={this.state.backend.image_url} alt="village" width="600" height="400"/>
                    <p>
                        {this.state.backend.content}
                    </p>
                    {/*<p> Once upon a time, there was a little girl who lived in a small town near the forest.</p>*/}
                    {/*<p>The little girl always wore a red*/}
                    {/*<button*/}
                    {/*className={classes.button1}*/}
                    {/*onClick={()=>{this.myClick("jacket")}}*/}
                    {/*>*/}
                    {/*hood*/}
                    {/*</button>*/}
                    {/*whenever she went out, so everyone called her Little Red Riding Hood.*/}
                    {/*</p>*/}
                    <div
                        onClick={() => {
                            let idn = parseInt(index) - 1;
                            if(index === 1){
                                this.props.history.push(`/rrh`);
                            }
                            else{
                                this.props.history.push(`/rrh2/${idn}`);
                            }
                        }}
                        className={classes.a}>&laquo; Previous
                    </div>
                    {
                        index === 21?(
                            <div
                                onClick={() => {
                                    this.props.history.push(`/rrh`);
                                }}
                                className={classes.a}>Again &raquo;
                            </div>
                        ):(
                            <div
                                onClick={() => {
                                    let idn = parseInt(index) + 1;
                                    this.props.history.push(`/rrh2/${idn}`);
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
