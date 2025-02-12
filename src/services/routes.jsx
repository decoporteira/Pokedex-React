import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonSingle } from "../pages/pokemonSingle"
import PokemonsList from "../pages/pokemonsList"
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppRoutes = () => {
    return (
    <BrowserRouter future={{
        v7_startTransition: true,
      }}>
        <div className="App">
            <Link to='/'><H1>Pokédex</H1></Link>
            <Routes>
                <Route path="/" element={<PokemonsList />} />
                <Route path="/pokemon/:id" element={<PokemonSingle />} />
            </Routes>
        </div>
    </BrowserRouter>
    )
}
const H1 = styled.h1`
 margin-top: 20px;
`

export default AppRoutes;