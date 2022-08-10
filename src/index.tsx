import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeCompanies from './pages/HomeCompanies';
import HomeUsers from './pages/HomeUsers';
import { GlobalStyle } from './globalStyles';
import CompanyRegistryPage from './pages/CompanyRegistryPage';
import UserRegistryPage from './pages/UserRegistryPage';
import { ContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <GlobalStyle/>
    <ContextProvider>
    <Routes>
      
    <Route path="/" element={<App/>}/>
    <Route path="/companyRegistry" element={<CompanyRegistryPage/>}/>
    <Route path="/userRegistry" element={<UserRegistryPage/>}/>
    <Route path="/homeCompanies" element={<HomeCompanies/>}/>
    <Route path="/homeUsers" element={<HomeUsers/>}/>
   
    </Routes>
    </ContextProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
