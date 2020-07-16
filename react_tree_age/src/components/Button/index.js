import React from "react";

function Button(props) {
  if (props.href) {
    return (
      <a href={props.href}>
        <button className="btn waves-effect waves-light light-blue accent-4">
          {props.children}
        </button>
      </a>
    );
  } else if (props.onClick) {
    console.log(props.onClick)
    return (
      <button
        className="btn waves-effect waves-light light-blue accent-4"
        onClick={props.onClick}
        data-id={props.id}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
