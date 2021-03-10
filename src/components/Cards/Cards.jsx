import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CardComponent from './Card/Card'

const Cards = ({data : {confirmed, deaths, recovered, lastUpdate}}) => {

  if(!confirmed) {
    return '로딩중...'
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={10} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="감염"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="코로나 확진자"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="완치"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="코로나 완치자"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="사망"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="코로나로 인한 사망자"
        />
      </Grid>
    </div>
  )
}

export default Cards
