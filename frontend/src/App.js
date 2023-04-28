import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import ManageUser from './components/user/ManageUser';

function App() {
  return (
    <div>
 <BrowserRouter>
 <Navbar />
    <Routes>
   
   
   
      
      <Route path="/" element={ <Navigate to="/home" /> } />
      <Route path='main' element={ <Main/> } />
      <Route path='home' element={ <Home/> } />
      <Route path='login' element={ <Login/> } />
      <Route path='signup' element={ <Signup/> } />
     <Route path='manageuser' element={ <ManageUser/> } />
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;
