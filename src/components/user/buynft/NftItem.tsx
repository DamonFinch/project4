import * as React from 'react'
import NftModal from './NftModal'

import {
  NftDiv, ImgDiv, AmountDiv, SubTitleDiv, Text, EndDiv, SmallDiv, SmallText, PicDiv, DetailDiv, DetailP
} from './styled/NftItem.styled'

const NftItem = (props: any) => {
  const {
    img, nftname, starts, price
  } = props.nft

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <NftDiv>
      <PicDiv>
        <ImgDiv src={img} />
        <DetailDiv onClick={handleOpen}>
          <DetailP>DETAIL</DetailP>
        </DetailDiv>
        <AmountDiv>20</AmountDiv>
      </PicDiv>
      <SubTitleDiv>
        <Text>{nftname}</Text>
      </SubTitleDiv>
      <EndDiv>
        <SmallDiv>
          <SmallText>starts</SmallText>
          <Text>{starts}</Text>
        </SmallDiv>
        <SmallDiv>
          <SmallText>price</SmallText>
          <Text>{price}</Text>
        </SmallDiv>
      </EndDiv>
      <NftModal open={open} handleClose={handleClose} img={img} nftname={nftname} starts={starts} price={price} />
    </NftDiv>
  )
}

export default NftItem
