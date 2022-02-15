
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Create from './Pages/Create'
import Footer from './Component/Footer';
import NFTAsset from './Component/NFTAsset'
//  <Route path="/asset:id" element={<Asset />} />
//여기서 axios해서 Explore에 넘겨주고, 

//<Route path="/assets/:id" element={<NFTAsset />}/>


function App() {



  return (
    <div className="App">
    <Navigation />
    
    <Routes>
    <Route path="/assets" element={<Explore />}/>
    <Route path="/asset/:id" element={<NFTAsset />}/>
    <Route path="/create" element ={<Create />}/>
    <Route path="/" element={ <Home />} />
    </Routes>

    <Footer />

    </div>
  );
}

export default App;
