import * as React from 'react'
import {
  NftDiv, ImgDiv, AmountDiv, SubTitleDiv, Text, EndDiv, SmallDiv, SmallText, PicDiv, DetailDiv, DetailP
} from './styled/NftItem.styled'

import NftModal from './NftModal'

const NftItem = (props: any) => {
  const {
    img, name, amount, cost, starts
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
        <AmountDiv>{amount}</AmountDiv>
      </PicDiv>
      <SubTitleDiv>
        <Text>{name}</Text>
      </SubTitleDiv>
      <EndDiv>
        <SmallDiv>
          <SmallText>starts</SmallText>
          <Text>{starts}</Text>
        </SmallDiv>
        <SmallDiv>
          <SmallText>price</SmallText>
          <Text>{cost} ETH</Text>
        </SmallDiv>
      </EndDiv>
      <NftModal open={open} handleClose={handleClose} img={img} nftname={name} starts={starts} price={cost} />
    </NftDiv>
  )
}

export default NftItem
