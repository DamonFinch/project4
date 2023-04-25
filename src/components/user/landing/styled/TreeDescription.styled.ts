import tagStyled from 'styled-components'
import backImg from 'src/assets/Rectangle 324.png'

export const MainDiv = tagStyled.div`
    display: flex;
    margin-bottom: 10rem;
    border-radius: 15px;
    overflow: hidden;
`
export const BackDiv = tagStyled.div`
    width: 50%;
    background-image: url('${backImg}');
    background-size: 100% 100%;
    height: 730px;
`
export const RightDiv = tagStyled.div`
    width: 50%;
    background-color: #13544e;
    padding: 10% 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DescDiv = tagStyled.div`
    display: flex;
    svg {
        color: #8adaaa;
        margin-right: 1rem;
    }
    .MuiTypography-root {
        border-bottom: 1px solid #326a65;
        padding-bottom: 2rem;
        color: #e1e9e9;
    }
`
