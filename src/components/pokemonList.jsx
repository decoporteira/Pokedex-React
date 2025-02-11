import { getPokemon } from "../assets/services/getpokemons";
import Card from "./card";
import React, {useState, useEffect} from "react";


const List = ({pokemonList, showCardColor}) => {
    return (
        <>   
        {console.log(pokemonList)}
            { pokemonList.map((pokemon, index) => (
                    <Card color='red' key={index} pokeNumber={index +1} title={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} showCardColor={showCardColor}></Card>
            ))}
        </>
    )
   
}
function PokemonList() {
    const [pokemonList, setPokemonList] =useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon()
            setPokemonList(data.results)
        }
        fetchData()
       
    }, [])
    
    
    const showCardColor = (color) => {
        console.log("Card color clicked:", color);
    }; 
    return (
        <>
                <List pokemonList={pokemonList} showCardColor={showCardColor}></List>
           
        </>
        )
}

export default PokemonList