import React from 'react'
import App from './src/App'
import { Provider } from 'react-redux'
import { store } from './src/redux'
import { ThemeProvider } from './src/contexts/theme-context'

export default function AppContainer() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  )
}
