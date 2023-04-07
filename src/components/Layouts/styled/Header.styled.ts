import tagStyled from 'styled-components'
import { Link } from 'react-router-dom'
import { styled } from '@mui/styles'

export const Logo = tagStyled.img`
    border-radius : 50%;
    width : 50px;
    height : 50px;
    cursor: pointer;
    margin-right: 20px;
`
export const HeaderDiv = tagStyled.div`
    display : flex;
    justify-content : space-between;

    @media screen and (max-width : 450px) {
        justify-content : space-between;
    }

    align-items : center;

    height : 90px;
    width : 100%;
    
    background : white;

    position : fixed;
    left : 0px;
    top : 0px;
    z-index : 100000;

    box-shadow: 0px -2px 9px 1px gray;;
`
export const Text = tagStyled.p`
    font-size: 25px;
`
export const LogoDiv = tagStyled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
`
export const NavDiv = tagStyled.div`
    margin-right: 100px;
    display: flex;
`
export const LinkDiv = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  marginLeft: '40px',
  padding: 5
})
export const OtherLinkDiv = tagStyled.div`
  text-decoration: none;
  color: black;
  margin-left: 40px;
  padding: 5px;
  cursor: pointer;
`
export const ButtonDiv = tagStyled.div`
  width: 100%;
  height: 30px;
  background-color: #181818;
  opacity: 0.7;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  display: none;
`
export const WalletDiv = tagStyled.div`
  width: 150px;
  height: 30px;
  margin-left: 40px;
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  :hover {
    div{
      display: block;
    }
  }
`
