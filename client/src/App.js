
import './App.css';
import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Explore from './Pages/Explore';
import Asset from './Component/NFTAsset'
import Home from './Pages/Home';
import Footer from './Component/Footer';
//  <Route path="/asset:id" element={<Asset />} />
//여기서 axios해서 Explore에 넘겨주고, 
function App() {
  return (
    <div className="App">
    <Navigation />
    
    <Routes>
    <Route path="/collection" element={<Explore />}/>
    <Route path="/asset" element={<Asset />} />
    <Route path="/" element={ <Home />} />
    </Routes>
    
    <Footer />

    </div>
  );
}

export default App;
