// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
// import { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("The Dark Mode has been acitvated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("The Light Mode has been acitvated","success");

    }
  }



  return (
    <>
          
     
      <div className="container">

      <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
          <Routes>
              <Route 
                   path="/about"
                    element={ <About/>}
              />
              <Route
                  path ="/"
                  element ={
                    <TextForm heading ="Enter the text to analyze below" mode={mode}/>}
              />
            </Routes>
        
      </Router>



     
      </div>

    </>
  );
}

export default App;
