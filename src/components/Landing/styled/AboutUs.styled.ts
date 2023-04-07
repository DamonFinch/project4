import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    margin-top: 50px;
    .MuiGrid-grid-xs-12 {
        margin-bottom: 20px;
    }
    .MuiGrid-grid-xs-5 {
        padding: 10px 60px 20px 73px;
        height: 400px;
    }
    svg {
        margin-left: 10px;
        transform: scaleY(0.7);
    }
`

export const DescDiv = tagStyled.p`
    font-size: 16px;
    height: 310px;
    overflow: hidden;
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
    height: 460px;
    background-color: green;
    border-radius: 25px;
`
