export async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') 
    const pokemonsData =  await response.json() 
    return pokemonsData
 }