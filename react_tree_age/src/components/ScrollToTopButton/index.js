import React, { Component } from "react";
class ScrollToTopButton extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <a href="#" onClick={this.scrollToTop()}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <i
          className="medium material-icons"
          style={{
            position: "fixed",
            bottom: "10%",
            right: "5%",
            color: "black",
          }}
        >
          keyboard_arrow_up
        </i>
      </a>
    );
  }
}
export default ScrollToTopButton;
