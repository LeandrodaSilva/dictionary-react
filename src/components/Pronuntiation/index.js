import React from "react";
import Audio from "../Audio";

export default function Pronunciation({pronunciation}) {
  return (
    <>
      {
        pronunciation.audio ? <Audio audio={pronunciation.audio}/> : null
      }
    </>
  )
}
