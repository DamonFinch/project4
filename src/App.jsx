import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './Adulam'
import Alert from './components/Alert'
import BuyNFTs from './components/BuyNFTs'
import MyCollection from './components/MyCollection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'

const App = () => {
  const [nfts] = useGlobalState('nfts')
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-main">
        <div className="gradient-bg">
          <div className="gradient-bg-hero">
            <Header />
            <Hero />
          </div>
          {connectedAccount && <BuyNFTs artworks={nfts} />}
          {connectedAccount && <MyCollection artworks={nfts} />}
          <Footer />
          <Loading />
          <Alert />
        </div>
      </div>
    </div>
  )
}

export default App
