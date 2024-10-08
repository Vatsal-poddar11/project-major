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
import EditProfile from "./pages/EditProfile";
import About from './pages/About';
import Consult from "./pages/Consult";
import { Route, Routes } from 'react-router-dom';
import Suggestions from './pages/Suggestions';
import Subscription from "./pages/Subscription";
import Blog from './pages/Blog';
import Reminder from './pages/Reminder';
import DoctorSelection from './pages/DoctorSelection';
import UploadPrescription from './pages/UploadPrescription';

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
        <Route path="edit" element={<EditProfile/>} />
        <Route path="about" element={<About/>} />
        <Route path="consult" element={<Consult/>} />
        <Route path="ai-suggestions" element={<Suggestions/>} />
        <Route path="subscription" element={<Subscription/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="doctor-profile" element={<DoctorSelection/>} />
        <Route path="/upload-prescription" element={<UploadPrescription />} />

      </Routes>
    </div>
  );
}

export default App;
