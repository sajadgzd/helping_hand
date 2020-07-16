import React, { Component } from "react";
class StarRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfStar: "star_border",
    };
  }
  onStarClick = (event) => {
    if (this.state.typeOfStar == "star") {
      this.setState({ typeOfStar: "star_border" });
      this.props.onStarClick(-1);
    } else {
      this.setState({ typeOfStar: "star" });
      this.props.onStarClick(1);
    }
  };
  render() {
    return (
      <i
        className="stars"
        onClick={this.onStarClick}
        style={{ cursor: "pointer" }}
        className="medium material-icons"
      >
        {this.state.typeOfStar}
      </i>
    );
  }
}
export default StarRatings;
