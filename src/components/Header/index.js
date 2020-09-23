import React from "react";
import logo from "../../assets/images/book-24px.svg";
import "./styles.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isLogged_map} from "../../store/authSlice";

export default function Header() {
  const isLogged = useSelector(isLogged_map);

  return (
    <header className={isLogged ? "container-header" : "container-header big"}>
      <img src={logo} alt="Open book" />
      <h1 title="Dictionary"><span className="letter" data-letter="D">D</span>ictionary</h1>
      <div className="container-login-link">
        {
          isLogged ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
        }
      </div>
    </header>
  )
}
