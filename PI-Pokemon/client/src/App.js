import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import Landing from './components/Landing/Landing.js';
import PokemonCard from './components/PokemonCard/PokemonCard';
import AddPokemon from './components/AddPokemon/AddPokemon';
import Pokemons from './components/Pokemons/Pokemons';
import Pagination from './components/Pagination';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Route exact path="/" component={Landing} />    
      <Route path="/pokemons" component={Nav} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route path='/pokemons/card' component={PokemonCard}/>
      <Route path='/pokemons/create' component={AddPokemon}/>
      <Route path='/pokemons' component={Pagination}/>
    </div>
    </React.Fragment>
  );
}

export default App;
