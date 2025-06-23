import { useState } from 'react'

export function useSearch () {
  const [error, updateError] = useState('')

  return { error, updateError }
}

export function Search ({ handleChange }) {
  const { error, updateError } = useSearch()
  const handleForm = (event) => {
    event.preventDefault()
    handleChange(
      new window.FormData(event.target).get('search')
    )
  }

  const handleSearch = (event) => {
    const newSearch = event.target.value

    if (newSearch.startsWith(' ')) {
      updateError('Remove spaces at the start to complete the search')
      return
    }
    handleChange(newSearch)
  }
  return (
    <>
      <form className='form-class' onSubmit={handleForm}>
        <input onChange={handleSearch} name='search' placeholder='Search for Movie' />
        <button type='submit'>Search</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}
