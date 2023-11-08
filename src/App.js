import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Rockets';
import Line from './components/Line'

function App() {
  return (
    <>
      <NavBar />
      <Line />
      <Routes>
        <Route path="/" element={<Mission />} />

      </Routes>
    </>
  );
}

export default App;
