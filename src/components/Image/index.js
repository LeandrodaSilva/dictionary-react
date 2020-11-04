import React from "react";
import "./styles.css";
import {DICTIONARY_URL} from "../../services/dictionary";

export default function Image({file}) {
  return (
    <div className="container-image">
      <img src={DICTIONARY_URL+file.url}  alt={file.name}/>
    </div>
  )
}
