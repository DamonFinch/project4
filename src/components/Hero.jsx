import avatar from '../assets/ethlogo.png'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Adulam'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  const BuyNFTHandler = () => {
    const reftp = document.getElementById('buynft');
    reftp?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-7xl font-bold text-center">
            Farm Arts <br />
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-xl mt-3">
            Buy the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2 pl-4 pr-4
            rounded-full cursor-pointer my-4"
            onClick={BuyNFTHandler}
          >
            Buy Now
          </button>

          <ul className="flex flex-row justify-right space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="#"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="#"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="#"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="#"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="#"
            >
              <img className="w-7 h-7" src={medium} alt="medium" />
            </a>
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
