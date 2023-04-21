import * as React from 'react'

import {
  Box, Modal, TextField
} from '@mui/material'
import {
  style, TitleDiv, Text, FooterDiv, ButtonDiv, BodyDiv
} from './styled/BuyNftModal.styled'
import { type BuyNftItemModalProps } from 'src/types/types'
import { buyNFTFromServer } from 'src/utils'
import { useGlobalState } from 'src/state/state'

const BuyNftItemModal = ({
  open,
  handleClose,
  nftId
}: BuyNftItemModalProps) => {
  const [amount, setAmount] = React.useState(0)
  // const [buyMethod, SetBuyMethod] = React.useState(-1)
  // const hectars = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]
  const [nfts] = useGlobalState('nfts')
  const nft: any = nfts[nftId - 1]

  const handleChange = (e: any) => {
    if (e.target.value !== '') {
      setAmount(parseInt(e.target.value))
    }
  }

  const handleBuy = () => {
    const method = Array(amount).fill(nft.cost * 2)
    buyNFTFromServer(method, amount * nft.cost * 2)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TitleDiv><Text>Buy NFT</Text></TitleDiv>
        <BodyDiv>
          {nft.cost * 2} Acres X&nbsp;
          <TextField
            variant='outlined'
            onChange={handleChange}
            value={amount}
            type='number'
          />
        </BodyDiv>
        <FooterDiv>
          <ButtonDiv onClick={handleBuy}>Buy</ButtonDiv>
        </FooterDiv>
      </Box>
    </Modal>
  )
}

export default BuyNftItemModal