import React from "react";
import "./styles.css";
import Header from "../Header";
import Footer from "../Footer";

export default class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
