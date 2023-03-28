import { useEffect } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { isWallectConnected, loadMyNfts, loadNfts } from './Utils'
import { getGlobalState } from './store';

import Alert from './components/Alert'
import Footer from './components/Footer'
import Header from './components/Header'
import Loading from './components/Loading'
import Landing from './pages/Landing'
import Buy from './pages/Buy'
import MyCollection from './pages/MyCollection'

const App = () => {
  const [connectedAccount] = getGlobalState('connectedAccount');
  console.log("account", connectedAccount);

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
    await loadMyNfts()
  }, [])

  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Fragment />} > */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/buynft" element={<Buy />} />
          <Route path="/mycollection" element={<MyCollection />} />
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  )
}

export default App
