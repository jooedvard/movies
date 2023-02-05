import Link from "next/link";
import Movie from "./Movie";

const KEY = process.env.API_KEY;
const API = "https://api.themoviedb.org/3/movie/popular?api_key=" + KEY;

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: 228;
};

async function fetchMovies() {
  const request = await fetch(API, { next: { revalidate: 100 } });
  const movies = await request.json();
  return movies.results;
}

export default async function Movies() {
  const movies = await fetchMovies();

  return (
    <div>
      <h3 className="text-lg text-gray-300 m-5">Popular Movies</h3>
      <div className="grid grid-cols-fluid mx-5 my-5 gap-5">
        {movies.map((movie: Movie) => {
          return (
            <Link href={"/movies/" + movie.id.toString()}>
              <Movie
                key={movie.id}
                title={movie.title}
                image={movie.poster_path}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
