import React from "react";
import Lexeme from "../Lexeme";

export default function LexemesList({lexemes}) {
  return (
    <div className="container-lexemes">
      <h4>Definitions:</h4>
      {
        lexemes && lexemes.map((lexeme, index) => <Lexeme key={index} lexeme={lexeme} />)
      }
    </div>
  )
}
