import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NFT from '../Component/NFT';





// <button type="button" class="bg-indigo-500 ..." disabled>
//   <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"><!-- ... --></svg>
//   Processing...
// </button>

function Explore() {


    //map으로 서버에서 받아서 뿌려주자...
    //img, 작가이름,작품이름,가격, chain정보(폴리곤,이더,클레이튼),좋아요 갯수
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemInfo,setItemInfo] = useState([]); 
    const [heartCount, setHeartCount] = useState(0);
   

    useEffect(async() => {
        await axios
        .get('http://localhost:4000/assets')
        .then((res) => setItemInfo(res.data));
    }, []);

    const onClickHeart = (e) => {
        const count = heartCount+1;
        setHeartCount(count);
    }

 

    
    return(
        <div className=" m-20  grid
         sm:grid-cols-1 
         md:grid-cols-2 
         lg:grid-cols-3 
         xl:grid-cols-4
         2xl:grid-cols-5 gap-5" >
             <ul>
             {itemInfo.map((nft) => (
                <li key={nft.id} >
                    <NFT nftInfo={nft} />
                </li>

             )
             )}                
             </ul>
       
        </div>
    )

}

export default Explore;