import Pokecard from './Pokecard';
import data from './pokemons';
import './Pokedex.css';

const Pokedex = ({pokemons = data}) => {
    return (
        <div className="Pokedex-container">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex">
            {
                pokemons.map((pokemon) => 
                    <Pokecard pokemon={pokemon}/>
                )
            }
            </div>
        </div>
    )
};

export default Pokedex;