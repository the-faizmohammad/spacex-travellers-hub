import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';

function App() {
  return (
    <div>
      <Navbar />
      <Line />
      <Routes>
      <Route path="/" element={<rockets />} />
        <Route path="/missions" element={<missions />} />
        <Route path="/dragons" element={<dragons />} />
        <Route path="/my-profile" element={<my-profile />} />
      </Routes>
    </div>
  );
}

export default App;
