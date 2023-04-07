import * as React from 'react'

import Carousel from 'src/components/Landing/Carousel'
import AboutUs from 'src/components/Landing/AboutUs'
import ContactUs from 'src/components/Landing/ContactUs'

const Landing = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 100px' }}>
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
