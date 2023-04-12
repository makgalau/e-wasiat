import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddWasiat from './pages/AddWasiat';
import EditWasiat from './pages/EditWasiat';
import Wasiatku from './pages/Wasiatku';
import WasiatUntukku from './pages/WasiatUntukku';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/tambah' element={<AddWasiat/>} />
          <Route path='/edit' element={<EditWasiat/>} />
          <Route path='/wasiatku' element={<Wasiatku/>} />
          <Route path='/wasiatuntukku' element={<WasiatUntukku/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
