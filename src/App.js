import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/Users/landingPage';
import AdminLogin from './Components/Admin/adminLogin';
import AdminPortal from './Components/Admin/adminPortal';
import UserPortal from './Components/Users/userPortal';
import UserLogin from './Components/Users/userLogin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={< LandingPage/>} path='/'/>
      <Route element={< AdminLogin/>} path='/adminLogin'/>
      <Route element={< AdminPortal/>} path='/adminPortal/*'/>
      <Route element={< UserLogin/>} path='/userLogin'/>
      <Route element={< UserPortal/>} path='/userPortal/*'/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;