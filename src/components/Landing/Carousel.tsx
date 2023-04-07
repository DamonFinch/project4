import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import {
  ImgDiv
} from './styled/Carousel.styled'

import Img1 from 'src/assets/background1.png'
import Img2 from 'src/assets/background2.png'
import Img3 from 'src/assets/background3.png'
import Img4 from 'src/assets/background4.png'
import Img5 from 'src/assets/background5.png'

const Example = () => {
  const items = [
    Img1, Img2, Img3, Img4, Img5
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
  return (
    <ImgDiv src={item}></ImgDiv>
  )
}

export default Example
