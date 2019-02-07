import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

import { DefaultView } from "views";

export interface Props extends RouteComponentProps {
}
interface State {}

class App extends Component<Props, State> {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={DefaultView} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withRouter)(withConnect(App));
