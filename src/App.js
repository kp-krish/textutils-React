
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route, 
//   Routes
// } from "react-router-dom"

function App() {
  const [Mod, setMod] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(Mod==='light'){
      setMod('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMod('light');  
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    // <Router>
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={Mod} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm heading="Enter Your Text Below." showAlert={showAlert} mode={Mod}/>}/>
      </Routes> */}
      <TextForm heading="Enter Your Text Below." showAlert={showAlert} mode={Mod}/>
    </div>
    </>
);
}

export default App;
