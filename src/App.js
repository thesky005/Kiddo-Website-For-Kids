import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from "./components/Home";
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";
import WatchList from './components/WatchList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>{/* Header is always visiable */}
        <Routes>
          <Route path ="" element ={<Login/>}/>
          <Route path ="/home" element ={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path = "/watchlist" element = {<WatchList/>}/>
          <Route path = "/search" element = {<Search/>}/>
        </Routes>
      </Router>
    </div>
  );



}

export default App;
