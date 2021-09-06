import React from 'react';
import App from './src/App';
import {ThemeProvider} from './src/theme/theme-context';

export default function AppContainer() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
