import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import Wrapper from "../Wrapper/Wrapper";
import Row from "../Row/Row";

function ReviewCard(props) {
  return (
    <div>
      <div className="row" style={{ maxWidth: "50%", marginLeft: "10px" }}>
        <div className="card darken-1">
          <div className="card-content">
            <p>
              {/* <b>Description : </b> */}
              {props.description}
            </p>
            <p>
              <br></br>
              By <b>{props.reviewer}</b> on <b>{props.date}</b>
            </p>
            <p>
              <b>Subject : </b>
              {props.subject} | <b> Rating : </b>
              {props.rating}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
