import React from "react";

export default class extends React.PureComponent {
  endCheck() {
    const { index, total } = this.props;
    if (index === total - 1) {
      console.log("We are at the end!");
    }
  }
  render() {
    this.endCheck();
    return null;
  }
}