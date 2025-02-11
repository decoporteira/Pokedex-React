import './App.css'
import { Button } from './components/button'
import AvatarImage from './components/image'
import AppRoutes from './pages/routes'

function App() {
  return (
    
    <>
      <Button txt='Entrar' newClass="btn btn-primary"></Button>
      <Button txt='Sair' newClass="btn btn-danger ms-1"/>
      <AvatarImage  
        alt='Ash'
      />
      <main>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row">
            <AppRoutes />
          </div>
        </div>

      </div>      
      </main>
     
    </>
  )
}

export default App
