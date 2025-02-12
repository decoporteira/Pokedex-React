import './App.css'
import AppRoutes from './pages/routes'
import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from './contexts/themeContext'
import { ThemeTogglerButton } from './components/themeTogglerButton'
import { useContext } from 'react'
import { ThemeContext } from './contexts/themeContext'
import GlobalStylesWrapper from './assets/styles/GlobalStyle'; // ✅ Importação correta


function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <ThemeProvider>
        <ThemeTogglerButton />
        <GlobalStylesWrapper /> 
        <AppRoutes />     
      </ThemeProvider>
    </>
  )
}

export default App
