import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Catalog from './pages/Catalog';
import VerifyEmail from './pages/VerifyEmail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Dashboard from "./pages/Dashboard";
import OpenRoute from './components/OpenRoute';
import About from './pages/About';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-5 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="verify-email" element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
