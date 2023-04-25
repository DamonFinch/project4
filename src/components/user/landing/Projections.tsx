import * as React from 'react'
import { MainDiv, Title } from './styled/Projections.styled'
import { Box } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const Projections = () => {
  return (
    <MainDiv>
      <Title>Property / Region Valuation Projections</Title>
      <Box>
        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <CheckIcon style={{ color: '#8adaaa', marginRight: '1rem' }} />
          <span>This route will pass in front of Aurora Farm and transform the state into a national logistical hub that could raise the value of the asset to over&nbsp;</span><span style={{ color: 'green' }}>+$600 million.</span>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon style={{ color: '#8adaaa', marginRight: '1rem' }} />
          <span>The Major Geopolitical objective of brazil Professor HOC&nbsp;</span><span style={{ color: 'green' }}>+$600 million.</span>
        </Box>
      </Box>
    </MainDiv>
  )
}

export default Projections
