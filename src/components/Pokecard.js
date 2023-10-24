import './Pokecard.css';

const Pokecard = ({pokemon}) => {
    const {id, name, type, base_experience} = pokemon;
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img src={sprite}/>
            <div className="Pokecard-stats">Type: {type}</div>
            <div className="Pokecard-stats">EXP: {base_experience}</div>
        </div>
    )
}

export default Pokecard;