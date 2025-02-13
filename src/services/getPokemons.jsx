export async function getPokemon(offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const pokemonsData = await response.json()
    return pokemonsData
}