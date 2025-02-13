import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from '../contexts/themeContext';

async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

async function fetchPokemonAbility(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const PokemonSingle = () => {
    const { theme } = useContext(ThemeContext);
    const [pokemon, setPokemon] = useState({});
    const [abilitiesData, setAbilities] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchPokemon(id);
            setPokemon(data);

            const abilitiesWithTranslation = await Promise.all(
                data.abilities.map(async (ability) => {
                    const abilityData = await fetchPokemonAbility(ability.ability.url);

                    const abilityInEnglish = abilityData.effect_entries.find(entry => entry.language.name === 'en'
                    );
                    const abilityDescription = abilityInEnglish ? abilityInEnglish.effect : "Descrição não disponível";
                    return {
                        abilityName: abilityData.name,
                        abilityDescription
                    };
                })
            );
            setAbilities(abilitiesWithTranslation);
        }
        fetchData();

    }, [id]);

    return (
        <Section>
            <CardInside style={{ color: theme.color, backgroundColor: theme.backgroundCard }}>
                <h1>{pokemon.name}</h1>
                <IMG className="img-big" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt='pokemon' />
                <h2><strong>Pokedex #:</strong> {pokemon.id}</h2>
                <p><strong>Height:</strong> {pokemon.height * 10} cm</p>
                <p><strong>Weight:</strong> {pokemon.weight * 0.1} kg</p>
                <h3><strong>Type:</strong></h3>
                {pokemon.types && pokemon.types.map((type, index) => (
                    <p key={index}>{type.type.name}</p>
                ))}

                <h3><strong>Abilities:</strong></h3>
                {abilitiesData.length > 0 ? (
                    abilitiesData.map((ability, index) => (
                        <p key={index}>
                            <strong>{ability.abilityName}:</strong> {ability.abilityDescription}
                        </p>
                    ))
                ) : (
                    <p>Loading abilities...</p>
                )}

                <h3><strong>Moves:</strong></h3>
                {pokemon.moves ? (
                    <p>{pokemon.moves.map((move, index) => move.move.name).join(', ')}</p>
                ) : (
                    <p>Loading moves...</p>
                )}
            </CardInside>
        </Section>
    );
};

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  p {
    margin-block-start: .4em;
    margin-block-end: .4em;
  }
  h3 {
    margin-top: 15px;
    margin-block-end: .4em;
  }
`;

const CardInside = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 35px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background-color: #fafafa;
  transition-duration: .3s;
  width: 960px;
  padding-left: 30px;
  padding-right: 30px;
  height: auto;
`;

const IMG = styled.img`
  width: 150px;
`;
