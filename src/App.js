import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Carreras from "./routes/Carreras";
import Contacto from "./routes/Contacto";

function App() {
  return (
    <>
      <Routes>
      <Route path='/Berni-Web' element={<Home />} />
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/carreras' element={<Carreras />} />
      <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
