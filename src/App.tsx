import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import React from 'react'

import { store } from './app-state'
import { AppRoutes } from './Routes'
import { lightTheme, darkTheme, theme80s } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

export default function App() {
  const { value } = useDarkMode(false, { global: globalThis.window })
  const [currentTheme, setCurrentTheme] = React.useState('light')

  React.useEffect(() => {
    if (value) {
      setCurrentTheme('dark')
    }
  }, [value])

  const theme = React.useMemo(() => {
    switch (currentTheme) {
      case 'dark':
        return darkTheme
      case '80':
        return theme80s
      default:
        return lightTheme
    }
  }, [currentTheme])

  return (
    <Router>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </StoreProvider>
    </Router>
  )
}
