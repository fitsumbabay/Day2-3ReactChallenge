const ApiKey = process.env.REACT_APP_OMDB_API_KEY;
const baseApiURL = `http://www.omdbapi.com/?apikey=${ApiKey}&`;

export const getMoviesBySearchTerm = async (serchMoves) => {
  const url = `${baseApiURL}s=${serchMoves}`;
  const response = await fetch(url);
  const resJson = await response.json();
  const search = await resJson.Search;
  return search;
};
getMoviesBySearchTerm().catch((error) => {
  console.log(error);
});

export const getMovieDetailsById = async (MovesID) => {
  const url = `${baseApiURL}i=${MovesID}`;
  const response = await fetch(url);
  const resJson = await response.json();
  return resJson;
};
getMovieDetailsById().catch((error) => {
  console.log(error);
});
