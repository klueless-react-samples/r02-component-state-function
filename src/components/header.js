import React from 'react'
import { DisplayLogo } from '.'

export function Header() {
  return (
    <header className="App-header">
      <DisplayLogo></DisplayLogo>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}
