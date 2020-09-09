import React from "react";
import Pronunciation from "../Pronuntiation";

export default function PronunciationList({pronunciations}) {
  return (
    <div className="container-pronuntiations">
      <h4>Pronuntiations:</h4>
      {
        pronunciations &&
        pronunciations.map((pronunciation, index) => <Pronunciation key={index} pronunciation={pronunciation} />)
      }
    </div>
  )
}
