import defPoster from '../img/no-poster.jpg'
export function MoviesList ({ movies }) {
  return (
    <ul className='ul-class'>
      {
        movies.map((movie) => (
          <li className='li-movies' key={`${movie.IMDB_ID}`}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster ?? defPoster}
              onError={(err) => { err.target.src = defPoster }}
              width={100} height={200}
              alt={`Poster representing the movie ${movie.Title}`}
            />
          </li>
        ))
      }
    </ul>
  )
}

export function MoviesRender ({ movies, isLoading }) {
  const hasMovies = movies?.length > 0
  return (
    isLoading
      ? <span>We are loading your Movies ...</span>
      : hasMovies && <MoviesList movies={movies} />
  )
}
