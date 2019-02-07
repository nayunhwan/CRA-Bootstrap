import React, { PureComponent } from "react";
import { DefaultComponent } from "components";

class DefaultView extends PureComponent {
  public render() {
    return (
      <div>
        DefaultView
        <DefaultComponent />
      </div>
    );
  }
}

export default DefaultView;
