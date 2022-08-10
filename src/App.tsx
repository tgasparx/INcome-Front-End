import React, { useState } from 'react';
import CompanyLoginPage from './components/CompanyLoginComponent';
import UserLoginPage from './components/UserLoginComponent';

function App() {
  const [selectedPortal, setSelectedPortal] = useState<string>("company")
  function controlExibedPortal(){
    if(selectedPortal === "company"){
      return <CompanyLoginPage/>
    }if(selectedPortal === "user"){
      return <UserLoginPage/>
    }

    }
  return(
    <>
    <button onClick={() => setSelectedPortal("company")}>Companhia</button>
  <button onClick={() => setSelectedPortal("user")}>Motorista</button>

{controlExibedPortal()}

    </>
  )
}

export default App;
