import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";
import Artist from "./components/Artist";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({});
  const [lyricsResult, setLyricsResult] = useState("");
  const [artistResult, setArtistResult] = useState({});
  const [emptyResults, setEmptyResults] = useState(false);

  useEffect(() => {
    if (Object.keys(search).length === 0) return;

    const apiQueryLyrics = async () => {
      const { artist, song } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setLyricsResult(result.lyrics.split("\n").slice(1).join("\n"));
        setEmptyResults(false);
        console.log(result);
      } catch (error) {
        setEmptyResults(true);
        return;
      }
      const response = await fetch(url);
      const result = await response.json();
      setLyricsResult(result.lyrics.split("\n").slice(1).join("\n"));
      console.log(result);
    };
    apiQueryLyrics();

    const apiQueryArtist = async () => {
      const { artist } = search;
      const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        setArtistResult(result.artists[0]);
        setEmptyResults(false);
        console.log(result);
      } catch (error) {
        setEmptyResults(true);
        return;
      }
    };
    apiQueryArtist();
  }, [search]);

  return (
    <Fragment>
      <Form setSearch={setSearch} emptyResults={emptyResults} />

      <div className="container">
        <div className="row">
          {Object.keys(artistResult).length > 0 && (
            <Artist artistResult={artistResult} />
          )}

          {Object.values(artistResult) === null && <p>No hay resultados</p>}
          {lyricsResult && <Lyrics lyricsResult={lyricsResult} />}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
