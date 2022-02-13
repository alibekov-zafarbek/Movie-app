import React, { useState } from "react";

export default function Search({searchMovie}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all') 
  

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovie(search, type);
    }
  };

  const handleFilter = (e) => {
    console.log(e.target.dataset);
    setType(e.target.dataset.type)
    searchMovie(search, e.target.dataset.type)
    

  };
    return (
      <>
        <div className="row">
          <div className="col s12">
            <div className="input-field ">
              <input
                id="email_inline"
                placeholder="Search"
                type="search"
                className="validate"
                value={search}
                onChange={(e) =>setSearch( e.target.value)}
                onKeyDown={handleKey}
              />
              <button
                className="btn search-btn"
                onClick={() => searchMovie(search, type)}
              >
                Search Movies
              </button>
            </div>
            <div>
              <label>
                <input
                  onChange={handleFilter}
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  checked={type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  onChange={handleFilter}
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  checked={type === "movie"}
                />
                <span>Movies Only</span>
              </label>
              <label>
                <input
                  onChange={handleFilter}
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  checked={type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
}
