import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import Line from './components/Line';
import Dragons from './components/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <NavBar />
      <Line />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route exact path="/dragons" element={<Dragons />} />
        <Route path="/MyProfile" element={<MyProfile />} />

      </Routes>
    </>
  );
}


export default App;
