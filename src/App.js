import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Employee } from './components/pages/Employee';
import { Vendor } from './components/pages/Vendor';
import Navbar from './components/navbar/Navbar';
import AllEmails from './components/pages/AllEmails';

function App() {
  return (
    <>
    <Navbar />
     <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path='/vendor' element={<Vendor />} />
            <Route path='/allemails' element={<AllEmails />} />
        </Routes>
    </>
  );
}

export default App;
