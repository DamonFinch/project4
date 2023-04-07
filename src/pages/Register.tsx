import * as React from 'react'
import LeftSide from 'src/components/Register/LeftSide'
import RightSide from 'src/components/Register/RightSide'

import {
  Grid
} from '@mui/material'

const Register = () => {
  return (
    <div style={{ padding: '0px !important' }}>
      <Grid container>
      <Grid item xs={6}>
        <LeftSide />
      </Grid>
      <Grid item xs={6}>
        <RightSide />
      </Grid>
      </Grid>
    </div>
  )
}

export default Register
