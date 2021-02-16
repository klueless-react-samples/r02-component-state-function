import React from 'react'
import './styles/DisplayLogo.css';
import logo from '../logo.svg';

export function DisplayLogo() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
    </div>
  )
}
