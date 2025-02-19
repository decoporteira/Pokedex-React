import { useContext } from "react"
import { ThemeContext, themes } from "../contexts/themeContext"
import { Button } from "../buttons/button"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Mudar Tema</Button>
        </div>
    )
}
