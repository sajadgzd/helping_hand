import React, { Component } from "react";
import Form from "../Form";
import Nav from "../Nav/Nav";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Row from "../Row/Row";
import TaskCards from "../TaskCards";
import ScrollToTopButton from "../ScrollToTopButton";
import axios from "axios";
import { Link } from "react-router-dom";
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: [],
      // isOpen: false,
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.getPostsData();
  }
  styles = {
    container: {},
    content: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
    form: {
      width: "100%",
    },
    item: {},
  };
  // handleReviewButtonClick = (event) => {
  //   this.setState({
  //     ...this.state.isOpen,
  //     isOpen: !this.state.isOpen,
  //   });
  // };
  getPostsData = (event) => {
    axios.get("/api/posts").then((res) => {
      this.setState({
        ...this.state,
        isLoaded: true,
        cardsData: res.data,
      });
    });
  };
  render() {
    return this.state.isLoaded ? (
      <Wrapper style={{ scrollBehavior: "smooth" }}>
        <Nav id="top"></Nav>
        <Row>
          <br></br>
        </Row>
        <Link
          to="/profile"
          className="btn waves-effect waves-light light-blue accent-4"
          style={{ margin: "20px" }}
        >
          My Profile
        </Link>
        <Container>
          <Form functionCall={this.getPostsData}></Form>
        </Container>
        <div style={{ flexDirection: "row" }}>
          {this.state.cardsData.map((value, index) => (
            <TaskCards
              key={index}
              description={value.description}
              location={value.location}
              time={value.time_required}
              cost={value.cost}
              qualification={value.qualification}
              severityLevel={value.severity_level}
              username={value.username}
            ></TaskCards>
          ))}
        </div>
        <ScrollToTopButton></ScrollToTopButton>
      </Wrapper>
    ) : (
      <Wrapper style={{ scrollBehavior: "smooth" }}>
        <Nav id="top"></Nav>
        <Row>
          <br></br>
        </Row>
        <Container>
          <Form></Form>
        </Container>
        <ScrollToTopButton></ScrollToTopButton>
      </Wrapper>
    );
  }
}

export default Feed;
