import React from "react";
// import {Test} from "../../Playground/Test";
// import {Speech} from "../SpeechRecog-demo"
// import {SpeechSyn} from "../SpeechSyn-demo";
import {MDBBtn, MDBCol, MDBRow} from "mdbreact";
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';
// import {handleSyn} from "../RRH/Component/speech-syn";
// import {cancelSyn} from "../RRH/Component/speech-syn";
import bbw from '../RRH/Lib/basket.jpg';
import 'hopscotch/dist/css/hopscotch.css';
import Floater from 'react-floater';
import classes from "../ComplexNumber/Page/index.module.css";
import {BlockMath, InlineMath} from "react-katex";
import {FuncDraw} from "../Function/Graph";


export class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equation:'2',
            a:1,
            b:0,
            text:'222'

            // steps: [
            //     {
            //         target: ".p1",
            //         placement: 'top',
            //         content: "Here is a complex number problem"
            //     },
            //     {
            //         target: ".p2",
            //         placement: 'top',
            //         content: "You can add your own problem"
            //     },
            //     {
            //         target: ".p3",
            //         placement: 'top',
            //         content: "Submit your answer step by step (you could skip first step）"
            //     }
            // ]
        };

    }

    handle = ()=>{
        this.eq2 = function (x){
            return Math.log2(x)
        }
        this.eqln = function (x){
            return Math.log(x)
        }
        this.eq10 = function (x){
            return Math.log10(x)
        }
        let canvas = document.getElementById("myCanvas");
        let c = new FuncDraw(canvas);
        let eq;
        switch (this.state.equation) {
            case '2': eq = this.eq2; break;
            case 'e': eq = this.eqln; break;
            case '10': eq = this.eq10;
        }

        c.setColor("lightgrey", "#7e57c2");
        c.clear();
        c.drawCoords();
        c.drawFx(eq, 0.01, 50,this.state.a,this.state.b)
    }




    render() {
        // const { steps } = this.state;
        const Button = () =>(
            <button>
                Submit
            </button>
        );


        return (
            <div>
                <Button>{this.state.text}</Button>
            </div>
        );
    }
}
