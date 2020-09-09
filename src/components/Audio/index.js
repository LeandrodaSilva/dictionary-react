import React from "react";

export default function Audio({audio}) {
  return (
    <div>
      {
        audio.url
          ?
          <audio controls="controls">
              <source src={audio.url} type="audio/mp3" />seu navegador não suporta HTML5
          </audio>
          :
          null
      }
    </div>
  )
}
