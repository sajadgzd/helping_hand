import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container"
import Nav from "../Nav/Nav"
import Wrapper from "../Wrapper/Wrapper"
import Row from "../Row/Row"

function Signup(props) {
    return (
        <Wrapper>
            <Nav></Nav>

            <Row>
                <br></br>
            </Row>

            <Container>
                <br></br>
                <form className="col s6 m5" action="" method="post" id="reg-form" name="form">
                    <h5 className="center-align register">Sign up for a free account</h5>
                    <div className="input-field col s6">
                        <label htmlFor="username">User Name</label>
                        <input className="form-styling" type="text" name="username" placeholder="" value={props.username}
                            onChange={props.handleInputChange} />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="email">Email</label>
                        <input className="form-styling" type="email" name="email" placeholder="" value={props.email}
                            onChange={props.handleInputChange} />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="password">Password</label>
                        <input className="form-styling" type="password" name="password" placeholder="" value={props.password}
                            onChange={props.handleInputChange} />
                    </div>
                    <Link to="/signupAuthorization" className="btn waves-effect waves-light light-blue accent-4" onClick={props.signupSubmit}>Sign Up</Link>

                    <Link to="/loginAuthorization" className="btn waves-effect waves-light light-blue accent-4" style={{ margin: "10px" }}>Login Form</Link>
                </form>
            </Container>

        </Wrapper>
    );
}

export default Signup;