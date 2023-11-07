import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Rockets from './components/rockets';
import MyProfile from './components/my-profile';
import Missions from './components/missions';
import Dragons from './components/dragons';

function App() {
  return (
    <>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
