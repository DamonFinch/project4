import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import useThemeMode from 'src/shared/hooks/useThemeMode'
import { type ThemeModeProps } from 'src/types/hooks.types'
import Landing from 'src/pages/Landing'
import Register from 'src/pages/Register'
import BuyNft from 'src/pages/BuyNft'
import MyCollection from 'src/pages/MyCollection'
import Header from 'src/components/Layouts/Header'
// import { getGlobalState } from 'src/store'
import { isWallectConnected, loadMyNfts, loadNfts } from 'src/utils'

// const TestApp = React.lazy(async () => await import('./TestApp'))

const Main = () => {
  const { themeMode } = useThemeMode() as ThemeModeProps
  // const [connectedAccount] = getGlobalState('connectedAccount')
  // console.log(connectedAccount)

  React.useEffect(() => {
    (async () => {
      await isWallectConnected().then(() => { console.log('Blockchain Loaded') })
      await loadNfts()
      await loadMyNfts()
    })()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <React.Suspense fallback={<React.Fragment />}>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/buynft" element={<BuyNft />} />
            <Route path="/mycollection" element={<MyCollection />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Main
