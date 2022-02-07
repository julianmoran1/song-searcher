import React from "react";

function Artist({ artistResult }) {
  const { strArtist, strBiographyEN, strArtistThumb, strGenre, strFacebook, strTwitter, strLastFMChart } = artistResult;

  return (
    <div className="col mt-3 card border-light p-3">
      <h2 className="card-header bg-primary text-light font-weight-bold">
        Band Information
      </h2>
      <div className="card-body">
        <p>Artist: {strArtist}</p>
        <p className="card-text">Genre: {strGenre}</p>

        <img src={strArtistThumb} alt={strArtistThumb} />
        <p className="card-text">Bio: {strBiographyEN}</p>
        <a
          href={`https://${strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://${strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`${strLastFMChart}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  );
}

export default Artist;
