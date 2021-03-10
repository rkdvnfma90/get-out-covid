import React, { useState, useEffect } from 'react'
import { Cards, Chart, CountryPicker, DarkModeToggle } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import logo from './images/logo.png'
import useTheme from './Hooks/useTheme'
import { CssBaseline } from '@material-ui/core'
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')
  const [theme, toggleTheme] = useTheme()

  const palletType = theme === 'dark' ? 'dark' : 'light'
  const mainPrimaryColor = theme === 'dark' ? orange[500] : lightBlue[500]
  const mainSecondaryColor =
    theme === 'dark' ? deepOrange[900] : deepPurple[500]
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  })

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData())
    }

    fetchAPI()
  }, [])

  const handleCountryChange = async (country) => {
    const fetchDataWithCountry = await fetchData(country)
    setData(fetchDataWithCountry)
    setCountry(country)
  }

  const handleThemeChange = () => {
    toggleTheme()
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.container}>
        <CssBaseline />
        <DarkModeToggle
          theme={theme}
          handleThemeChange={handleThemeChange}
        ></DarkModeToggle>
        <img className={styles.image} src={logo} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    </ThemeProvider>
  )
}

export default App
