import { useEffect } from 'react'

import Alert from '../components/Alert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'

const Landing = () => {
  return (
    <>
        <div className="min-h-screen">
            <div className="gradient-bg-main">
                <div className="gradient-bg">
                <div className="gradient-bg-hero">
                    <Header />
                </div>
                <Hero />
                <AboutUs />
                <ContactUs />
                <Footer />
                <Loading />
                <Alert />
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing
