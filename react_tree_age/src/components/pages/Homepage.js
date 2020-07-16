import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import Wrapper from "../Wrapper/Wrapper";
import Row from "../Row/Row";
import Footer from "../Footer/Footer"

function Homepage(props) {
    return (
        <Wrapper>
            <Nav></Nav>

            <Container>
                <br></br>
                <h5 className="center-align register"></h5>
                <div class="section no-pad-bot" id="index-banner">
                    <div class="container">
                        <br></br>
                        <h1 class="header center darkblue-text">Give a Helping Hand!</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">Join the biggest COIVD-19 support system community today!</h5>
                        </div>
                        <div class="row center">
                            <a href="/signupAuthorization" id="signup-button" class="btn-large waves-effect waves-light light-blue accent-4">Sign Up</a>
                            <a href="/loginAuthorization" id="login-button" class="btn-large waves-effect waves-light light-blue accent-4" style={{ margin: "10px" }}>Login</a>

                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>

                    </div>
                </div>

            </Container>
            <br></br><br></br>
            <Footer></Footer>
        </Wrapper>
    );
}

export default Homepage;
