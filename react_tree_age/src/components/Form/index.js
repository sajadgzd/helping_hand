import React, { Component } from "react";
import Button from "../Button";
import TextArea from "../TextArea";
import "./form.css";
import axios from "axios";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      username: sessionStorage.getItem("usernameSession"),
      location: "",
      time: 0,
      cost: 0,
      qualification: "",
      severityLevel: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log("description is ", this.state);
    const {
      description,
      location,
      time,
      cost,
      qualification,
      severityLevel,
      username,
    } = this.state;
    const cardData = {
      description,
      location: location,
      time_required: time,
      cost,
      qualification,
      severity_level: severityLevel,
      username,
    };
    axios.post("/api/posts", cardData).then((res) => {
      console.log("\n res got back from posts data is:\t", res.data);
      this.props.functionCall();
    });
  }
  render() {
    return (
      // <!-- Compiled and minified CSS -->
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <form className="col s6 m5">
          <h5 className="register">Create a new task</h5>
          <div className="divider"></div>
          <TextArea
            name="severityLevel"
            label="Severity Level"
            type="number"
            value={this.state.severityLevel}
            handleInputChange={this.handleChange}
          ></TextArea>
          <TextArea
            name="description"
            label="Description"
            type="text"
            value={this.state.description}
            handleInputChange={this.handleChange}
          ></TextArea>
          <TextArea
            name="location"
            label="Location"
            type="text"
            value={this.state.location}
            handleInputChange={this.handleChange}
          ></TextArea>
          <TextArea
            name="time"
            label="Time Expecation in minutes"
            type="number"
            value={this.state.time}
            handleInputChange={this.handleChange}
          ></TextArea>
          <TextArea
            name="cost"
            label="Cost in dollars"
            type="number"
            value={this.state.cost}
            handleInputChange={this.handleChange}
          ></TextArea>
          <TextArea
            handleInputChange={this.handleChange}
            name="qualification"
            label="Qualification"
            type="text"
            value={this.state.qualification}
            handleInputChange={this.handleChange}
          ></TextArea>
          <div>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Feed;
