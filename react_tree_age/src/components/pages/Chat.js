import React, { Component } from "react";
import Form from "../Form";
import TextArea from "../TextArea";
import Button from "../Button";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Row from "../Row/Row";
import MessageCard from "../MessageCard";
import ScrollToTopButton from "../ScrollToTopButton";
import axios from "axios";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: sessionStorage.getItem("usernameSession"),
        users: [sessionStorage.getItem("usernameSession"),sessionStorage.getItem("usernameTwoSession")],
        isLoaded: false,
        content: "",
    };
  }

  componentDidMount() {
    this.getChatData();
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
    sendMessageBox: {
      position:"fixed",
      bottom: 0,
      left:0,
      width:"100%",
      padding:"1em",
      borderTop: "2px solid #AAAAAA",
      backgroundColor: "#CCC"
    },
    submitButton: {
        float: "right"
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const {
      content
    } = this.state;
    const messageData = {
      users: this.state.users,
      content,
      sender: this.state.username,
    };
    axios.post("/api/users/"+this.state.username+"/chat", messageData).then((res) => {
      console.log("\n res got back from posts data is:\t", res.data);
      if (res.status == 200) {
          this.setState({
              ...this.state,
              content: ""
          })
          this.getChatData()
      }
    });
  }

  getChatData = (event) => {
    axios.get("/api/users/"+ this.state.username + "/chat?users="+this.state.users.join("&users=")).then((res) => {
      this.setState({
        ...this.state,
        isLoaded: true,
        chatData: res.data,
      });
      console.log("here", res.data);
    });
    console.log(this.state)
  };

  render() {
    return this.state.isLoaded ? (
      <Wrapper>
        <Nav id="top"></Nav>
        <div style={{ marginTop:"5px", overflow: "scroll", height: "43em" }}>
          {this.state.chatData.map((value, index) => (
            <MessageCard
              key={index}
              users={value.users}
              sender={value.sender}
              content={value.content}
              username={this.state.username}
            ></MessageCard>
          ))}
        </div>
        <div style={this.styles.sendMessageBox}>
            <form>
                <TextArea
                    name="content"
                    label="Message"
                    type="text"
                    value={this.state.content}
                    handleInputChange={this.handleChange}
                />
                <div>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </div>
            </form>

        </div>
      </Wrapper>
    ) : (
      <Wrapper style={{ scrollBehavior: "smooth" }}>
        <Nav id="top"></Nav>
        Loading...
      </Wrapper>
    );
  }
}

export default Chat;
