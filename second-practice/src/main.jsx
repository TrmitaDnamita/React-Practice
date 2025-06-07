import React from 'react'
import ReactLogo from './assets/react.svg'
import { createRoot } from 'react-dom/client'

const root = createRoot( document.getElementById('root') )

const Nav = () => {
  return (
    <header class="padding-x3 padding-y2 flex flex-row justify-between align-center w-80 max-w-xl bg-primary">
      <div class="flex flex-grow basis-0">
        <img src={ReactLogo} alt="React-Logo" />
      </div>
      <h1 class="ft-family-secondary">WWWapas</h1>
      <nav class="flex flex-grow justify-end basis-0">
        <ul class="flex list-none flex-row font-size-md">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </nav>
    </header>
  )
}

root.render(
  <React.Fragment>
    <Nav />
  </React.Fragment>
)