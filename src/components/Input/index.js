import React from "react";
import {searchActions, text_map} from "../../store/searchSlice";
import {useDispatch, useSelector} from "react-redux";
import "./styles.css";
import {searchIconStyle} from "../SearchIcon";

export default function Input() {
  const text = useSelector(text_map);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="input-search" hidden>Search words:</label>
      <input id="input-search"
             className="hover-effect"
             type="text"
             title="Search field"
             required
             value={text}
             style={searchIconStyle}
             onChange={evt => dispatch(searchActions.setText(evt.target.value))}
             autoFocus />
    </>
  )
}
