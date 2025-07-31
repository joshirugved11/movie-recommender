import React from 'react';

interface MovieCardProps {
  movie: {
    title: string;
    year: number;
    imdb: number;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Year: {movie.year}</p>
        <p className="card-text">IMDb: ⭐ {movie.imdb}</p>
      </div>
    </div>
  );
};

export default MovieCard;
