import React from "react";

function TextArea(props) {
  return (
    // <!-- Compiled and minified CSS -->
    <div className="input-field col s12">
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.handleInputChange}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export default TextArea;
