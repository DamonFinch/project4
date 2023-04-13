import * as React from 'react'
// import { googleMapsApiKey } from 'src/shared/data'

import {
  Box, Modal, TextField, Typography, RadioGroup, FormControlLabel, Radio
} from '@mui/material'
import {
  style, TitleDiv, Text, FooterDiv, ButtonDiv, MethodDiv
} from './styled/BuyNftModal.styled'
import { findSumCombinations } from 'src/utils/helper/optimizedFunc'
import { type BuyNftModalProps } from 'src/types/types'

const BuyNftModal = ({
  open,
  handleClose
}: BuyNftModalProps) => {
  const [price, setPrice] = React.useState(0)
  const hectars = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]

  const handleChange = (e: any) => {
    if (e.target.value !== '') {
      setPrice(parseInt(e.target.value))
    }
  }

  const displayPairs: number[][] = React.useMemo(() => {
    return findSumCombinations(hectars.reverse(), price)
  }, [price])

  const handleBuy = () => {
    alert('Buy NFT!!!!!')
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
        <TextField
          variant='outlined'
          onChange={handleChange}
          value={price}
          type='number'
        />
        <RadioGroup name='method'>
        {
          displayPairs.map((method, i) => (
            <FormControlLabel
              key={i}
              value={i}
              control={<Radio />}
              label = {
                <MethodDiv>
                  {
                    hectars.map((hectar, j) => (
                      <Typography key={j}>
                      {
                        method.filter(x => x === hectar).length !== 0 &&
                        <>
                          {hectar}
                          x
                          {method.filter(x => x === hectar).length}
                          &nbsp;
                        </>
                      }
                      </Typography>
                    ))
                  }
                  <br/>
                </MethodDiv>
              }
            />
          ))
        }
        </RadioGroup>
        <FooterDiv>
          <ButtonDiv onClick={handleBuy}>Buy</ButtonDiv>
        </FooterDiv>
      </Box>
    </Modal>
  )
}

export default BuyNftModal
