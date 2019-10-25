import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import audio from '../Lib/audio/4.mp3'
import butterflies from '../Lib/butterflies.jpg'
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page4 extends React.Component {
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
            <div className={`${classes.body} align-content-center w-100 h-100 text-center`}>
                <AskQuestion/>
                <Audio src={audio}/>
                <div style={{padding:'50px 0 150px 0'}}>
                    <img className="py-2" src={butterflies} alt="village" width="600" height="400"/>
                    <p>But as soon as she left, Little Red Riding Hood forgot all about her promise and spent time
                        picking pretty flowers and
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("to run after")}}
                        >
                            chasing
                        </button>
                        colorful
                        butterflies.
                    </p>
                    {/*<p>但是一旦她离开，小红帽就忘记了她的承诺，花时间挑选鲜花，追逐五彩缤纷的蝴蝶。</p>*/}


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page5');}}
                        className={classes.a}>Next &raquo;
                    </div>

                </div>

            </div>
        );
    }
}
