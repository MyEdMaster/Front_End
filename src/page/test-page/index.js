import React from "react";
import 'hopscotch/dist/css/hopscotch.css';
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
            //         content: "Here is a complex number problem_list"
            //     },
            //     {
            //         target: ".p2",
            //         placement: 'top',
            //         content: "You can add your own problem_list"
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
