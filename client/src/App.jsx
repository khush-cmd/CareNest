import { useEffect, useState } from "react";
import PatientForm from "./patient/patientForm";


const App = () => {
  const [message,setMessage] = useState("");

  useEffect(() => {
    
    const fetchHealth = async () => {
      try{
        const response = await fetch("http://localhost:3001/api/health");
        const data = await response.json();
        setMessage(data.message);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchHealth();
},[])
  return (
    <div>
      <h1>CareNest</h1>
      <p>{message}</p>
      <PatientForm/>
    </div>
  )
}
export default App;