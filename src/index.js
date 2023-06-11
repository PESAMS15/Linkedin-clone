import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './components/Signup';
import "bootstrap/dist/js/bootstrap.bundle"
import "react-toastify/dist/ReactToastify.css"
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './components/Modal';
// import Mode from './components/Mode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path='/home' element={<App />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mode' element={<Modal />} />

        </Routes>
    {/* <Signup /> */}
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
