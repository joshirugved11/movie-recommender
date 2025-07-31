import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [minIMDb, setMinIMDb] = useState(0);
  const [actor, setActor] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<any[]>([]);

  const handleSearch = async () => {
    setLoading(true);

    // Mocked data, replace with actual API logic
    setTimeout(() => {
      const mockMovies = [
        { title: 'Inception', year: 2010, imdb: 8.8 },
        { title: 'The Matrix', year: 1999, imdb: 8.7 }
      ];
      setMovies(mockMovies);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 d-flex align-items-center">
        <span role="img" aria-label="clapperboard" className="me-2">🎬</span> Movie Recommender
      </h1>

      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="e.g. Action"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            type="number"
            placeholder="Min IMDb"
            value={minIMDb}
            onChange={(e) => setMinIMDb(Number(e.target.value))}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="e.g. Tom Hanks"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
          />
        </div>
        <div className="col-12 mt-2">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {movies.map((movie, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
