import React, { Component } from "react";
import Stars from "../Stars";
class StarRatings extends Component {
  constructor(props) {
    super(props);
    // this.onStarButtonClick = this.onStarButtonClick.bind(this);
  }
  render() {
    return (
      <div>
        <Stars onStarClick={this.props.handleStarClick}></Stars>
        <Stars onStarClick={this.props.handleStarClick}></Stars>
        <Stars onStarClick={this.props.handleStarClick}></Stars>
        <Stars onStarClick={this.props.handleStarClick}></Stars>
        <Stars onStarClick={this.props.handleStarClick}></Stars>
      </div>
    );
  }
}
export default StarRatings;
