import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {FoilPage} from "./Page";


export class Foil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <Nav/>
              {/*<AskQuestionComplex/>*/}
              <Switch>
                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <FoilPage {...routeProps} />}
                  />
                  <Redirect to={`${this.props.match.url}/home`} />

              </Switch>

          </div>

        );
    }
}
