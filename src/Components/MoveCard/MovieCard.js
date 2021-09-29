import React, { useEffect, useState } from "react";
import css from "./css/style.css";
import { getMovieDetailsById } from "../Utils";
const MovieCard = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getMovieDetailsById("tt4116284").then((resJson) => {
      setProduct(resJson);
      console.log(resJson);
    });
  }, []);
  let content = null;

  if (product) {
    content = (
      <div>
        <div>
          <img src={product.Poster} />
        </div>
        <div>
          <h3>{product.Title}</h3>
        </div>
        <div>
          <button>{product.Type}</button>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};
export default MovieCard;
