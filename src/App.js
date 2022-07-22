import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div
      className="App"
      style={{
        background: `radial-gradient(circle, rgba(255,255,255,1), rgb(193, 193, 193))`,
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
