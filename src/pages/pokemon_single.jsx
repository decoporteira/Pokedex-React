import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/card"

async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    console.log(data.name)
    return data
    
} 

export const PokemonSingle = () => {
    const [pokemon, setpokemon] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const data = await fetchPokemon(id)
            setpokemon(data)
        }
        fetchData()
    },[])
    return (
        <div>
            <Card title={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} type={pokemon.types?.[0].type.name} color="red" />
        </div>
    )

    
}