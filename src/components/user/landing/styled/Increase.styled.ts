import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 5rem;
`
export const ContentDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`
export const ItemDiv = tagStyled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 4rem;
`
export const Title = tagStyled.span`
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 5rem;
`
