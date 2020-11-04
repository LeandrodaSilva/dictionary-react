import React, {useEffect} from "react";
import SessionStorage from "../../util/SessionStorage";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";
import {wordActions} from "../../store/wordSlice";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  function doLogout() {
    SessionStorage.deleteSession();
    dispatch(authActions.setLogged(false));
    dispatch(wordActions.setEntries({entries: []}));
    history.push("/");
  }

  useEffect(() => {
    doLogout()
  })

  return (<></>);
}
