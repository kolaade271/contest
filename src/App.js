import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./page/login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<SignUp/>} />
            </Routes>
            </BrowserRouter>

      </div>
    
    
    
  );
}
export default App
