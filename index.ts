import { ethers } from 'ethers'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import abi from '../abis/contracts/Contract.sol/Contract.json'
import address from '../abis/contractAddress.json'
import { getGlobalState, setGlobalState } from '../state/state'

const { ethereum }: any = window
const contractAddress = address.address
const contractAbi = abi.abi
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`
const hectars = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]

const getEtheriumContractWithoutSigner = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const contract = new ethers.Contract(contractAddress, contractAbi, provider)

  return contract
}

const getEtheriumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    return contract
  } else {
    return getGlobalState('contract')
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) { alert('Please install Metamask'); return }
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log('account', accounts)

    if (window) {
      ethereum.on('chainChanged', (chainId: any) => {
        window.location.reload()
      })

      ethereum.on('accountsChanged', async () => {
        setGlobalState('connectedAccount', accounts[0])
        await isWallectConnected()
        await loadMyNfts()
      })
    }

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      // alert('Please connect wallet.')
    }
  } catch (error) {
    reportError(error)
  }
}

const connectWallet = async () => {
  try {
    const walletconnect = new WalletConnectConnector({
      rpc: { 1: 'ethereum-rpc' }
    })
    console.log(walletconnect)

    // await activate(walletconnect, undefined, true).catch((err: any) => {
    //   walletconnect.walletConnectProvider = undefined
    // });
    // if (!ethereum) { alert('Please install Metamask'); return }
    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    // setGlobalState('connectedAccount', accounts[0])
    // await loadNfts()
    // await loadMyNfts()
    // const providerOptions = {
    //   /* See Provider Options Section */
    // }
    // const web3Modal = new Web3Modal({
    //   network: 'mainnet', // optional
    //   cacheProvider: true, // optional
    //   providerOptions // required
    // })
    // await web3Modal.connectTo('metamask')
    // await web3Modal.connect()
    // const instance = await web3Modal.connect()
    // const provider = new ethers.providers.Web3Provider(instance)
    // const signer = provider.getSigner()
  } catch (error) {
    reportError(error)
  }
}

const truncate = (text: string, startChars: number, endChars: number, maxLength: number) => {
  if (text?.length > maxLength) {
    let start = text.substring(0, startChars)
    const end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const loadNfts = async () => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContractWithoutSigner()
    const nfts = await contract.getAllNFTs()
    setGlobalState('nfts', structuredNfts(nfts))
  } catch (error) {
    reportError(error)
  }
}

const loadMyNfts = async () => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContract()
    const connectedAccount = getGlobalState('connectedAccount')
    const nfts: any = await contract.getAllNFTs()
    const myNfts = []

    for (let i = 0; i < nfts.length; ++i) {
      const nft = nfts[i]
      const count = Number(await contract.balanceOf(connectedAccount, nft.id))
      count && myNfts.push({
        id: nft.id,
        owner: nft.owner,
        amount: count,
        cost: nft.cost,
        timestamp: nft.timestamp
      })
    }

    setGlobalState('myNfts', structuredNfts(myNfts))
  } catch (error) {
    reportError(error)
  }
}

const buyNFTFromServer = async (method: number[]) => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContract()

    const tokenIds: number[] = []
    const amounts: number[] = []

    for (let i = 0; i < hectars.length; ++i) {
      if (method.filter(x => x === hectars[i]).length !== 0) {
        tokenIds.push(i + 1)
        amounts.push(method.filter(x => x === hectars[i]).length)
      }
    }

    await contract.buyFromServer(tokenIds, amounts)

    window.location.reload()
  } catch (error) {
    reportError(error)
  }
}

const structuredNfts = (nfts: any) =>
  nfts
    .map((nft: any) => ({
      id: Number(nft.id),
      img: 'http://app.judicialasset.com/api/images/' + nft.id + '.png',
      url: opensea_uri + nft.id,
      owner: nft.owner,
      amount: Number(nft.amount),
      cost: parseInt(nft.cost._hex) / 10 ** 18,
      timestamp: new Date(nft.timestamp.toNumber()).getTime()
    }))

export {
  isWallectConnected,
  connectWallet,
  truncate,
  loadNfts,
  loadMyNfts,
  buyNFTFromServer,
  getEtheriumContract,
  getEtheriumContractWithoutSigner
}
