import React, {useState} from "react";
import "./styles.css";
import auth from "../../services/auth";
import Button from "../../components/Button";
import SessionStorage from "../../util/SessionStorage";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";
import {Link, useHistory} from 'react-router-dom';
import logo from "../../assets/images/book-24px.svg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  async function doLogin(evt) {
    evt.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    auth.post('/api/login', {
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
        setErrorMessage(`Login error: ${error.response.data.error}`)
      } else {
        setErrorMessage(`Unexpected error`)
      }
    });
    setIsLoading(false);
  }

  function renderErrorMessage() {
    if (!errorMessage) {
      return null;
    }
    return (<span className="error-message">{errorMessage}</span>)
  }

  return (
    <>
      <header className="container-header">
        <img src={logo} alt="Open book" />
        <h1 title="Dictionary">Dictionary</h1>
      </header>
      <main className="container-login">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">Home</Link>
          <Link
              color="textPrimary"
              to="/login"
              aria-current="page"
          >
            Login
          </Link>
        </Breadcrumbs>
        <form>
          <section className="container-login">
            <h2>Login</h2>
            <div>
              <label htmlFor="input-email">E-mail:</label>
              <input id="input-email"
                     className="hover-effect"
                     type="text"
                     title="Search field"
                     placeholder="eve.holt@reqres.in"
                     required
                     value={email}
                     onChange={evt => setEmail(evt.target.value)}
                     autoFocus />
            </div>

            <div>
              <label htmlFor="input-password">Password:</label>
              <input id="input-password"
                     className="hover-effect"
                     type="password"
                     title="Search field"
                     placeholder="cityslicka"
                     required
                     value={password}
                     onChange={evt => setPassword(evt.target.value)}
              />
            </div>

            {renderErrorMessage()}

            <Button onClick={doLogin} type="button" text={isLoading ? "...Loading" : "Login"} />
            <Link className="register-link" to="/register" >Don't have an account?</Link>
          </section>
        </form>
      </main>
    </>
  )
}
