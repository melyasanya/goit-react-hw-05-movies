const headers = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTljYmVjMDk5ZWI3NWVhNGFjNGMxOGFhNGE4OTdmYSIsInN1YiI6IjY0ODBjZDY2ZTM3NWMwMDBhY2MzODQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0o1bKzhkI6uo928gz8g9OPnHNdDQevhrtldSq_rZ-yc',
    accept: 'application/json',
  },
};

export const getTrandingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers
  ).then(response => response.json());
};

export const getMovieByName = name => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    headers
  ).then(response => response.json());
};

export const getMovieById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers
  ).then(response => response.json());
};

export const getMovieCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    headers
  ).then(response => response.json());
};

export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    headers
  ).then(response => response.json());
};
