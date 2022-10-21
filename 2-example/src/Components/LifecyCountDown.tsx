import { type } from "os";
import * as React from "react";

type Props = {};
type State = {
  number: number;
};

class LifecyCountDown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      number: 100,
    };
    console.log("constructor");
  }
  handleClick = () => {
    // setInterval(() => {
    this.setState({ number: this.state.number - 1 });
    // }, 1000);
  };

  public render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>CountDown</button>
      </div>
    );
  }
}
export default LifecyCountDown;
