import tagStyled from 'styled-components'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  }
}))

export const MainDiv = tagStyled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    background-color: #F3F3F3;
    .MuiGrid-grid-xs-12 {
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
    }
    .MuiGrid-grid-xs-6 {
        padding: 10px 60px 20px 73px;
    }
    input {
        width: 100%;
        padding-left: 15px;
        height: 40px;
        margin-bottom: 5px;
        background-color: #F3F3F3;
        border: 1px solid black;
    }
    textarea {
        width: 100%;
        padding-left: 15px;
        padding-top: 20px;
        height: 80px;
        border: 1px solid black;
        background-color: #F3F3F3;
    }
    svg {
        font-size: 34px;
        margin-right: 20px;
    }
`

export const ButtonDiv = tagStyled.div`
    width: 100px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

// display: -webkit-box;
// overflow : hidden;
// text-overflow: ellipsis;
// -webkit-line-clamp: 3;
// -webkit-box-orient: vertical;
