import { useEffect, useState } from 'react'
import { getMovieData } from '../service/utils'

const TIMEOUT_BOUNCE = 1200

export function useMovies () {
  const [value, setValue] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [actualPage, setActualPage] = useState(1)

  useEffect(() => {
    if (!value) return
    const timeoutId = setTimeout(() => {
      setisLoading(true)
      getMovieData(value, actualPage)
        .then(data => setMovies(data))
        .finally(() => setisLoading(false))
    }, TIMEOUT_BOUNCE)
    return () => clearTimeout(timeoutId)
  }, [value, actualPage])

  function changeSearchValue (newValue = '') {
    if (!newValue) return
    const trimmed = newValue.trim()
    if (!trimmed || value === trimmed) return
    setActualPage(1)
    setValue(newValue)
  }

  function changePageValue (changeValue) {
    const newPage = actualPage + changeValue
    if (newPage > parseInt(movies.MaxPage)) return
    if (newPage < 1) return
    setActualPage(newPage)
  }

  return { movieData: movies, isLoading, changeSearchValue, changePageValue }
}
