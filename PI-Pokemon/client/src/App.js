import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './components/Nav/Nav.js'

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <h1>Henry Pokemon</h1>
    </div>
      <Route path="/pokemons" component={Nav} />
    </React.Fragment>
  );
}

export default App;
