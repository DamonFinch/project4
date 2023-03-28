import { useEffect } from 'react'

import Alert from '../components/Alert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import BuyNFTs from '../components/BuyNFTs'

const Buy = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-main">
          <div className="gradient-bg">
            <div className="gradient-bg-hero">
              <Header />
            </div>
            <BuyNFTs />
            <Footer />
            <Loading />
            <Alert />
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy
