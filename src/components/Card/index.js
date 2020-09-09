import React from "react";
import "./styles.css";
import LexemesList from "../LexemeList";
import PronunciationList from "../PronunciationList";

export default function Card({entrie}) {
  return (
    <div className="container container-card hover-effect">
      <LexemesList lexemes={entrie.lexemes}/>
      <PronunciationList pronunciations={entrie.pronunciations} />
    </div>
  )
}
