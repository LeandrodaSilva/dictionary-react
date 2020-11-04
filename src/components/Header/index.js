import React from "react";
import logo from "../../assets/images/book-24px.svg";
import "./styles.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isLogged_map} from "../../store/authSlice";

export default function Header() {
  const isLogged = useSelector(isLogged_map);

  function renderNavBarRight() {
    return(
      <ul className="menu">
        <li><Link to="/posts">My posts</Link></li>
        <li><Link to="/logout">Sign out</Link></li>
      </ul>
    )
  }

  return (
    <header className={isLogged ? "container-header" : "container-header big"}>
      <div className="navbar-left">
        <div className="title">
          <img src={logo} alt="Open book" />
          <h1 title="Dictionary"><span className="letter" data-letter="D">D</span>ictionary</h1>
        </div>
        <ul className="menu">
          {isLogged ? <li><Link to="/">Lingua Robot</Link></li> : null }
        </ul>
      </div>

      <div className="navbar-right">
        {
          isLogged ? renderNavBarRight() : <Link to="/login">Sign in</Link>
        }
      </div>
    </header>
  )
}
