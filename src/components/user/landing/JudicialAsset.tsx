import * as React from 'react'
import {
  MainDiv, SubDiv, DescP
} from './styled/JudicialAsset.styled'
import { Typography, Grid, useMediaQuery } from '@mui/material'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'
import GroupsIcon from '@mui/icons-material/Groups'
import PersonIcon from '@mui/icons-material/Person'

const JudicialAsset = () => {
  const match800 = useMediaQuery('(min-width: 800px)')
  const match500 = useMediaQuery('(min-width: 500px)')
  const match400 = useMediaQuery('(min-width: 401px)')

  const endlist = [
    {
      icon: <WifiCalling3Icon />,
      description: 'We work under contract with Ibaneis Rocha, one of the most renowned law firms in Brazil.'
    },
    {
      icon: <GroupsIcon />,
      description: 'Our team is specialized in filtering low-rish legal assets with high profit margins.'
    },
    {
      icon: <PersonIcon />,
      description: 'Our firm has agents who are specialized in finding patent holders with high potential and and buying the rights or negotiating collective financing.'
    }
  ]
  return (
    <MainDiv style={match800 ? { height: 550 } : match400 ? { height: 800 } : { height: 950, borderRadius: '15px' }}>
      <SubDiv>
        <Typography style={match500 ? {} : { fontSize: 32 }}>Judicial Asset</Typography>
        <DescP style={ !match800 ? { width: '90%' } : {} }>Judicaial Asset is a company specializing in crowdfunding, operating with a focus Our highly qualified team has expertise in the selection of low-risk legal assets with high profit margins.</DescP>
      </SubDiv>
      <Grid container spacing={3}>
        {
          endlist.map((list, index) => (
            <Grid item xs={match800 ? 4 : 12} key={index}>
              <Grid item xs={12}>
                {list.icon}
                <Typography>{list.description}</Typography>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </MainDiv>
  )
}

export default JudicialAsset
