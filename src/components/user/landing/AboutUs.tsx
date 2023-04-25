import * as React from 'react'

import { DescDiv, MainDiv } from './styled/AboutUs.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, useMediaQuery } from '@mui/material'
import Img1 from 'src/assets/Rectangle 285.png'
import Img2 from 'src/assets/Rectangle 306.png'
import Img3 from 'src/assets/Rectangle 307.png'
import Img4 from 'src/assets/Rectangle 308.png'

const AboutUs = () => {
  const match1440 = useMediaQuery('(min-width: 1450px)')
  const match1260 = useMediaQuery('(min-width: 1260px)')
  const match700 = useMediaQuery('(min-width: 700px)')
  const match600 = useMediaQuery('(min-width: 600px)')

  return (
    <MainDiv style={match1440 ? { display: 'flex', justifyContent: 'center', padding: '0px 15%' } : match1260 ? { display: 'flex', justifyContent: 'center', padding: '0px 10%' } : { display: 'flex', justifyContent: 'center', padding: '0px 10%', backgroundSize: 'cover' } } id="aboutus">
      <Grid container>
        <Grid item xs={match1260 ? 6 : 12} className={match1260 ? 'first' : ''}>
          <TitleDiv style={match600 ? {} : { fontSize: 32 }}>ABOUT US&nbsp;<div style={match600 ? { width: '6rem', height: '4rem', borderBottom: '0.5rem solid black' } : { width: '6rem', height: '3rem', borderBottom: '0.5rem solid black' }}></div></TitleDiv>
          <DescDiv>
            Judicaial Asset is a company specializing in crowdfunding, operating with a focus on Brazil, Paraguay, and Argentina.
            <br/><br/><br/>Welcome to our &quot;About Us&quot; section! We are excited to share with you a little more about our firm specializing in crowdfunding, operating with a focus on Brazil, Paraguay, and Argentina.
            <br/><br/><br/><br/>At our company, we strive to provide innovative and effective solutions for our clients. We are proud to work with Ibaneis Rocha, one of the most renowned law firms in Brazil, This enables us to offer reliable and secure contracts to our clients, ensuring that all legal aspects are handled with professionalism and care.
          </DescDiv>
        </Grid>
        <Grid item xs={match1260 ? 6 : 12} className={match1260 ? 'second' : match700 ? 'second1260' : ''}>
          <div style={match700 ? { display: 'flex', alignItems: 'flex-end', flexDirection: 'column' } : { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
            <img src={Img1} style={{ paddingBottom: '1.5rem' }} />
            <img src={Img3} style={{ paddingBottom: '1.5rem' }} />
          </div>
          <div style={match700 ? { display: 'flex', alignItems: 'flex-end', flexDirection: 'column', marginLeft: '5rem' } : { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
            <img src={Img2} style={{ paddingBottom: '1.5rem' }} />
            <img src={Img4} />
          </div>
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default AboutUs
