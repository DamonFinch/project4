import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useTheme } from '@mui/styles'
import LogoImage from 'src/assets/logo.png'
import {
  Logo, HeaderDiv, Text, LogoDiv, NavDiv, LinkDiv, OtherLinkDiv, ButtonDiv, WalletDiv
} from './styled/Header.styled'

import { type LinkItem, type OtherLinkItem } from 'src/types/types'
import { connectWallet, truncate } from 'src/utils'
import { useGlobalState } from 'src/state/state'

const Header = () => {
  const theme = useTheme()
  const [connectedAccount]: any = useGlobalState('connectedAccount')
  const navigate = useNavigate()
  const location = useLocation()

  const navs: LinkItem[] = [
    {
      connectRequire: false,
      name: 'Home',
      link: '/user'
    },
    {
      connectRequire: true,
      name: 'Buy NFT',
      link: '/user/buynft'
    },
    {
      connectRequire: true,
      name: 'My Collection',
      link: '/user/mycollection'
    }
  ]

  const other_navs: OtherLinkItem[] = [
    {
      name: 'About Us'
    },
    {
      name: 'Contact Us'
    }
  ]

  const gotoHandler = (name: string) => {
    let ref = null
    navigate('/')
    if (name === 'About Us') {
      ref = document.getElementById('aboutus')
    } else if (name === 'Contact Us') {
      ref = document.getElementById('contactus')
    }
    const offsetTop = ref !== null ? ref.offsetTop : 0
    window.scrollTo({
      top: offsetTop - 100,
      behavior: 'smooth'
    })
    // navigate('/')
  }

  return (
    <>
    {
      location.pathname.search('/register') === -1 &&
      <HeaderDiv theme={theme}>
        <LogoDiv>
          <Logo src={LogoImage} onClick={ () => { navigate('/') }} />
          <Text>JUDICIAL ASSET</Text>
        </LogoDiv>
        <NavDiv>
          {
            navs.map((nav, index) => (
              <LinkDiv to={nav.link} key={index} hidden={(nav.connectRequire && !connectedAccount)}>{nav.name}</LinkDiv>
            ))
          }
          {
            other_navs.map((nav, index) => (
              <OtherLinkDiv key={index} onClick={ () => { gotoHandler(nav.name) } }>{nav.name}</OtherLinkDiv>
            ))
          }
          <WalletDiv onClick={ connectWallet }> { truncate(connectedAccount, 6, 6, 16) || 'Connect Wallet' }
            { connectedAccount && <ButtonDiv onClick={ () => { navigate('/user/register') } }>Register</ButtonDiv> }
          </WalletDiv>
        </NavDiv>
      </HeaderDiv>
    }
    </>
  )
}

export default Header
