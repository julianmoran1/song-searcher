import React, { useState } from "react";
import Error from "../components/Error";

function Form({ setSearch, emptyResults }) {
  const [inputValues, setInputValues] = useState({ artist: "", song: "" });
  const [error, setError] = useState(false);

  const { artist, song } = inputValues;

  const onChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }

    setSearch(inputValues);
    setError(false);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={onSubmit}
            action=""
            className="col card text-white bg-transparent mb-5 pt-5 pb-2 "
          >
            <fieldset>
              <legend className="text-center">Lyrics searcher</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist's name"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song's name"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>

        {error && <Error message="All fields are mandatory" />}
        {emptyResults && <Error message="No results for that query" />}
      </div>
    </div>
  );
}

export default Form;
