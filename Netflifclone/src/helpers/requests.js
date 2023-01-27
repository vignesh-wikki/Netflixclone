
const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=010f90d347638b8ab3fdf93e990418b3&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=010f90d347638b8ab3fdf93e990418b3&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=010f90d347638b8ab3fdf93e990418b3&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=010f90d347638b8ab3fdf93e990418b3&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=010f90d347638b8ab3fdf93e990418b3&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=010f90d347638b8ab3fdf93e990418b3&with_genres=10749`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=010f90d347638b8ab3fdf93e990418b3&with_networks=213`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=010f90d347638b8ab3fdf93e990418b3&with_genres=99`,
};

export default requests;
