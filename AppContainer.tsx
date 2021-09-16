import React from 'react';
import App from './src/App';
import {ThemeProvider} from './src/contexts/theme-context';

export default function AppContainer() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
