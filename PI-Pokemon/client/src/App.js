import './App.css';
import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getPokemons} from './actions/index'

import Nav from './components/Nav/Nav.js'
import Landing from './components/Landing/Landing.js';
import PokemonCard from './components/PokemonCard/PokemonCard';
import AddPokemon from './components/AddPokemon/AddPokemon';
import Pokemons from './components/Pokemons/Pokemons';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';

// import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPokemons)
  })
  return (
    <React.Fragment>
    <div className="App">
      <Route exact path="/" component={Landing} />    
      <Route path="/pokemons" component={Nav} />
      <Route exact path="/pokemons" component={Search} />
      <Route exact path="/pokemons" component={Pagination} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route path='/pokemons/card' component={PokemonCard}/>
      <Route path='/pokemons/create' component={AddPokemon}/>
      {/* <Route path='/pokemons' component={Pagination}/> */}
    </div>
    </React.Fragment>
  );
}

export default App;
