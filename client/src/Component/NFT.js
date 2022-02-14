import {useState, useEffect} from 'react';
import {axios} from 'axios';
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom';

function NFT({onClickHeart,itemInfo}) {

/*마지막 체인_좋아요 => div_wrap {flex}
    div_chain
    div heart+count {flex}
      p
      div

추가적으로 클릭시 상세페이지이동 구현
데이터를 10개묶음식 어떻게 받아올 것인가?
*/

const detailInfo = (e) => {
    console.log(typeof itemInfo)
}

return(
    <div >

            {itemInfo.map((nft,idx) => (
                
                <Link to ="/asset">
                <div ket={idx} className="Item_wrap flex flex-col justify-center border-2 border-gray rounded-lg overflow-hidden">
                <div className="img_wrap divide-y divide-gray-400/50 ">
                  <img src={nft.img}
                       className="block object-cover h-64 w-full"/>
               </div>
             <div className="item_info_wrap flex justify-between w-full max-w-md w-full mx-auto bg-white shadow-md rounded-md px-4  my-1" >
                 <div className="item_info text-left">
                     <p>{nft.author}</p>
                     <p className="font-bold">{nft.name}}</p>
                 </div>
                 <div className="price_info text-right" >
                     <p>price</p>
                     <div className="font-bold flex ">
                         <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                             className="ml-4 object-scale-down h-4 w-3 align-center"/>
                         <span className="ml-1">{nft.price}</span>
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
         </div>
        </Link>
            )
            )}
    
</div>
)
}

export default NFT;