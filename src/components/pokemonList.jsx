import { getPokemon } from "../assets/services/getpokemons";
import Card from "./cards/card";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useContext } from "react";
import  { ThemeContext }  from "../contexts/themeContext";

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
            backgroundColor: theme.backgroundCard}} title="Carregar mais" onClick={() => {console.log('Clicou')}}>Carregar mais</Button>
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
const Button = styled.button`
    border-color: #dc3545;
    margin: 10px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition-duration: .3s; 
    &:hover {
      background-color: #81131e;
      cursor: pointer;
      transition-duration: .3s;  
    }`
export default PokemonList