import React from 'react';
import classes from './index.module.css'
export class RRHCover extends React.Component {
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
            <div
                className={`${classes.body} align-content-center w-100 text-center`}>
                <div style={{padding:'50px 0'}}>
                <h1> Little Red Riding Hood </h1>
                {/*<h1 style={{color:'#E71D36'}}> Chinese Equivalent </h1>*/}
                <div>

                <button className="button button"
                        // onClick={()=>{this.myClick("Try asking Little Red Riding Hood a question!")}}
                >
                    <img
                        src='https://myedmaster.oss-us-east-1.aliyuncs.com/llrh.jpg'
                        alt="Little Red Riding Hood"
                        height="450"
                        width="317"/>
                </button>
                <button type="button button"
                        //onClick={()=>{this.myClick('Try asking the Big Bad Wolf a question!')}}
                >
                    <img
                        src='https://myedmaster.oss-us-east-1.aliyuncs.com/bbw.jpg'
                        alt="Big Bad Wolf"
                        height="450"
                        width="317"/>
                </button>
                </div>

                <div
                    onClick={() => {this.props.history.push('/rrh/page1');}}
                    className={classes.next}
                >
                    Next &raquo;
                </div>
                </div>

            </div>
        );
    }
}
