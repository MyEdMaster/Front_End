import React from 'react';
import classes from './index.module.css'
import {Nav} from "../../Nav";

export class HapCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    myClick=(text)=>{
        alert(text);
    }

    render() {
        return (
            <div className='cell-wall'>
                <div className='cell-membrane align-content-center w-100 text-center'>
                    <Nav/>
                    <h1 className='mt-5'> Horse and Porcupine </h1>
                    <div>
                        <img
                            className='img-fluid w-50 my-2'
                            src='https://myedmaster.oss-us-east-1.aliyuncs.com/cover.jpeg'
                        />
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/hap/1');}}
                        className={classes.next}
                    >
                        Next &raquo;
                    </div>

                </div>




            </div>
        );
    }
}
