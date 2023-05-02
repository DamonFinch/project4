import { Grid } from '@mui/material'
import * as React from 'react'
import { useState, useEffect } from 'react'
import Chart from 'src/components/admin/dashboard/Chart'
import DetailCard from 'src/components/admin/dashboard/DetailCard'
import { useGlobalState } from 'src/state/state'
// import { withdraw } from 'src/utils'

const Dashboard = () => {
  const [todayIncome, setTodayIncome] = useState(0)
  const [monthIncome, setMonthIncome] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [data]: any = useGlobalState('chartsData')

  useEffect(() => {
    if (data.length) {
      setTodayIncome(data[data.length - 1].amount)
      let totalSum = 0
      data.map((d: any) => (totalSum += d.amount))
      setMonthIncome(totalSum)
      setTotalIncome(totalSum)
    }
  }, [data])

  // const withdrawHandle = () => {
  //   withdraw()
  // }

  return (
    <>
      <Grid container>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Today's Income" value={todayIncome} />
        </Grid>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Month's Income" value={monthIncome} />
        </Grid>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Total Income" value={totalIncome} />
        </Grid>
        {/* <Grid item xs = {12}>
          <Button onClick={withdrawHandle}>Withdraw</Button>
        </Grid> */}
        <Grid item xs = {12} sx={{ mt: 8 }}>
          <Chart />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
