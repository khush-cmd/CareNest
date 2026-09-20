import React from 'react'
import PatientForm from './patient/patientForm';
import MyProfile from './patient/MyProfile';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PatientForm/>} />
      <Route path="/profile" element={<MyProfile/>} />
    </Routes>
    </BrowserRouter>
    
  )
}
export default App;