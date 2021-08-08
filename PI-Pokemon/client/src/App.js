import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import Landing from './components/Landing/Landing.js';
import PokemonCard from './components/PokemonCard/PokemonCard';
import AddPokemon from './components/AddPokemon/AddPokemon';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Route exact path="/" component={Landing} />    
      <Route path="/pokemons" component={Nav} />
      <Route path='/pokemons/card' component={PokemonCard}/>
      <Route path='/pokemons/create' component={AddPokemon}/>
    </div>
    </React.Fragment>
  );
}

export default App;
