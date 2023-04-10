import * as React from 'react'
import { type NftModalProps } from 'src/types/types'
import {
  Modal, Box, Grid, Typography
} from '@mui/material'
import {
  style, ImgDiv, Title, DataDiv, Starts, Price
} from './styled/NftModal.styled'

const NftModal = ({
  open,
  handleClose,
  img,
  nftname,
  starts,
  price
}: NftModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ImgDiv src={img} />
            </Grid>
            <Grid item xs={6}>
              <Title>{nftname}</Title>
              <DataDiv><Typography>Starts:&nbsp;</Typography><Starts>{starts}</Starts></DataDiv>
              <DataDiv><Typography>Price:&nbsp;</Typography><Price>{price}</Price></DataDiv>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default NftModal
