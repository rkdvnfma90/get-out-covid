import React, { useState, useEffect } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

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

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

export default App
