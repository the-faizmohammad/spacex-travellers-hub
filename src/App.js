import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import Line from './components/Line';

function App() {
  return (
    <>
      <NavBar />
      <Line />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route exact path="/dragons-setup" component={DragonsSetup} />

      </Routes>
    </>
  );
}

export default App;
