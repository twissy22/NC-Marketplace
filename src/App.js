import Header from './header'
import Orders from './order'
import Item from './item.js'
import {UserContext} from './user'
import Nav from './nav'
import './App.css';
import React, {useContext} from 'react';
import Items from './items.js'
import {Link, useParams, Routes, Route} from 'react-router-dom'

function App() {
  const userValue = useContext(UserContext)
  return (
    <div className="App">
      <Nav />
      <Routes>
  <Route path="/" element={<Header />}/>
  <Route path="/myUserpage" element={<Orders />}/>
</Routes>

    </div>
  );
}

export default App;
