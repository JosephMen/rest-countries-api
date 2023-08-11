
import { Box, CssBaseline} from '@mui/material'
import './App.css'
import Bar from './components/Bar'
import Content from './components/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import { ThemeProvider } from '@emotion/react'
import {lightMode, darkMode} from './services/themes'
import { useState } from 'react'
import { themeSaved } from './services/constants'



function App() {

  let [isDarkMode, setDarkMode] = useState(() => {
    const themeChoose = window.localStorage.getItem(themeSaved)
    let isDark = false
    if (themeChoose){
      const theme = JSON.parse(themeChoose)
      isDark = theme.isDark 
    }
    return isDark

  })
  const changeDarkMode = () => {

    window.localStorage.setItem(themeSaved, JSON.stringify({isDark: !isDarkMode}))
    setDarkMode(!isDarkMode)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
        <CssBaseline />
          <Bar changeDarkMode={changeDarkMode}/>
        <Box sx={{ height: '100%'}}>
          {/* <Content /> */}
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='Details/:countryName' element={<CountryDetails />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App
