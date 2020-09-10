import React, {useState} from "react";
import "./styles.css";
import {useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import auth from "../../services/auth";
import SessionStorage from "../../util/SessionStorage";
import {authActions} from "../../store/authSlice";
import logo from "../../assets/images/book-24px.svg";
import Button from "../../components/Button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  async function doRegister(evt) {
    evt.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    auth.post('/api/register', {
      email: email,
      password: password
    })
    .then(resp => {
      if (resp.data && resp.data.token) {
        SessionStorage.saveSession(resp.data.token);
        dispatch(authActions.setLogged(true));
        history.push("/");
      }
    })
    .catch(error => {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`${error.response.data.error}`)
      } else {
        alert(`An unexpected error occurred`)
      }
    });
    setIsLoading(false);
  }
  return (
    <>
      <header className="container-header">
        <img src={logo} alt="Open book" />
        <h1 title="Dictionary">Dictionary</h1>
      </header>
      <main className="container-register">
        <form>
          <section>
            <h2>Register</h2>
            <label htmlFor="input-email">E-mail:</label>
            <input id="input-email"
                   className="hover-effect"
                   type="text"
                   title="Search field"
                   required
                   value={email}
                   onChange={evt => setEmail(evt.target.value)}
                   autoFocus />

            <label htmlFor="input-password">Password:</label>
            <input id="input-password"
                   className="hover-effect"
                   type="password"
                   title="Search field"
                   required
                   value={password}
                   onChange={evt => setPassword(evt.target.value)}
                   autoFocus />
            <Link className="login-link" to="/login" >I already have an account</Link>
            <Button onClick={doRegister} type="button" text={isLoading ? "...Loading" : "Register"} />
          </section>
        </form>
      </main>
    </>
  )
}
