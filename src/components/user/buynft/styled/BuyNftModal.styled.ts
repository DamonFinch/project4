import tagStyled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  overflow: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '& .MuiTextField-root': {
    width: '30%',
    marginBottom: 3,
    '& .MuiOutlinedInput-input': {
      textAlign: 'right'
    }
  },
  '& .MuiFormGroup-root': {
    width: '100%'
  }
}

export const TitleDiv = tagStyled.div`
  width: 100%;
  border-bottom: 1px solid black;
  border-color: #bbb;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`
export const Text = tagStyled.p`
  font-size: 48px;
  font-weight: 800;
  margin: 0px;
  padding-bottom: 40px;
`

export const FooterDiv = tagStyled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonDiv = tagStyled.div`
  width: 120px;
  height: 50px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-color: #aaa;
  transition: 1s;
  :hover {
    cursor: pointer;
    background-color: black;
    color: #aaa;
  }
`

export const MethodDiv = tagStyled.div`
  display: flex;
  width: 100%;
`
export const EndDiv = tagStyled.div`
  width: 100%;
  height: 700px;
  padding: 0;
  margin: 0;
`
export const MapDiv = tagStyled.div`
  height: 360px;
  width: 300px;
  overflow: hidden;
  float: left;
  border: thin solid #333;
`
export const CaptureDiv = tagStyled.div`
  height: 360px;
  width: 480px;
  overflow: hidden;
  float: left;
  background-color: #ECECFB;
  border: thin solid #333;
  border-left: none;
`
