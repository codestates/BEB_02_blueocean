import {useEffect, useState} from 'react';
import {FaEthereum, FaRegHeart} from "react-icons/fa";
import {MdVerticalSplit,  MdBallot, MdSubject,MdOutlineAccountBalanceWallet, MdLocalOffer } from "react-icons/md";
import {useParams} from 'react-router-dom';
import axios from 'axios';

function NFTAsset() {
    const id = useParams().id;
    const [NFTDetail,setNFTDetail] = useState({});
    const {owner,price,liked,name,author,img,} = NFTDetail
   
    
    useEffect(async() => {
        await axios.get(`http://localhost:4000/detail/?id=${id}`)
        .then((res) => {
            console.log(res.data[0])
            setNFTDetail(res.data[0]);
        }).catch((err) => {
            console.log(err);
        });
    },[])

    return (
    <div id="wrap" className="flex w-auto justify-center my-10">
        <div id="Asset" className=" flex justify-center w-3/4">
            <div id="left" className="w-1/2 grow-0 ">
                <article className="image border rounded-lg">
                    <div className="flex justify-between mx-3 h-7 mt-2">
                        <span><FaEthereum /></span>
                        <div className="heart inline ">
                            <button ><FaRegHeart /></button>
                            <span className="inline-block ml-2 ">{liked}</span>
                        </div>
                    </div>
                    <img src={img} 
                         className=" rounded-b-l  h-64 w-full"/>
                </article>
                <section className="font-sans border rounded-lg mt-5 text-left">
                        <div className="mx-5 divide-y font-bold">
                            <div ><MdSubject className="inline mr-2"/>Description</div>
                            <div className="my-3 font-normal text-gray-300" >CreateBy {author}
                                <p className="text-sm text-black mt-2">3D블라블라브라</p>
                            </div>
                            <div><MdVerticalSplit className="inline mr-2"/>About Author</div>
                            <div><MdBallot className="inline mr-2"/>Details</div>
                        </div>
                </section>
            </div>
            <div id="right"  className="grow text-left mx-5 ">
                <div id="price_info" className="font-ser"></div>
                    <p className="text-blue-300 font-bold">{author}</p>
                    <p className="my-5 font-bold text-5xl">Title</p>
                    <p className="text-gray-400">Owner</p>
                    <div id="sale_time" className="border rounded-lg bg-zinc-50">
                        <div className="m-5 ">Sale ends Time</div>
                        <div className="m-5 ">
                             <p>Current price</p>
                             <p className="text-bold text-3xl"><FaEthereum className="inline mr-2"/>{price}</p>
                         </div>
                         <div className="m-3">
                            <button className="border rounded-lg w-40 h-12 font-bold text-center text-white bg-blue-500">
                              <MdOutlineAccountBalanceWallet className="inline"/>
                             Buy  Now
                              </button>
                           <button className="border rounded-lg w-40 h-12 font-bold text-center text-blue-500 mt-5 border-blue-500">
                             <MdLocalOffer className="inline mr-2"/>
                              Make offer
                           </button>
                           </div>
                </div>
                <div id="transaction"></div>
            </div>
        </div>
    </div>
    )
}

export default NFTAsset;