import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import ManageUser from './components/user/ManageUser';
import Addorganiser from './components/admin/Addorganiser';
import Admin from './components/admin';
import { Toaster } from 'react-hot-toast';
import BrowseOrganiser from './components/main/BrowseOrganiser';
import Organiserdetail from './components/main/Organiserdetail';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster position='top-right' />
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
          <Route path="browseorganiser" element={<BrowseOrganiser />} />
            <Route path="organiserdetail/:id" element={<Organiserdetail />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="addorganizer" element={<Addorganiser />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
