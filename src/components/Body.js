import React, { useState } from 'react'
import './styles/Body.css';

export function Body() {
  const [title, setTitle] = useState("Body goes here1");

  function onButtonClick(message) {
    setTitle(message);
  }

  const onButtonClick2 = () => {
    var message = 'Hello World';
    alert(message);
  }

  return (
    <div className='Body'>

      <h2>{title}</h2>

      <button onClick={ () => onButtonClick('The quick brown fox') }>
        Click Me for Fox Color
      </button>

      <button onClick={ onButtonClick2 }>
        Click Me for Salutation
      </button>

    </div>
  )
}
