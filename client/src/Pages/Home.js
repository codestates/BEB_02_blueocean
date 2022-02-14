import React from "react";
import "./Home.css";


function Home() {
    return(

        <div className="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 dBFmez jYqxGr Featured--title">
            
            <div className = "firstboard">
                <div className = "firstboardInFirst">
                    <div className="context1">
                        Discover, collect, and sell extraordinary NFTs
                    </div>
                    <div className="context2">
                        OpenSea is the world's first and largest NFT marketplace
                    </div>
                
                    <div className="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 dBFmez jYqxGr Featured--button-container">
                    <div className="Blockreact__Block-sc-1xf18x6-0 dLdEmb">
                </div>
                    <div className="divButton">
                        <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/explore-collections">Explore</button></div>
                        </div>
                        <div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/asset/create">Create</button>
                        </div>
                    </div>                
                </div>

                <div className = "secondboard">
                    <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm ">
                        <a href="#!">
                        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                        </a>
                        <div className="p-6 ">

                        <div className="text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="rounded-full w-20 mb-4 mx-auto"
                            alt="Avatar"
                        />
                        <h5 className="text-xl font-medium leading-tight mb-2">Complex Grids 007</h5>
                        <p className="text-gray-500">Mikart</p>
                        </div>

                        
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy</button>
                    </div>
                </div>
            

                </div>
            </div>

            </div>

            

            
                
            
            

            

            
            
        </div>
       
        
        
    )
}
export default Home;