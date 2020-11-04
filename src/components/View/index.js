import React from "react";
import "./styles.css";
import Header from "../Header";
import Footer from "../Footer";

export default function View(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
