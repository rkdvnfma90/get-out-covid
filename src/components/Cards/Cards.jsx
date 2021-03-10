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

        {/* <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              감염
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2} separator=","/>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              확진자
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              완치
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2} separator=","/>
            </Typography>
            <Typography color="textSecondary">
              Real Date
            </Typography>
            <Typography variant="body2">
              완치자
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              사망
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2} separator=","/>
            </Typography>
            <Typography color="textSecondary">
              Real Date
            </Typography>
            <Typography variant="body2">
              사망자
            </Typography>
          </CardContent>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Cards
