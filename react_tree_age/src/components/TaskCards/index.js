import React, { Component, useReducer } from "react";
import StarRatings from "../StarRatings";
import axios from "axios";
import TextArea from "../TextArea";
import { Redirect } from "react-router-dom";

class TaskCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rating: 0,
      description: "",
      redirect: false,
    };
    this.handleStarRatings = this.handleStarRatings.bind(this);
    this.handleReviewClick = this.handleReviewClick.bind(this);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleStarRatings(ratingParam) {
    let ratingTemp = this.state.rating + ratingParam;
    if (ratingTemp < 0) {
      ratingTemp = 0;
    }
    this.setState({ ...this.state, rating: ratingTemp });

    // const stars = this.refs.rating.getElementsByClassName("star");
  }
  handleReviewClick() {
    let username = sessionStorage.getItem("usernameSession");
    console.log("reviewer is ", username);
    console.log("reviewee is ", this.props.username);
    let reviewData = {
      reviewer: username,
      reviewee: this.props.username,
      rating: this.state.rating,
      subject: this.props.username + "'s Task",
      description: this.state.description,
    };
    axios.post("/api/reviews", reviewData).then((res) => {
      console.log("\n res got back from posts data is:\t", res.data);
      // this.props.functionCall();
    });
  }
  href = `/profile`;
  handleViewProfileClick = (event) => {
    sessionStorage.setItem("usernameSession", this.props.username);
  };
handleMessageClick = (event) => {
    sessionStorage.setItem("usernameTwoSession", this.props.username);
    this.setState({ ...this.state, redirect: true });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to={{ pathname: "/chat" }} />
    ) : (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <div className="row" style={{ maxWidth: "50%" }}>
          <div className="card darken-1">
            <div className="card-content">
              <span className="card-title">{this.props.username}'s Task </span>
              <a
                href={this.href}
                onClick={(event) => this.handleViewProfileClick(event)}
              >
                View Profile
              </a>
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
                {this.props.time} mins
              </p>
              <p>
                <b>Cost : </b> ${this.props.cost}
              </p>
              <p>
                <b>Qualification : </b> {this.props.qualification}
              </p>
              <br></br>
              <div className="divider"></div>
              <StarRatings handleStarClick={this.handleStarRatings} />
              <TextArea
                name="description"
                label="Review"
                type="text"
                value={this.state.description}
                handleInputChange={this.handleChange}
              ></TextArea>
            </div>
            <br></br>
            <br></br>

            <div className="card-action">
              <button
                className="btn waves-effect waves-light light-blue accent-4"
                onClick={this.handleMessageClick}
              >
                Message
              </button>
              <button
                style={{ marginLeft: "5%" }}
                className="btn waves-effect waves-light light-blue accent-4"
                onClick={this.handleReviewClick}
              >
                Review User
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskCards;
