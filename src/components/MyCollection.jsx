import ethlogo from '../assets/ethlogo.png'
import { useEffect, useState } from 'react'
import img1 from '../assets/nfts/1.png'
import img2 from '../assets/nfts/2.png'
import img3 from '../assets/nfts/3.png'
import img4 from '../assets/nfts/4.png'
import img5 from '../assets/nfts/5.png'
import img6 from '../assets/nfts/6.png'
import img7 from '../assets/nfts/7.png'

const MyCollection = ({ artworks }) => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)

  const [nfts, setNfts] = useState([])

  const getNfts = () => {
    return artworks.slice(0, end)
  }

  useEffect(() => {
    setNfts(getNfts())
  }, [artworks, end])

  return (
    <div id="mycollection" className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-3xl">My Collection</h4>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <a
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-80 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{backgroundImage: `url(${img1})`}}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #1`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #1`}
                  />
                  1
                </div>
              </div>
            </a>
          <a
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-80 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{backgroundImage: `url(${img5})`}}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #5`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #5`}
                  />
                  5
                </div>
              </div>
            </a>
          <a
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-80 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{backgroundImage: `url(${img6})`}}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #6`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #6`}
                  />
                  6
                </div>
              </div>
            </a>
          <a
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-80 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{backgroundImage: `url(${img7})`}}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #7`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #7`}
                  />
                  7
                </div>
              </div>
            </a>
          {/* {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: 'url(' + nft.imageURL + ')' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`Adulam NFT #${nft.id}`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`Adulam NFT collection #` + nft.id}
                  />
                  {nft.cost}
                </div>
              </div>
            </a>
          ))} */}
        </div>

        {artworks.length > 0 && artworks.length > nfts.length ? (
          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f] p-2
              rounded-full cursor-pointer my-4"
              onClick={() => setEnd(end + count)}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default MyCollection
