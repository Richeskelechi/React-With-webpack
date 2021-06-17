import React from "react";
import ReactDOM from "react-dom";

class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>hello World Now</h1>
  }
}
ReactDOM.render(
    <Application />,
  document.getElementById("app")
)
