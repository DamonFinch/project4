import * as React from 'react'
import tagStyled from 'styled-components'
import { Grid, useMediaQuery } from '@mui/material'

import NftItem from 'src/components/user/buynft/NftItem'
import BuyNftModal from 'src/components/user/buynft/BuyNftModal'
import { useGlobalState } from '../../state/state'

const BuyNft = () => {
  const [nfts] = useGlobalState('nfts')
  console.log(nfts)

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const match1300 = useMediaQuery('(min-width: 1300px)')
  const match1000 = useMediaQuery('(min-width: 1000px)')
  const match665 = useMediaQuery('(min-width: 665px)')

  return (
    <MainDiv>
      <TitleDiv>
        <Text>Buy NFT</Text>
      </TitleDiv>
      <Grid container spacing={7}>
        {
          nfts.map((nft, index) => (
            <Grid item key={index} xs={match1300 ? 3 : (match1000 ? 4 : (match665 ? 6 : 12))}>
              <NftItem nft={nft} />
            </Grid>
          ))
        }
      </Grid>
      <FooterDiv>
        <ButtonDiv onClick={handleOpen}>Buy Nft</ButtonDiv>
      </FooterDiv>
      <BuyNftModal open={open} handleClose={handleClose} />
    </MainDiv>
  )
}

export default BuyNft

export const MainDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 100px 100px 100px;
    height: 100%;
    background-color: #e8e8e8;
`
export const TitleDiv = tagStyled.div`
    width: 100%;
    border-bottom: 1px solid black;
    border-color: #bbb;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`
export const Text = tagStyled.p`
    font-size: 48px;
    font-weight: 800;
    margin: 0px;
    padding-bottom: 40px;
`
export const FooterDiv = tagStyled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
`
export const ButtonDiv = tagStyled.div`
    width: 120px;
    height: 50px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-color: #aaa;
    transition: 1s;
    :hover {
      cursor: pointer;
      background-color: black;
      color: #aaa;
    }
`
