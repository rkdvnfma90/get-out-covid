import React, { useState, useEffect } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchCovidData = async () => {
      const fetchedData = await fetchData()
      console.log(fetchedData)
      setData(fetchedData)
    }

    fetchCovidData()
  }, [])

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  )
}

export default App
