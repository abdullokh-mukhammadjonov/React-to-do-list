import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <header style={headerStyle}>
      <h1>Todos list</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: "#45ff14"
}

const linkStyle = {
  background: "#333",
  color: "#fff"
}

export default Header;