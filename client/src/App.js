
import './App.css';
import React, {useState}from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';

import Navigation from './Component/Navigation';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Create from './Pages/Create'
import Footer from './Component/Footer';
import NFTAsset from './Component/NFTAsset'


function App() {
  const [errorMessage, setErrorMessage] = useState('')
  const [account,setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const walletHandler = () => {
   if(window.ethereum) {
     window.ethereum.request({method: 'eth_requestAccounts'})
     .then((res) => {
       accountHandler(res[0]);
     })
   } else {
     setErrorMessage('Install MetaMask');
   }
  }

  const accountHandler = (newAccount) => {
    setAccount(newAccount);
    setIsConnected(true);
  }
 

  return (
    <div className="App">
    <Navigation account={account} walletHandler={walletHandler}/>
    
    <Routes>
    <Route path="/assets" element={<Explore />}/>
    <Route path="/asset/:id" element={<NFTAsset walletHandler={walletHandler} account={account}/>}/>
    <Route path="/create" element ={<Create walletHandler={walletHandler} account={account}/>}/>
    <Route path="/" element={ <Home />} />
    </Routes>

    <Footer />

    </div>
  );
}

export default App;
