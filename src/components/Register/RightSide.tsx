import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, RegisterDiv, Title, FooterDiv, BtnDiv, IconDiv } from './styled/RightSide.styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  TextField, Grid
} from '@mui/material'

const RightSide = () => {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <IconDiv onClick={() => { navigate('/') }}>
        <ArrowBackIcon />
      </IconDiv>
      <RegisterDiv>
        <Title>Register</Title>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="text"
              variant='standard'
            />
          </Grid>
        </Grid>
        <FooterDiv>
          <BtnDiv>Register</BtnDiv>
        </FooterDiv>
      </RegisterDiv>
    </MainDiv>
  )
}

export default RightSide
