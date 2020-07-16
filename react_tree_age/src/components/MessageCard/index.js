import React, { Component } from "react";
class MessageCard extends Component {
  getTitle(name) {
    if (name == sessionStorage.getItem("usernameSession")){
      return "Me"
    }
    return name
  }

  styles = {
    chatBubble: {
      flex:1,
      backgroundColor: "black"
    }
  }

  render() {
    return (
      <div>
        <div className="row" style={{ width: "100%", margin: 0}}>
            <div className="card-content" style={{ padding: "10px"}}>
            
              <span className="card-title">
                <b>
                {this.getTitle(this.props.sender)}
                </b>
              </span>
              <div styles={this.styles.chatBubble}>
                {this.props.content}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MessageCard;