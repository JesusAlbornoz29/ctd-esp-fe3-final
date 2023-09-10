// 1) Comienzo con las rutas
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import  Navbar from "./Components/Navbar";
import  Detail  from "./Routes/Detail";
import  Home  from "./Routes/Home";
import  Favs  from "./Routes/Favs";
import  Contact  from "./Routes/Contact";
import  Footer  from "./Components/Footer"


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail">
            <Route index element={<Detail />} />
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="favs" element={<Favs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
