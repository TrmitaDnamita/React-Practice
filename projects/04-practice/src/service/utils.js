const API_KEY = 'd354583c'
const RESULT_TYPE = {
  Movie: '&type=movie',
  Series: '&type=series',
  Episode: '&type=episode',
  Empty: ''
}
const PAGES_PER_SEARCH = 5
export async function getMovieData (movieSearch, page = 1) {
  const movieData = []
  const firstURL = `https://www.omdbapi.com/?s=${movieSearch}${RESULT_TYPE.Movie}&apikey=${API_KEY}&page=${page}`
  const firstResponse = await fetch(firstURL).then(res => res.json())

  if (!firstResponse.Response || !firstResponse.totalResults) return { Data: [], MaxPage: 0, ActualPage: 0 }

  const dataArr = firstResponse.Search || []
  const results = parseInt(firstResponse.totalResults, 10)
  const totalPages = Math.ceil(results / dataArr.length)

  const actualPage = ((page - 1) * PAGES_PER_SEARCH)
  const maxPages = Math.ceil(totalPages / PAGES_PER_SEARCH)
  const pagesFetch = []
  for (let p = 1; p <= PAGES_PER_SEARCH; p++) {
    const actualP = actualPage + p
    if (actualP > totalPages) break

    const url = `https://www.omdbapi.com/?s=${movieSearch}${RESULT_TYPE.Movie}&apikey=${API_KEY}&page=${actualP}`
    pagesFetch.push(fetch(url).then(res => res.json()))
  }

  const pageResponses = await Promise.all(pagesFetch)

  for (const res of pageResponses) {
    if (!(res.Response === 'True') || !res.Search) continue
    res.Search.map((movie) => movieData.push({
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      IMDB_ID: movie.imdbID
    }))
  }

  return { Data: movieData, MaxPage: maxPages, ActualPage: page }
}
