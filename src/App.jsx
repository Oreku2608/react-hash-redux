import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Rutas con Hash <span role="img" aria-label="funny emoji">😁</span>
        </p>
        <div className="navegation">
          <Link
            className="App-link"
            to={{ pathname: "about", hash: "carlos" }}
          >
            <code>about#carlos</code>
          </Link>
          <Link
            className="App-link"
            to={{ pathname: "about", hash: "santiago" }}
          >
            <code>about#santiago</code>
          </Link>
        </div>
   
      </header>
    </div>
  );
}

export default App;
