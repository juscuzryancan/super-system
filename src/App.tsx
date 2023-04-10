import Chat from './components/Chat';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Game from './pages/Game';

const App = () => {

  return (
    <div
      className="bg-pentanary h-screen w-screen px-8"
    >
      <Navbar />
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
          path="/game"
          element={<Game />}
        />
      </Routes>
    </div>
  )
}

export default App;
