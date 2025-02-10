import { Component } from "react";
import { getPokemon } from "../assets/services/getpokemons";
import Card from "./card";

class PokemonList extends Component {
    constructor() {
        super()
        this.state = {
           pokemonList: []
        }
    }

    async componentDidMount() {
        const data = await getPokemon()
        this.setState({pokemonList: data.results})
    }

    render() {
        return (
        <section>
             {this.state.pokemonList.map((pokemon, index) => (
                     <Card key={index} title={pokemon.name}></Card>
                ))}

        </section>
        )
    }
}

export default PokemonList