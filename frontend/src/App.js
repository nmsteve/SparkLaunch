import React, { Component } from "react";
import {Route } from "react-router-dom";
import {Routes} from 'react-router-dom';

//import style sheet
import "./App.css";

//import components
import Vesting from "./components/VestingSale";
import  Simple from "./components/SimpleSale";



//order components
function App() {
  return (
   
      <>
          <Routes>
            <Route exact path="/" element={<Vesting/>}></Route>
            <Route path="/simple" element={<Simple/>}></Route> 
        </Routes>
      </>
   
  );
}

export default App;