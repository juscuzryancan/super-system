import Chat from './components/Chat';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div
      className="bg-pentanary h-screen w-screen px-8"
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
