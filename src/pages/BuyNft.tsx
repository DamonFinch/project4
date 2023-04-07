import * as React from 'react'
import tagStyled from 'styled-components'
import { Grid, useMediaQuery } from '@mui/material'

import NftItem from 'src/components/BuyNft/NftItem'
import BuyNftModal from 'src/components/BuyNft/BuyNftModal'
import { useGlobalState } from '../store'
// import { type NftItemType } from 'src/types/types'

// import JACARE from 'src/assets/1 - JACARE/JACARE.png'
// import JACARE1 from 'src/assets/1 - JACARE/JACARE DETALHES.png'

// import CAPIVARA from 'src/assets/2 - CAPIVARA/CAPIVARA NOTA.png'
// import CAPIVARA1 from 'src/assets/2 - CAPIVARA/CAPIVARA DETALHES.png'

// import TUCANO from 'src/assets/5 - TUCANO/TUCANO - NOTA.png'
// import TUCANO1 from 'src/assets/5 - TUCANO/TUCANO - DETALHES.png'

// import REDARARA from 'src/assets/10 - RED ARARA/ARARA RED - NOTA.png'
// import REDARARA1 from 'src/assets/10 - RED ARARA/ARARA RED - DETALHES.png'

// import SUCURI from 'src/assets/20 - SUCURI/SUCURI - NOTA.png'
// import SUCURI1 from 'src/assets/20 - SUCURI/SUCURI DETALHES.png'

// import ONCA from 'src/assets/50 - ONÇA/ONÇA - NOTA.png'
// import ONCA1 from 'src/assets/50 - ONÇA/ONÇA - DETALHES.png'

// import BLUEARARA from 'src/assets/100 - BLUE ARARA/BLUE ARARA.png'
// import BLUEARARA1 from 'src/assets/100 - BLUE ARARA/BLUE ARARA - DETALHES.png'

// import GUARA from 'src/assets/200 - GUARA/GUARA - NOTA.png'
// import GUARA1 from 'src/assets/200 - GUARA/GUARA - DETALHES.png'

const BuyNft = () => {
  // const nft1Img = [JACARE, JACARE1]
  // const nft2Img = [CAPIVARA, CAPIVARA1]
  // const nft5Img = [TUCANO, TUCANO1]
  // const nft10Img = [REDARARA, REDARARA1]
  // const nft20Img = [SUCURI, SUCURI1]
  // const nft50Img = [ONCA, ONCA1]
  // const nft100Img = [BLUEARARA, BLUEARARA1]
  // const nft200Img = [GUARA, GUARA1]

  // const nfts: NftItemType[] = [
  //   {
  //     img: nft1Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft2Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft5Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft10Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft20Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft50Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft100Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   },
  //   {
  //     img: nft200Img[Math.floor(Math.random() * 10 % 2)],
  //     nftname: 'VINTE REAIS',
  //     starts: 'Apr 15',
  //     price: '0.0975 ETH'
  //   }
  // ]

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
