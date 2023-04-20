import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    margin-top: 50px;
    .MuiGrid-grid-xs-12 {
        margin-bottom: 20px;
    }
    .first {
        padding: 1rem 4rem 2rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .second {
        display: flex;
        align-items: center;
    }
    svg {
        margin-left: 10px;
        transform: scaleY(0.7);
    }
`

export const DescDiv = tagStyled.p`
    font-size: 16px;
`

export const ButtonDiv = tagStyled.div`
    width: 150px;
    height: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`

export const ImgDiv = tagStyled.img`
    width: 100%;
    background-color: green;
    border-radius: 25px;
`
