import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Login from './features/auth/Login';

const App = () => {
  return (
    <div className="flex flex-col bg-pentanary h-screen w-screen px-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
