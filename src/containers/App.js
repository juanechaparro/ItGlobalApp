import { useState } from "react";
import { Form } from "../components/Form";
import { NavMenu } from "../components/NavMenu";


function App() {
  const [airline, setAirline] = useState("Viva air");
  return (
    <div className= "appit__container" >
      <NavMenu setAirline = {setAirline}/>
      <Form airline ={airline}/>
    </div>
  );
}

export default App;
