import { createTheme } from "@mui/material"

export const darkMode = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)',
      light: 'hsl(0, 0%, 100%)',
      dark: 'hsl(207, 26%, 17%)',
      contrastText: 'hsl(0, 0%, 100%)'
    },
    text:{
      primary: 'hsl(0, 0%, 100%)'
    },
    background: {
      paper: 'hsl(207, 26%, 17%)',
      default: 'hsl(207, 26%, 17%)'
    }
  },
  typography: {
    fontFamily: 'Nunito Sans'
  }
})

export const lightMode = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: 'hsl(0, 0%, 100%)',
        light: 'hsl(0, 20%, 98%)',
        dark: 'hsl(200, 15%, 8%)',
        contrastText: 'hsl(200, 15%, 8%)'
      },
      background:{
        default: 'hsl(0, 0%, 98%)',
        paper: 'hsl(0, 0%, 98%)'
      },
      text: {
        primary: 'hsl(200, 15%, 8%)'
      }
    },
    typography: {
      fontFamily: 'Nunito Sans'
    }

})