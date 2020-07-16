import React from "react";

class ReviewModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30,
    };

    if (!this.props.show) {
      console.log("show is ", this.props.show);

      return (
        // <div className="backdrop" style={{ backdropStyle }}>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      );
    }

    // The gray background
    console.log("here after");
    return (
      <div className="backdrop" style={{ backdropStyle }}>
        <div className="modal">
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
