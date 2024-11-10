import React from 'react'

const NFTDropPage = () => {
  return (
    <>
    {/* Left */}
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 ">
        <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="bg-gradient-to-br mt-10 from-yellow-400 to-purple-500 p-2 rounded-xl">
              <img
                className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                src="https://links.papareact.com/8sg"
                alt=""
              />
            </div>
            <div className="space-y-2 p-5 text-center ">
              <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
              <h2 className="text-xl text-gray-300">
                A collection of PAPAFAM Apes who shoots laser from eyes!
              </h2>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{" "}
              <span className="font-extrabold underline decoration-pink-600/50">
                PAPAFAM
              </span>{" "}
              NFT Market Place
            </h1>

            <button className="rounded-full bg-rose-400 hover:bg-rose-300 px-4 py-2 rexr-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
              Sign In
            </button>
          </header>
          <hr className="my-2 border" />

          {/* Content */}
          <div className="mt-10 flex flex-1 flex-col items-center justify-center ">
            <img
              className="w-80 object-cover pb-10 lg:h-40"
              src="https://links.papareact.com/bdy"
              alt=""
            />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              The PAPAFAM Ape Coding Club | NFT Drop
            </h1>
            <p className="text-green-500 pt-2 font-semibold tracking-wider">
              13 / 21 NFTs claimed
            </p>
          </div>

          {/* Minting */}
          <button className="bg-red-600 hover:bg-red-400 p-3 text-white text-lg font-bold tracking-widest rounded-full">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </>
  )
}

export default NFTDropPage