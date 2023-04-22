import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from "./components/Home";
import Detail from './components/Detail';
//import Login1 from './components/Login/Login1';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";
import Originals from './components/Originals';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>{/* Header is always visiable */}
        <Routes>
          <Route path ="" element ={<Login/>}/>
          <Route path ="/home" element ={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path = "/original" element = {<Originals/>}/>
        </Routes>
      </Router>
    </div>
  );



}

export default App;
