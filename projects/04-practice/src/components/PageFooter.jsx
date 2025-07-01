export function PageFooter ({ actualPage, maxPage, changePageValue }) {
  const showBackButton = actualPage > 1 ? ' show' : ''
  const showNextButton = actualPage <= maxPage ? ' show' : ''

  return (
    <footer className='footer-class'>
      {showBackButton &&
        <button onClick={() => changePageValue(-1)}>
          {'< Back'}
        </button>}
      {Array.from({ length: 5 }, (_, i) => {
        const page = actualPage - 2 + i
        const isValid = page >= 1 && page <= maxPage
        return (
          <span
            key={page}
            onClick={(event) => changePageValue(parseInt(event.target.innerHTML, 10))}
            className={`page-number${page === actualPage ? ' actual' : ''}`}
            style={
              {
                fontWeight: page === actualPage ? 'bold' : 'normal',
                opacity: page === actualPage ? 1 : 0.8
              }
            }
          >
            {isValid ? page : ''}
          </span>
        )
      })}
      {showNextButton &&
        <button onClick={() => changePageValue(1)}>
          {'Next >'}
        </button>}
    </footer>
  )
}
