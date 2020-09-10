import React from "react";
import "./styles.css";

export default function Button({onClick, type, text}) {
  return (
    <div className="container-button">
      <button className="hover-effect" type={type} onClick={onClick} >{text}</button>
    </div>
  )
}
