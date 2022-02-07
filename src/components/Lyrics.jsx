import React from "react";

function Lyrics({lyricsResult}) {
  return (
    <div className="col mt-3">
      <h2>Lyrics</h2>
      <p className="lyrics">{lyricsResult}</p>
    </div>
  );
}

export default Lyrics;
