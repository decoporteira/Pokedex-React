import './App.css'
import AppRoutes from './services/routes'
import { ThemeProvider } from './contexts/themeContext'
import { ThemeTogglerButton } from './components/themeTogglerButton'
import GlobalStylesWrapper from './styles/GlobalStyle'

function App() {
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
