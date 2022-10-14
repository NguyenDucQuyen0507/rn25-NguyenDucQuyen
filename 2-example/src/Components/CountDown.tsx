import { type } from "@testing-library/user-event/dist/type";
import * as React from "react";

type Props = {};
type State = {
  number: number;
};

class CountDown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      number: 100,
    };
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div>
        <p>Number = {this.state.number}</p>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default CountDown;
