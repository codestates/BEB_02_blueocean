import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NFT from '../Component/NFT';


function Explore() {


    const [isLoaded, setIsLoaded] = useState(false);
    const [itemInfo,setItemInfo] = useState([]); 
    const [heartCount, setHeartCount] = useState(0);
   

    useEffect(async() => {
        //정보를 가져
        await axios
        .get('http://localhost:4000/assets')
        .then((res) => setItemInfo(res.data));
        console.log(itemInfo);
    }, []);

    const onClickHeart = (e) => {
        const count = heartCount+1;
        setHeartCount(count);
    }

 

    
    return(
             <ul className=" m-20  grid
         sm:grid-cols-1 
         md:grid-cols-2 
         lg:grid-cols-3 
         xl:grid-cols-4
         2xl:grid-cols-5 gap-5" >
             {itemInfo.map((nft,index) => (
                <li key={index} >
                    <NFT nftInfo={nft} />
                </li>

             )
             )}                
             </ul>
       
    )

}

export default Explore;