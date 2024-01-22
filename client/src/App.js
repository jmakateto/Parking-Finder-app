import './styles.css'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import HowItWorks from './Components/HowItWorks';
import Reviews  from './Components/Reviews';
import AdminPanel from './Components/AdminPanel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/how-it-works" element={<HowItWorks/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
