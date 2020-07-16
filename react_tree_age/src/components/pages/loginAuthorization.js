import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from 'axios';
import Login from "./Login";

class Authorization extends Component {
    state = {
        loggedIn: false,
        username: "",
        email: "",
        password: "",
    };

    componentDidMount() {
        // this.isusernameSessionExpired() ? (console.log("usernameSession Expired Please sign in or sign up")) : (window.location.href = "/");
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

    loginSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        let logInUser = {
            email,
            password
        };


        if ((email.length && password.length) === 0) {
            console.log("You must input a email and password")
        } else {
            // this.setState({
            //     spinner: true
            // })
        }

        axios.post("/api/users/login", logInUser)
            .then(res => {
                console.log("\n res.data[0].username got back from login:\t", res.data[0].username);
                console.log("given user for login\t", logInUser.email);

                sessionStorage.setItem("usernameSession", res.data[0].username);
                let usernameSession = sessionStorage.getItem("usernameSession");
                this.setState({
                    loggedIn: true
                });

            })

        // console.log("\n\n loginSubmit state:\t", this.state)
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



    render() {
        const { email, password, loggedIn } = this.state;
        return (

            this.state.loggedIn ? (
                <Redirect to={{ pathname: "/feed", state: { email: email } }} />
            ) : (
                    <Login
                        handleInputChange={this.handleInputChange}
                        email={email}
                        password={password}
                        loginSubmit={this.loginSubmit}
                    />
                )

        );
    }
}


export default Authorization;