import { getPokemon } from "../services/getPokemons";
import Card from "../cards/card";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useContext } from "react";
import  { ThemeContext }  from "../contexts/themeContext";
import { Button } from "../buttons/button";

const List = ({pokemonList}) => {
    return (
        <>   
            { pokemonList.map((pokemon, index) => (
               
                    <Card color='red' key={index} pokeNumber={index +1} title={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} ></Card>
               
            ))}
        </>
    )
   
}
function PokemonList() {
    const { theme } = useContext(ThemeContext)
    const [pokemonList, setPokemonList] =useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon()
            setPokemonList(data.results)
        }
        fetchData()
       
    }, [])
    
    
 
    return (
        <> 
            <Section>
                <List pokemonList={pokemonList} ></List>
            </Section>
            <Button  style={{
            color: theme.color, 
            backgroundColor: theme.backgroundCard}} title="Carregar mais" onClick={() => {console.log('Clicou')}}
            className="btn">Carregar mais</Button>
        </>
        )
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  margin-top: 20px;
`

export default PokemonList