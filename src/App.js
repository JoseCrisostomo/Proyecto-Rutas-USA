import React from "react";
import "./App.css";
import { ButtonLog } from "./utils/Buttons";
import { Profile } from "./utils/Profile";
import { Header } from "./componentes/Header";
import {  ModalBusquedaAvanzada } from './componentes/Modal/Modal';
import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
//import { Resultados } from './MasResultados' 

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      {/*<Resultados/>*/}
      <ButtonLog />
<Home/>
      <Profile />
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Routes>
            <Route path="/busqueda_avanzada" element={ModalBusquedaAvanzada} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
