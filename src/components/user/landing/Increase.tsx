import * as React from 'react'
import { ContentDiv, ItemDiv, MainDiv, Title } from './styled/Increase.styled'
import { Typography } from '@mui/material'

const Increase = () => {
  const itmes = [
    { year: '2013', desc: 'The property in question has been improving its value uninterruptedly and with new governmental works it will increase even more in value in the next few years.' },
    { year: '2015', desc: 'The property in question has been improving its value uninterruptedly and with new governmental works it will increase even more in value in the next few years.' },
    { year: '2016', desc: 'The property in question has been improving its value uninterruptedly and with new governmental works it will increase even more in value in the next few years.' }
  ]
  return (
    <MainDiv id='increase'>
      <Title>Value Increase of Farms in MS</Title>
      <ContentDiv>
        {
          itmes.map((item, i) => (
            <ItemDiv key={i}>
              <Typography style={{ fontSize: 40, fontWeight: 800 }}>{item.year}</Typography>
              <Typography style={{ width: '55%' }}>{item.desc}</Typography>
            </ItemDiv>
          ))
        }
      </ContentDiv>
    </MainDiv>
  )
}

export default Increase
