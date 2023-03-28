import ethlogo from '../assets/ethlogo.png'
import { useEffect, useState } from 'react'
import { useGlobalState } from '../store'

const Collection = () => {

  const [nfts] = useGlobalState('myNfts')
  console.log(nfts)

  return (
    <div id="mycollection" className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-3xl">My Collection</h4>

        <div className="flex flex-wrap justify-center items-center mt-10">
        {nfts.map((nft, i) => (
            <a
              key={i}
              onClick={() => {buyNFTFromServer(nft.id, 1)}}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden m-3 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: 'url(https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/' + nft.id + '.webp)' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #${nft.id}`}</p>
                <p>{`${nft.amount} / 100`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #` + nft.id}
                  />
                  {nft.cost}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* {artworks.length > 0 && artworks.length > nfts.length ? (
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
        ) : null} */}
      </div>
    </div>
  )
}

export default Collection
