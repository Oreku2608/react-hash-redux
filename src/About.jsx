import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom'
import useMessage from './hooks/use-mesage'

function App() {
  const { location } = useHistory()
  const { changeMessage, message } = useMessage()

  useEffect(() => {
    if (location && location.hash) {
      changeMessage(location.hash)
    }

  }, [location, changeMessage])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola me llamo {message} y me gusta Mayonesa con Queso 🤮
        </p>
        <Link
          className="App-link"
          to="/"
        >
          Regresar
        </Link>
      </header>
    </div>
  );
}

export default App;
