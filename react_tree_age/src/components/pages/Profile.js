import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import Nav from "../Nav/Nav";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import IndividualTaskCard from "../IndividualTaskCard";
class Authorization extends Component {
  state = {
    username: sessionStorage.getItem("usernameSession"),
    reviews: [],
    reviewers: [],
    tasks: [],
    description: "",
  };

  componentDidMount() {
    axios.get("/api/reviews/" + this.state.username).then((res) => {
      console.log("\n res.data got back from get reviews:\t", res.data);
      console.log("given username\t", this.state.username);

      this.setState({
        reviews: res.data,
      });
    });
    axios
      .get("/api/posts/" + "?username=" + this.state.username)
      .then((res) => {
        console.log("here");
        console.log("\n res.data got back from get posts:\t", res.data);
        console.log("given username\t", this.state.username);
        // console.
        this.setState({
          ...this.state,
          tasks: res.data,
        });
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, reviews } = this.state;
    return (
      <Wrapper>
        <Nav></Nav>
        <br></br>
        <h4 class="header darkblue-text" style={{ marginLeft: "30px" }}>
          <b>{username} </b> profile page
        </h4>
        <br></br>
        <br></br>
        <br></br>

        <Container>
          <h5 class="header darkblue-text" style={{ marginLeft: "10px" }}>
            {" "}
            {reviews.length} reviews for {username}'s tasks{" "}
          </h5>
          <div>
            {reviews.map((item) => {
              return (
                <ReviewCard
                  username={username}
                  description={item.description}
                  reviewer={item.reviewer}
                  subject={item.subject}
                  rating={item.rating}
                  date={item.date.slice(0, 10)}
                  count={item.length}
                ></ReviewCard>
              );
            })}
          </div>
          <div>
            <h5 class="header darkblue-text" style={{ marginLeft: "10px" }}>
              {" "}
              {username}'s Created Tasks{" "}
            </h5>

            {this.state.tasks.map((value, index) => (
              <IndividualTaskCard
                key={index}
                description={value.description}
                location={value.location}
                time_required={value.time_required}
                cost={value.cost}
                qualification={value.qualification}
                severityLevel={value.severity_level}
                username={value.username}
                status={value.status}
              ></IndividualTaskCard>
            ))}
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Authorization;
