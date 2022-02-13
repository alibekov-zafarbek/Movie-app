import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.omdbapi.com/?apikey=be99c5e7&s=panda")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false)
        
      });
  },[]);

  const searchMovies = (str, type = "all") => {
    setLoading(true)

    fetch(
      `https://www.omdbapi.com/?apikey=be99c5e7&s=${
        str === "" ? "panda" : str
      }${type !== "all" ? `&type=${type}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setMovies(data.Search)
      });
  };

  return (
    <>
      <div className="container content">
        <Search searchMovie={searchMovies} />
        {!loading ? <Movies movies={movies} /> : <Loader />}
      </div>
    </>
  );
}
