import tagStyled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export const ImgDiv = tagStyled.img`
    width: 100%;
`
export const Title = tagStyled.p`
    font-size: 24px;
`
export const Starts = tagStyled.p`
    font-size: 16px;
    margin: 0px;
`
export const Price = tagStyled.p`
    font-size: 16px;
    margin: 0px;
`
export const DataDiv = tagStyled.div`
    display: flex;
`
