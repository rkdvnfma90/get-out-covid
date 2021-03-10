import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api'
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(()=>{
    const fetchAPI = async () => {
      setDailyData( await fetchDailyData())
    }
    fetchAPI()
  }, [])

  

  const lineChart = (
    dailyData.length ?
    (<Line 
      data={{
        labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: '확진자',
          borderColor: 'rgba(255, 051, 102, 0.6)',
          backgroundColor: 'rgba(255, 051, 102, 0.6)',
          fill: true,
        }, {
          data: dailyData.map(({ recovered }) => recovered),
          label: '완치자',
          borderColor: 'rgba(051, 255, 102, 0.6)',
          backgroundColor: 'rgba(051, 255, 102, 0.6)',
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: '사망자',
          borderColor: 'rgba(0, 0, 0, 0.6)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          fill: true,
        }],
      }}
    />) : null
  )

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart
