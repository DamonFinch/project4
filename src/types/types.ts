export interface IMenuItem {
  link: string
  label: string
  icon: any
}

export interface LinkItem {
  name: string
  link: string
}

export interface OtherLinkItem {
  name: string
}

export interface NftItemType {
  img: any
  nftname: string
  starts: string
  price: string
}

export interface NftModalProps {
  open: boolean
  handleClose: () => void
  img: any
  nftname: string
  starts: string
  price: string
}

export interface BuyNftModalProps {
  open: boolean
  handleClose: () => void
}
