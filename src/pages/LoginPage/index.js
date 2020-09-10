import React, {useState} from "react";
import "./styles.css";
import auth from "../../services/auth";
import Button from "../../components/Button";
import SessionStorage from "../../util/SessionStorage";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";
import {useHistory} from 'react-router-dom';
import logo from "../../assets/images/book-24px.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  async function doLogin(evt) {
    evt.preventDefault();

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
        alert(`Falha no login: ${error.response.data.error}`)
      } else {
        alert(`Ocorreu um erro desconhecido`)
      }
    });
  }
  return (
    <>
      <header className="container-header">
        <img src={logo} alt="Open book" />
        <h1 title="Dictionary">Dictionary</h1>
      </header>
      <main className="container-login">
        <form>
          <label htmlFor="input-email">E-mail:</label>
          <input id="input-email"
                 className="hover-effect"
                 type="text"
                 title="Search field"
                 required
                 value={email}
                 onChange={evt => setEmail(evt.target.value)}
                 autoFocus />

          <label htmlFor="input-password">Senha:</label>
          <input id="input-password"
                 className="hover-effect"
                 type="password"
                 title="Search field"
                 required
                 value={password}
                 onChange={evt => setPassword(evt.target.value)}
                 autoFocus />
          <Button onClick={doLogin} type="button" text="Logar" />
        </form>
      </main>
    </>
  )
}
