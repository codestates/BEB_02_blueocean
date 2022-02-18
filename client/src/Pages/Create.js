import {FaImage} from 'react-icons/fa';
import React, {useRef, useState, useEffect} from 'react';
import axios from "axios";
import { create } from 'ipfs-http-client';
import {ethers} from 'ethers';
import ABI from '../contract/abi';
import {PUBLIC_KEY,contractAddress} from '../contract/contractAddress';
import bytecode from '../contract/bytecode';


function Create({account, walletHandler}) {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    // const [totalSupply, setTotalSupply] = useState(null);

    const fileUploader = useRef(null);

    const uploadHandler = () => {
        fileUploader.current.click();
      }
    const fileChangeHandler = (e) => {
        setFile(e.target.files[0]);

    }

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const linkHandler = (e) => {
        setExternalLink(e.target.value);
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }
    const priceHandler = (e) => {
        setPrice(e.target.value);
    }

    const checkCA = async () => {
        const info = await axios.get(`http://localhost:4000/user/${account}`);
        setUserInfo(info.data);
    }

    const submitHandler = async() => {
        // 메타마스크 로그인상태인지 체크
        const client = create('https://ipfs.infura.io:5001/api/v0');
        const CID = await client.add(file);

        const provider = new ethers.providers.Web3Provider(window.ethereum); //내주소가져옴
        const signer = provider.getSigner(); // 내주소로서명
        const gasPrice = await provider.getGasPrice() //가스비가 안주어지면 다른 계정들은 컨트랙트접근불가..
        

        let contract;

        if(userInfo.CA === null) {
            const factory = new ethers.ContractFactory(ABI, bytecode, signer)
            contract = await factory.deploy();
            console.log(contract.address);
            await axios.post("http://localhost:4000/user/update",{
                account: userInfo.account,
                CA: contract.address
            })
        } else {
            contract = new ethers.Contract(userInfo.CA, ABI, signer);
        }
      
        const tx = await contract.mintNFT(account,`https://ipfs.io/ipfs/${CID.path}`);

        // const contract =  new ethers.Contract(contractAddress, ABI, signer, {
        // });
        const totalSupply = await await contract.totalSupply();
        const tokenId = (parseInt(totalSupply._hex)) + 1

        if(tx) {
            console.log(tx);
            
        //     await axios.post("http://localhost:4000/create",{
        //     img:`https://ipfs.io/ipfs/${CID.path}`,
        //     title,
        //     externalLink,
        //     description,
        //     price,
        //     author: account,
        //     owner: account,
        //     tokenId,
        //     }
        //     )
        //     .then(() => init())
        //     .catch((err) => console.log(err));
        // } else {
        //     console.log("실패!")
        init();
        }
    }
        const init = () => {
            setFile(null);
            setTitle("");
            setExternalLink("");
            setDescription("");
            setPrice(0);
        }
    //useEffect로 지갑로그인정보가져와서 등록.
    useEffect(async()=> {
        await walletHandler();
        await checkCA();
    },[])
    return(
        <div className="mx-auto  w-9/12">
            <div className="top mx-10 my-8">
                <h1 className="text-left font-bold text-4xl">Create New Item</h1>
            </div>
            <div className="bot text-left ml-10">
                <div className="mb-2">
                    <span className="text-red-500">* </span>
                    <span className="text-zinc-500 text-sm">Required Fileds</span>
                </div>
                <div className="input_img" onClick={uploadHandler}>
                    <p className="font-bold">Image, Video, Audio, or 3D Model<span className="text-red-500"> *</span></p>
                    <p className="font-semibold text-sm text-zinc-500">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                    <button className="border-2 border-dashed border-slate-300 rounded-lg w-80 h-60 my-5 flex flex-row items-center justify-center">
                        {file ? 
                        <img 
                        src={URL.createObjectURL(file)} 
                        className="rounded-lg object-cover w-80 h-60"/> : 
                        <FaImage className="text-slate-400" size="40"/>}
                        
                        <input
                        type="file"
                        ref={fileUploader}
                        onChange={fileChangeHandler}
                        accept="image/*, audio/*, video/*"
                        style={{ display: 'none' }}
                        />
                    </button>
                </div>
                <div className="input_name mb-8">
                    <p className="font-bold">Name <span className="text-red-500">*</span></p>
                    <input onChange={titleHandler} value={title} className="border w-full h-10 rounded-lg px-3 mt-2" placeholder="item name"></input>
                </div>
                <div className="input_External_link mb-8">
                    <p className="font-bold">External Link </p>
                    <p className="text-slate-400 text-sm">BlueOcean will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                    <input onChange={linkHandler} value={externalLink} className="border w-full h-10 rounded-lg px-3 mt-2" placeholder="https://yoursite.io/item/123"></input>
                </div>
                <div className="input_Description mb-8 border-b-2 pb-10">
                    <p className="font-bold">Description</p>
                    <p className="text-slate-400 text-sm">he description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <textarea onChange={descriptionHandler} value={description} className="border w-full h-20 rounded-lg px-3 mt-2" placeholder="Provide a detailed description of your item."></textarea>
                </div>
                <div className="input_name mb-8">
                    <p className="font-bold">Price</p>
                    <input onChange={priceHandler} type="Number" value={price} className="border w-2/12 h-10 rounded-lg px-3 mt-2" placeholder="Amount"></input>
                </div>
                <button onClick={submitHandler}
                    className="border rounded-lg hover:bg-blue-700 w-24 h-12 font-bold text-center text-white bg-blue-500 flex mb-10">
                    <p className="m-auto">Create</p>
                </button>
            </div>
        </div>
    )
}
export default Create;