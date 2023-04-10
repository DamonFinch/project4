import * as React from 'react'

import Carousel from 'src/components/user/landing/Carousel'
import AboutUs from 'src/components/user/landing/AboutUs'
import ContactUs from 'src/components/user/landing/ContactUs'

const Landing = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 3rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginTop: 150 }}>
          <Carousel />
          <AboutUs />
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default Landing
