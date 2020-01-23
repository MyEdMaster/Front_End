import React from 'react';
import classes from './index.module.css'
import {withRouter} from 'react-router-dom';

class ComplexNumberMenuReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>

              <div className={classes.float}>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/home') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/home');}}
                  >
                      Complex Number
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/intro') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/intro');}}
                  >
                      Chp 1: What is i?
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/add') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/add');}}
                  >
                      Chp 2: Addition
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/subt') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/subt');}}
                  >
                      Chp 3: Subtraction
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/mult') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/mult');}}
                  >
                      Chp 4: Multiplication
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/divi') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/divi');}}
                  >
                      Chp 5: Division
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/feedback') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/feedback');}}
                  >
                      Q & A
                  </div>
              </div>
          </div>

        );
    }
}
export const ComplexNumberMenu = withRouter(ComplexNumberMenuReact)