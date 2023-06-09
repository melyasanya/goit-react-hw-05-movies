import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrandingMovies } from 'Services/api_service';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrandingMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(el => (
          <Link key={el.id} to={`/movies/${el.id}`} state={location}>
            <li>{el.title || el.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
