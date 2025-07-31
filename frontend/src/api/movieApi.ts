import axios from "axios";
import { Movie } from "../types/Movie";

export const getMovies = async (
  genre?: string,
  imdb_min?: number,
  actor?: string
): Promise<Movie[]> => {
  const params: any = {};
  if (genre) params.genre = genre;
  if (imdb_min) params.imdb_min = imdb_min;
  if (actor) params.actor = actor;

  const response = await axios.get("http://localhost:8000/movies", { params });
  return response.data;
};
