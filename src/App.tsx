import React, { useState } from 'react';
import CompanyLoginPage from './components/CompanyLoginComponent';
import SelectLoginButton from './components/SelectLoginButtons';
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
  <SelectLoginButton setSelectedPortal={setSelectedPortal}/>

{controlExibedPortal()}

    </>
  )
}

export default App;
