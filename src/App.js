import React, { Component } from "react";
import {Route } from "react-router-dom";
import {Routes} from 'react-router-dom';

//import style sheet
import "./App.css";

//import components
import ERC20 from "./components/ER20Sale";
import  BNB from "./components/BNBSale";



//order components
function App() {
  return (
   
      <>
          <Routes>
            <Route exact="true" path="/" element={<BNB/>}></Route>
            <Route path="/ERC20" element={<ERC20/>}></Route> 
        </Routes>
      </>
   
  );
}

export default App;