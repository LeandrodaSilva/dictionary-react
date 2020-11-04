import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import View from "../../components/View";

export default function HomePage() {
  return (
    <View>
      <div className="container-home">
        <h2 className="title">
          This site provides an English dictionary using the <a href="https://www.linguarobot.io/">Lingua Robot</a> API.
        </h2>
        <span><Link to="/login">Sign in</Link> or <Link to="/register">sign up</Link> to start using.</span>
      </div>
    </View>
  )
}
