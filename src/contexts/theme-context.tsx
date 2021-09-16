import React, { useState } from 'react'
import { StatusBarStyle } from 'react-native'

const themes = {
  dark: {
    primary: '#92C53A',
    backgroundColor: '#252C2D',
    backgroundCard: '#3A453A',
    color: '#C8D1BC',
    colorCompleted: '#252C2D',
    darkmodeIcon: '#252C2D',
    trackColor: '#252C2D',
    thumbColor: '#898A78',
    statusBar: 'dark-content' as StatusBarStyle,
  },
  light: {
    primary: '#92C53A',
    backgroundColor: '#C8D1BC',
    backgroundCard: '#898A78',
    color: '#252C2D',
    colorCompleted: '#3A453A',
    darkmodeIcon: '#C8D1BC',
    trackColor: '#898A78',
    thumbColor: '#C8D1BC',
    statusBar: 'light-content' as StatusBarStyle,
  },
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }: any) {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ dark, theme, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
export { ThemeProvider, ThemeContext }
