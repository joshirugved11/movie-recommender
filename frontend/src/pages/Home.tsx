import { useState } from "react";
import FiltersForm from "../components/FiltersForm";
import { getMovies } from "../api/movieApi";
import { Movie } from "../types/Movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (genre: string, imdb: number, actor: string) => {
    const results = await getMovies(genre, imdb, actor);
    setMovies(results);
  };

  return (
    <div>
      <h1>Movie Recommender</h1>
      <FiltersForm onSearch={handleSearch} />
      <ul>
        {movies.map(m => (
          <li key={m.title}>{m.title} ({m.year}) - IMDb: {m.imdb}</li>
        ))}
      </ul>
    </div>
  );
}
