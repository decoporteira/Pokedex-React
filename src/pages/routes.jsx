import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonSingle } from "./pokemon_single"
import PokemonList from "../components/pokemonList"

const AppRoutes = () => {
    return (
    <BrowserRouter future={{
        v7_startTransition: true,
      }}>
        <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonSingle />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;