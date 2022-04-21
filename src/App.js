import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Carreras from "./routes/Carreras";
import Contacto from "./routes/Contacto";
import Historia from "./routes/Historia";
import Blog from "./routes/Blog";
import SinglePost from "./routes/SinglePost/singlePostPage.js"

function App() {
  return (
    <>
      <Routes>
      <Route path='/Berni-Web' element={<Home />} />
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/carreras' element={<Carreras />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/historia' element={<Historia />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/post" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
