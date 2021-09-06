import React, {useState} from 'react';
import {StatusBarStyle} from 'react-native';

const themes = {
  dark: {
    backgroundColor: '#212121',
    backgroundCard: '#313131',
    color: '#ffffff',
    colorCompleted: '#dddddd',
    darkmodeIcon: '#313131',
    statusBar: 'dark-content' as StatusBarStyle,
  },
  light: {
    backgroundColor: '#ffffff',
    backgroundCard: '#ebebeb',
    color: '#000000',
    colorCompleted: '#474747',
    darkmodeIcon: '#ffffff',
    statusBar: 'light-content' as StatusBarStyle,
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({children}: any) {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    console.log('toggled darkmode');
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{dark, theme, toggleDark}}>
      {children}
    </ThemeContext.Provider>
  );
}
export {ThemeProvider, ThemeContext};
