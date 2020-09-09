import React from "react";

export default function Lexeme({lexeme}) {
  return (
    <>
      {
        lexeme.senses ? lexeme.senses.map((sense, index) => <p key={index}>{sense.definition}</p>) : null
      }
    </>
  )
}
