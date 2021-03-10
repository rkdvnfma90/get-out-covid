import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data : {confirmed, deaths, recovered, lastUpdate}}) => {

  if(!confirmed || !deaths || !recovered || !lastUpdate) {
    return '로딩중...'
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
