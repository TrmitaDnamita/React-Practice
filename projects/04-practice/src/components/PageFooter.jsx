export function PageFooter ({ actualPage, maxPage, changePageValue }) {
  const showBackButton = actualPage > 1 ? ' show' : ''
  const showNextButton = actualPage <= maxPage ? ' show' : ''
  return (
    <footer className='footer-class'>
      {showBackButton &&
        <button onClick={() => changePageValue(-1)}>
          {'< Back'}
        </button>}
      <span>Page: {actualPage}/{maxPage}</span>
      {showNextButton &&
        <button onClick={() => changePageValue(1)}>
          {'Next >'}
        </button>}
    </footer>
  )
}
