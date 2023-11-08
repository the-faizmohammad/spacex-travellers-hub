import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Rockets';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Mission />} />

      </Routes>
    </>
  );
}

export default App;
