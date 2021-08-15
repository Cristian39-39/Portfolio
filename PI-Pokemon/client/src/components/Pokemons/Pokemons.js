import { useSelector } from "react-redux";
import PokemonCard from '../PokemonCard/PokemonCard';
import './Pokemons.css'

export default function Pokemons(){

    var pokemons = useSelector(state => state.pokemonRender)

    if(pokemons){
        return (
            <div>
                <div className='cards container'>
                    {
                        pokemons.map((p) => {
                            return<PokemonCard 
                            id={p.id}
                            name={p.name}
                            img={p.img}
                            types={p.types}
                            key={p.name}
                        />})
                            
                    }
                </div>
            </div>
        )
    }
}

