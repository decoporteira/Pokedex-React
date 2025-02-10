import './App.css'
import { Button } from './components/button'
import AvatarImage from './components/image'
import PokemonList from './components/pokemonList'


function App() {
  return (
    <>
      <Button txt='Entrar' newClass="btn btn-primary"></Button>
      <Button txt='Sair' newClass="btn btn-danger ms-1"/>
      <AvatarImage  
        alt='Ash'
      />
      <PokemonList></PokemonList>
    </>
  )
}

export default App
