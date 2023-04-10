import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import {
  LeftSide
} from './AdminSide.styled'
import {
  List, ListItemButton, ListItemText
} from '@mui/material'
import { type NavType } from 'src/types/types'

const AdminSide = () => {
  const navs: NavType[] = [
    {
      name: 'DASHBOARD',
      link: '/admin/dashboard'
    },
    {
      name: 'USERS',
      link: '/admin/users'
    },
    {
      name: 'NEWS',
      link: '/admin/news'
    }
  ]
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (nav: NavType) => {
    navigate(nav.link)
  }

  return (
    <LeftSide>
      <List>
        {
          navs.map((nav, index) => (
            <ListItemButton key={index} selected={ location.pathname.includes(nav.link) } onClick={() => { handleNavClick(nav) }}>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          ))
        }
      </List>
    </LeftSide>
  )
}

export default AdminSide
