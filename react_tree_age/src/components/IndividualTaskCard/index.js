import React, { Component, useReducer } from "react";
import Button from "../Button";

class IndividualTaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: this.setColor(this.props.status),
      circleStyle: {
        padding: 10,
        marginRight: "2%",
        display: "inline-block",
        backgroundColor: this.setColor(this.props.status),
        borderRadius: "50%",
        width: "2%",
        height: "2%",
      },
    };
  }
  setColor(status) {
    if (status == "closed") {
      return "red";
    } else if (status == "assigned") {
      return "yellow";
    }
    return "green";
  }
  changeToAssign = (event) => {
    this.setState = {
      ...this.state,
      bgColor: this.setColor("assigned"),
    };
    console.log("here");
  };
  changeToClose = (event) => {
    this.setState = {
      ...this.state,
      bgColor: this.setColor("closed"),
      circleStyle: {
        padding: 10,
        marginRight: "2%",
        display: "inline-block",
        backgroundColor: this.setColor("closed"),
        borderRadius: "50%",
        width: "2%",
        height: "2%",
      },
    };
  };

  render() {
    let circleStyle = {
      padding: 10,
      marginRight: "2%",
      display: "inline-block",
      backgroundColor: this.state.bgColor,
      borderRadius: "50%",
      width: "2%",
      height: "2%",
    };

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <div style={{ maxWidth: "50%" }}>
          <div className="card darken-1">
            <div className="card-content">
              <div style={{ flex: 1 }}>
                <span className="card-title">
                  <span style={this.state.circleStyle}></span>
                  {this.props.username}'s Task{" "}
                </span>
              </div>
              <p>
                <b>Severity Level : </b>
                {this.props.severityLevel}
              </p>

              <p>
                <b>Description : </b>
                {this.props.description}
              </p>
              <p>
                <b>Location : </b> {this.props.location}
              </p>
              <p>
                <b>Time duration : </b>
                {this.props.time_required} mins
              </p>
              <p>
                <b>Cost : </b> ${this.props.cost}
              </p>
              <p>
                <b>Qualification : </b> {this.props.qualification}
              </p>
              <br></br>
              <div className="divider"></div>
              <div className="card-action">
                <Button onClick={this.changeToAssign}>Assign</Button>
                <Button
                  style={{ marginLeft: "20%" }}
                  onClick={this.changeToClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default IndividualTaskCard;
