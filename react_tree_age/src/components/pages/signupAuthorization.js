import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from 'axios';
import Signup from "./Signup";

class Authorization extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        signedUp: false,
    };

    componentDidMount() {
        // this.isusernameSessionExpired() ? (console.log("Please sign in or sign up")) : (window.location.href = "/");
    }

    // handleClick = () => {
    //     this.setState({
    //         active: !this.state.active
    //     })
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    logOut = () => {
        sessionStorage.removeItem("usernameSession");
    };

    // isusernameSessionExpired = () => {
    //     let usernameSession = sessionStorage.getItem("usernameSession");

    //     if (usernameSession) {
    //         setTimeout(() => {
    //             sessionStorage.removeItem("usernameSession");
    //         }, 240000);
    //         return false
    //     } else {
    //         return true
    //     }
    // };

    signupSubmit = event => {
        event.preventDefault();
        const { username, email, password } = this.state;
        const user = {
            username,
            email,
            password
        };
        axios.post("/api/users/signup", user).then(res => {
            console.log("\n res got back from signup:\t", res.data);

            console.log("given user for signup\t", user.username);
            let usernameSession = res.data.username;
            if (usernameSession) {
                sessionStorage.setItem("usernameSession", usernameSession);
                setTimeout(() => {
                    this.setState({
                        signedUp: true
                    });
                }, 1000)
            }

        });

        // console.log("\n\n signupSubmit state:\t", this.state)
    };


    render() {
        const { username, email, password, loggedIn } = this.state;
        return (

            this.state.signedUp ? (
                <Redirect to={{ pathname: "/feed", state: { email: email } }} />
            ) : (
                    <Signup
                        handleInputChange={this.handleInputChange}
                        email={email}
                        username={username}
                        password={password}
                        signupSubmit={this.signupSubmit}
                    />
                )

        );
    }
}



export default Authorization;