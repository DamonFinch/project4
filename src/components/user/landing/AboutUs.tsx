import * as React from 'react'

import { DescDiv, ButtonDiv, ImgDiv, MainDiv } from './styled/AboutUs.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import img1 from 'src/assets/Landing/Rectangle 346.png'

const AboutUs = () => {
  const match760 = useMediaQuery('(min-width: 1000px)')
  const match500 = useMediaQuery('(min-width: 600px)')

  return (
    <MainDiv id="aboutus">
      <Grid container>
        <Grid item xs={match760 ? 6 : 12} className={match500 ? 'first' : ''}>
          <TitleDiv>AboutUs</TitleDiv>
          <DescDiv>
            The value of the Aurora Farm NFT is directly linked to the performance of the farm and agricultural production, which brings a certain stability and security to the investment.
            <br/><br/>Additionally, the investor who purchases Aurora Farm NFT is contributin to the real economy, supporting agricultural production, and consequently helping to feed the world&lsquo;s population.
            <br/><br/>This type of token is known as a &quot;stablecoin&quot; and is commonly used for speculative purpose, as it is not tied to any asset or commodity.<br/>
            This means that the value of the token is completely dependent on investor confidence and market supply and demand.
          </DescDiv>
          <ButtonDiv>View More<ArrowForwardIcon /></ButtonDiv>
        </Grid>
        <Grid item xs={match760 ? 6 : 12} className='second'>
          <ImgDiv src={img1}>
          </ImgDiv>
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default AboutUs
