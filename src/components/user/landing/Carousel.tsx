import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import {
  ImgDiv, CarouselDiv, ShadowDiv
} from './styled/Carousel.styled'

import Img1 from 'src/assets/Landing/1.png'
import Img2 from 'src/assets/Landing/2.png'
import Img3 from 'src/assets/Landing/3.png'
import Img4 from 'src/assets/Landing/4.png'
import { Typography, useMediaQuery } from '@mui/material'

const Example = () => {
  const items = [
    Img1, Img2, Img3, Img4
  ]

  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

interface ItemProps {
  item: any
}

const Item = ({
  item
}: ItemProps) => {
  const match800 = useMediaQuery('(min-width: 800px)')

  return (
    <CarouselDiv>
      <ImgDiv src={item}></ImgDiv>
      <ShadowDiv style={{ height: match800 ? '98.78%' : '95%' }}></ShadowDiv>
      {match800 && <Typography>Farm Arts NFT Collection</Typography>}
      {match800 &&
        <p className='description'>
          The investor who purchases the Aurora Farm NFT is investing in an asset backed by farms, which means an <br/>
          asset that has an intrinsic value based on a real, productive property that generates income.
        </p>
      }
    </CarouselDiv>
  )
}

export default Example
