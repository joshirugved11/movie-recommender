// src/components/FiltersForm.tsx
import React, { useState } from "react";

type Props = {
  onSearch: (genre: string, imdb: number, actor: string) => void;
};

export default function FiltersForm({ onSearch }: Props) {
  const [genre, setGenre] = useState("");
  const [imdb, setImdb] = useState(0);
  const [actor, setActor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(genre, imdb, actor);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="flex flex-col w-full sm:w-1/3">
        <label className="text-sm text-gray-600">Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="e.g. Action"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/3">
        <label className="text-sm text-gray-600">Min IMDb</label>
        <input
          type="number"
          value={imdb}
          onChange={(e) => setImdb(+e.target.value)}
          placeholder="e.g. 7.5"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/3">
        <label className="text-sm text-gray-600">Actor</label>
        <input
          type="text"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          placeholder="e.g. Tom Hanks"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2 sm:mt-0"
      >
        Search
      </button>
    </form>
  );
}
