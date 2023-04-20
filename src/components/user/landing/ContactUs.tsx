import * as React from 'react'

import { useStyles, MainDiv, ButtonDiv } from './styled/ContactUs.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, useMediaQuery } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'

const ContactUs = () => {
  const classes = useStyles()

  const match800 = useMediaQuery('(min-width: 800px)')

  return (
    <MainDiv id="contactus">
      <Grid container>
        <Grid item xs={12}>
          <TitleDiv style={{ paddingLeft: match800 ? '2rem' : '' }}>Contact Us</TitleDiv>
        </Grid>
        <Grid item xs={match800 ? 6 : 12}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email Address' />
          <textarea placeholder='Message' />
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <ButtonDiv>Send</ButtonDiv>
          </div>
        </Grid>
        <Grid item xs={match800 ? 6 : 12} className={classes.right}>
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default ContactUs
