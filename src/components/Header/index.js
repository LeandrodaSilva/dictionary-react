import React from "react";
import logo from "../../assets/images/book-24px.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="container-header">
      <img src={logo} alt="Open book" />
      <h1 title="Dictionary">Dictionary</h1>
    </header>
  )
}
