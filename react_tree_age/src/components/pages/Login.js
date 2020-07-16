import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import Wrapper from "../Wrapper/Wrapper";
import Row from "../Row/Row";

function Login(props) {
  return (
    <Wrapper>
      <Nav></Nav>

      <Container>
        <br></br>
        <form
          className="col s6 m5"
          action=""
          method="post"
          id="reg-form"
          name="form"
        >
          <h5 className="center-align register">Login</h5>
          <div className="input-field col s6">
            <label htmlFor="email">Email</label>
            <input
              className="form-styling"
              type="email"
              name="email"
              placeholder=""
              value={props.email}
              onChange={props.handleInputChange}
            />
          </div>
          <div className="input-field col s6">
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder=""
              value={props.password}
              onChange={props.handleInputChange}
            />
          </div>
          <Link
            to="/loginAuthorization"
            className="btn waves-effect waves-light light-blue accent-4"
            onClick={props.loginSubmit}
          >
            Login
          </Link>

          <Link
            to="/signupAuthorization"
            className="btn waves-effect waves-light light-blue accent-4"
            style={{ margin: "10px" }}
          >
            Sign Up Form
          </Link>
        </form>
      </Container>
    </Wrapper>
  );
}

export default Login;
