import * as React from "react";
import * as ReactIcons from "react-icons/ai";
type Props = {};
interface State {
  like: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      like: true,
    };
  }
  handleLike = () => {
    this.setState({ like: !this.state.like });
  };
  public render() {
    return (
      <div className="text-center">
        <button
          style={{ width: "100px", border: "none" }}
          onClick={this.handleLike}
        >
          {this.state.like ? (
            <ReactIcons.AiOutlineLike />
          ) : (
            <ReactIcons.AiTwotoneLike />
          )}
        </button>
        <span>{this.state.like ? 0 : 1}</span>
      </div>
    );
  }
}
export default App;
