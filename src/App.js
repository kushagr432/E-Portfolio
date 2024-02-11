import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
// import UserCard from './Components/AssessmentCrypto';
// import CelebrareAssign from './Components/CelebrareAssign';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Projects from './Components/Projects';
function App() {
  return (
    <Routes>
      {/* <Route path="/"  element={<UserCard/>} />
      <Route path="/celeb"  element={<CelebrareAssign/>} /> */}
    <Route path="/"  element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/exp" element={<Experience/>} />
    <Route path="/contact" element={<Contact/>} />
    {/* Add more routes for other pages */}
  </Routes>
  );
}

export default App;
