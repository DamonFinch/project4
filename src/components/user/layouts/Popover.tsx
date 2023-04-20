import * as React from 'react'
import {
  Popover, List, ListItem
} from '@mui/material'

import { Link } from 'react-router-dom'
import { styled } from '@mui/styles'

const MyPopover = ({
  open,
  anchorEl,
  handleClose,
  navs,
  connectedAccount
}: any) => {
  React.useEffect(() => {
    console.log(anchorEl)
  }, [open])

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      style={{ zIndex: 100 }}
    >
      <List>
      {
        navs.map((nav: any, index: number) => (
          <ListItem key={index}>
            <LinkDiv to={nav.link} hidden={(nav.connectRequire && !connectedAccount)}>{nav.name}</LinkDiv>
          </ListItem>
        ))
      }
      </List>
    </Popover>
  )
}

export const LinkDiv = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  marginLeft: '1rem',
  padding: 5
})

export default MyPopover
