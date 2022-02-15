
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom';

function NFT({onClickHeart, nftInfo}) {
   
   
/*
 <Link to ={{
                pathname:`/asset/${nftInfo.id}`,
                state: {
                    nft,
                }
            }}>
             </Link>
            
            */
    return(
        <div className="Item_wrap flex flex-col justify-center border-2 border-gray rounded-lg overflow-hidden">
         <Link to={{
             pathname:`/asset/${nftInfo.id}`,
          
         }}>
            <div className="img_wrap divide-y divide-gray-400/50 ">
                <img src={nftInfo.img}
                    className="block object-cover h-64 w-full"/>
            </div>
            <div className="item_info_wrap flex justify-between w-full max-w-md w-full mx-auto bg-white shadow-md rounded-md px-4  my-1" >
                <div className="item_info text-left">
                    <p>{nftInfo.author}</p>
                    <p className="font-bold">{nftInfo.name}</p>
                </div>
                <div className="price_info text-right" >
                    <p>price</p>
                    <div className="font-bold flex ">
                        <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                            className="ml-4 object-scale-down h-4 w-3 align-center"/>
                        <span className="ml-1">{nftInfo.price}</span>
                    </div>
                    <p className="left_days">7 days left</p>
                </div>
            </div>
            <div id="item_chain_heart" className="max-w-md w-full shadow-md rounded-md px-4 h-7 mt-3  ">
                <div id="item_chain_heart_wrap"className=" flex justify-between ">
                    <span><FaEthereum /></span>
                    <div className="heart">
                    <button onClick={onClickHeart}><FaRegHeart /></button>
                    <span className="inline-block ml-2 ">0</span>
                </div>
            </div>
        </div>
        </Link>
      
    </div>


            )
}

export default NFT;