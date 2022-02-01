import React from "react";

export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <>
      <div id={imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Poster} alt="img" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}<i className="material-icons right">more_vert</i>
          </span>
          <p>{Year} <span className="right">{Type}</span></p>
         
        </div>
      
      </div>
    </>
  );
}
