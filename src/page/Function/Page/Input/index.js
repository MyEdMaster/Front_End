import React from 'react';

import {MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact'



export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };

    }

    render() {
        return (
            <div>
                <MDBInput
                    label={this.props.label}
                    className="mr-3"
                    size="sm"
                    style={{border:'solid',borderColor:'#81c784', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                    onChange={this.props.change}
                />
            </div>

        );
    }
}
