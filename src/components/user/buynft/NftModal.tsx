import * as React from 'react'
// import { GoogleMap, KmlLayer } from '@react-google-maps/api'
// import GoogleMapReact from 'google-map-react'
import './styled/styles.css'
import { type NftModalProps } from 'src/types/types'
import {
  Modal, Box, Grid, Typography
} from '@mui/material'
import {
  style, ImgDiv, Title, DataDiv, Starts, Price
} from './styled/NftModal.styled'

const NftModal = ({
  open,
  handleClose,
  img,
  nftname,
  price
}: NftModalProps) => {
//   interface MapProps {
//     kmzUrl: string
//   }
//   const Map: React.FC<MapProps> = ({ kmzUrl }) => {
//     const mapContainerStyle = {
//       height: '500px',
//       width: '100%'
//     }
//     const center = {
//       lat: -21.50013671,
//       lng: -56.61308812
//     }
//     return (
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
//         <KmlLayer url={kmzUrl} options={{ preserveViewport: true }} />
//       </GoogleMap>
//     )
//   }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ImgDiv src={img} />
            </Grid>
            <Grid item xs={6}>
              <Title>{nftname}</Title>
              <DataDiv><Typography>Starts:&nbsp;</Typography><Starts>Apr 15</Starts></DataDiv>
              <DataDiv><Typography>Price:&nbsp;</Typography><Price>{price} ETH</Price></DataDiv>
              <DataDiv><Typography>Description:&nbsp;</Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DataDiv>
            </Grid>
          </Grid>
          {/* <EndDiv> */}
            {/* <iframe src="https://www.google.com/maps/d/embed?mid=1CMBlp__hLc_4vt_Rp3fGncMJIuXgW8k&ehbc=2E312F" width="100%" height="580"></iframe> */}
            {/* <Map kmzUrl='src/assets/map.kml' /> */}
          {/* </EndDiv> */}
        </Box>
      </Modal>
    </div>
  )
}

export default NftModal
