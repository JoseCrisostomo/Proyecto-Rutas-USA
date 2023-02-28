import React from "react";
import "./App.css";
import { ButtonLog } from "./utils/Buttons";
import { Profile } from "./utils/Profile";
import { Header } from "./componentes/Header";
import {  BuscadorConFiltros } from './OtroBuscadorFilter';
import { Route, Routes } from "react-router-dom";
import { Home } from './Home';


function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>

      <ButtonLog />
<Home/>
      <Profile />
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Routes>
            <Route path="/busqueda_abanzada" element={<BuscadorConFiltros/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
