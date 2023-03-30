import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  return (
    <div>
      <div className="header mb-5">
        <Header></Header>
      </div>
      
      <div className="main flex justify-between p-5">
        <div className="home-container">
          <Home></Home>
        </div>

        <div className="side-cart card">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;