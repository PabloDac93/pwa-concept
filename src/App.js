import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from './components/home/Home';
import './App.css';
import Login from './components/login/Login';
import AuthProvider from './firebase/Auth';
import { PrivateRoute } from './routes/PrivateRoutes';


function App() {

/*  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

 const RouterComponent= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" exact element={<div>Página no encontrada</div>} />
      </Routes>
    </Router>
  )
 }

  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
  );
}

export default App;
