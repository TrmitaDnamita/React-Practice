import { MoviesRender } from './components/Movies.jsx'
import { Search } from './components/Search.jsx'
import { PageFooter } from './components/PageFooter.jsx'

import { useMovies } from './hooks/useMovies.jsx'

import './styles/App.css'

export function App () {
  const { movieData, isLoading, changeSearchValue, changePageValue } = useMovies()

  return (
    <>
      <header className='header-class'>
        <h1>Movie Search</h1>
        <Search handleChange={value => changeSearchValue(value)} />
      </header>
      <main>
        <MoviesRender movies={movieData.Data} isLoading={isLoading} />
      </main>
      {
        (movieData.Data !== undefined) &&
          <PageFooter actualPage={movieData.ActualPage} maxPage={movieData.MaxPage} changePageValue={changePageValue} />
      }
    </>
  )
}
