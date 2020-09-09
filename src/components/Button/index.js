import React from "react";
import dictionary from "../../services/dictionary";
import {wordActions} from "../../store/wordSlice";
import {useDispatch, useSelector} from "react-redux";
import {text_map} from "../../store/searchSlice";
import "./styles.css";

export default function Button() {
  const text = useSelector(text_map);
  const dispatch = useDispatch();

  async function search(evt) {
    evt.preventDefault();
    const resp = await dictionary.get(`search?word=${text}`);

    dispatch(wordActions.setEntries(resp.data));
  }

  return (
    <div className="container-button">
      <button className="hover-effect"
              type="submit"
              onClick={(evt) => search(evt)}>Search</button>
    </div>
  )
}
