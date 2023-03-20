import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../Adulam'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  const BuyNFTHandler = () => {
    const reftp = document.getElementById('buynft');
    reftp?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

  const MyCollectionHandler = () => {
    const reftp = document.getElementById('mycollection');
    reftp?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethlogo} alt="Logo" />
        <span className="text-white text-2xl ml-2">NFT</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row justify-end items-center flex-initial"
      >
        {
          connectedAccount ? (
            <>
              <li className="mx-3 cursor-pointer" onClick={BuyNFTHandler}>Buy NFT</li>
              <li className="mx-3 cursor-pointer" onClick={MyCollectionHandler}>My Collection</li>
            </>
          ) : (<></>)
        }
        <li className="mx-3 cursor-pointer">About Us</li>
        <li className="mx-3 cursor-pointer">Contact Us</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-sm p-3
        rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 6, 6, 16)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-sm p-3
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
