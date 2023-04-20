import * as React from 'react'

import {
  styled, Modal, Box, Typography
} from '@mui/material'

import MetaMaskIcon from 'src/assets/Img/metamask.png'
import WalletConnectIcon from 'src/assets/Img/walletConnectIcon.svg'
import CoinbaseWalletIcon from 'src/assets/Img/coinbaseWalletIcon.svg'
import TrustIcon from 'src/assets/Img/trust.png'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4
}

const NftModal = ({
  open,
  handleClose
}: any) => {
  const walletlist = [
    { title: 'Metamsk', src: MetaMaskIcon },
    { title: 'walletConenct', src: WalletConnectIcon },
    { title: 'Coinbase Wallet', src: CoinbaseWalletIcon },
    { title: 'Trust Wallet', src: TrustIcon }
  ]

  return (
    <div>
      <MuiModal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        open={open}
        onClose={handleClose}
        title='Connect a Wallet'
      >
        <Box sx={style}>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography style={{ marginBottom: '1rem', fontSize: 24, fontWeight: 600 }}>Connect a Wallet</Typography>
            <Typography sx={{ fontSize: '35px', marginTop: '-8px' }} onClick={handleClose}>&times;</Typography>
          </Box>
          <Box>
          {
            walletlist.map((wallet: any, index: number) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #999', padding: '0rem 1rem', height: '3.5rem', borderRadius: '15px', background: '#f3f3f3', marginBottom: '1rem' }}>
                <Typography>{wallet.title}</Typography>
                <img style={{ width: '10%' }} src={wallet.src} />
              </Box>
            ))
          }
          </Box>
        </Box>
      </MuiModal>
    </div>
  )
}

const MuiModal = styled(Modal)({
  '& .MuiDialogTitle-root': {
    paddingInline: '30px',
    '& .close-btn': {
      right: '15px'
    }
  },
  '& .MuiDialogContent-root': {
    paddingInline: '20px'
  }
})

export default NftModal
