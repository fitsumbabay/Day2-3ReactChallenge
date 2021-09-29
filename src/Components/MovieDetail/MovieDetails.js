import React, { useEffect, useState } from "react";
import css from "./css/style.css";
import { getMovieDetailsById } from "../Utils";
import Spinner from "../Spinner";
const MovieDetails = (
  Poster,
  Title,
  Rated,
  Runtime,
  Plot,
  Genre,
  Actors,
  imdbRating
) => {
  const [product, setProduct] = useState(null);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getMovieDetailsById("tt1285016")
        .then((resJson) => {
          setProduct(resJson);
          // console.log(resJson);
        })
        .finally(() => {
          setIsLoding(false);
        });
    }, []);
  }, 5000);

  // const Loding = <div>Loding ...</div>;

  let content = null;

  if (product) {
    content = (
      <articl className="top_contaner">
        <div className="Images_contaner">
          <img src={product.Poster} />
        </div>
        <div className="text">
          <div className="flex">
            <div>
              <h2>{product.Title}:</h2>
            </div>
            <div className="rating_contaner">{product.imdbRating}</div>
          </div>

          <ul className="tags_contaner">
            <li>{product.Rated}</li>
            <li>{product.Runtime}</li>
            <li>{product.Genre}</li>
          </ul>
          <div>
            Plot <br />
            {product.Plot}
          </div>
          <div>
            Actors <br />
            {product.Actors}
          </div>
        </div>
      </articl>
    );
  }

  return <div>{isLoding ? <Spinner /> : content}</div>;
};

export default MovieDetails;
