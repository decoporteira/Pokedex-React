import { getPokemon } from "../assets/services/getpokemons";
import Card from "./card";
import React, {useState, useEffect} from "react";

const List = ({pokemonList, showCardColor}) => {
    return (
        <>   
            { pokemonList.map((pokemon, index) => (
                    <Card color='red' key={index} title={pokemon.name} showCardColor={showCardColor}></Card>
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
        <section>
            {pokemonList.length > 0 ? 'Muitos Pokémon encontrados' : 'Nenhum Pokémon encontrado'}
            <List pokemonList={pokemonList} showCardColor={showCardColor}></List>

        </section>
        )
}

export default PokemonList