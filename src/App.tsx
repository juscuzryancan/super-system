import { useState, useEffect } from 'react'
import p5 from "p5";
import Words from './components/Words';
import Chat from './components/Chat';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SockJS from "sockjs-client";

const App = () => {

  return (
    <div
      className="mx-8"
    >
      <Navbar />
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/login"
            element={<div>hello</div>}
          />
          <Route
            path="/start"
            element={<Chat />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App;
