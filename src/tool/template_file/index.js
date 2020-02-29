import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'


class TestReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {



        return (
           null
        );
    }
}
export const Test = withRouter(TestReact);