import React, { useEffect, useState } from "react";
import { getMoviesBySearchTerm } from "../Utils";
import css from "./css/style.css";
function MovieList(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesBySearchTerm("Batman").then((search) => {
      setMovies(search);
      // console.log(search);
    });
  }, []);

  let content = null;
  if (movies) {
    content = movies.map((movies, index) => (
      <div key={movies.index}>
        <br />
        <img src={movies.Poster}></img>
        <h3>{movies.Title}</h3>
        <button className="button">{movies.Type}</button>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default MovieList;
