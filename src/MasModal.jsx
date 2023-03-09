
/*
import React, { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { BUSCAR_RUTAS_CON_FILTROS } from './Queries'

export const ModalMasAvanzada = () => {



  //const [searchTerm, setSearchTerm] = useState("");
  const [Match, setMatch] = useState('');
  const [Fecha_Inicio, setFecha_Inicio] = useState('');
  const [Fecha_Fin, setFecha_Fin] = useState('');
  const [Idioma_Ruta, setIdioma_Ruta] = useState('');
  const [Tipo_Vehiculo, setTipo_Vehiculo] = useState('');

  const [RUTA, { data }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS);
  console.log(data)
  const handleData=(data) =>{
    sessionStorage.setItem('data', JSON.stringify(data));
  }

  const handleSearch = () => {
    RUTA({
      variables: {
        Match,
        Fecha_Inicio,
        Fecha_Fin,
        Idioma_Ruta,
        Tipo_Vehiculo
      }
    }
    )
  }
  return (
    <div>
      <div className="form-search-advanced">
        <label>BUSCAR MAS:</label>
        <input placeholder='Buscar por Ciudades, Lugares, Parques, etc' type="text" value={Match} onChange={(e) => setMatch(e.target.value)} />

        <label>FECHA INICIO RUTA:</label>
        <input type="date" value={Fecha_Inicio} onChange={(e) => setFecha_Inicio(e.target.value)} />

        <label>FECHA FIN RUTA:</label>
        <input type="date" value={Fecha_Fin} onChange={(e) => setFecha_Fin(e.target.value)} />

        <label>IDIOMA:</label>
        <select value={Idioma_Ruta} onChange={(e) => setIdioma_Ruta(e.target.value)} >
          <option value="">Todos los Idiomas</option>
          <option value="Castellano">Castellano</option>
          <option value="Ingles">Ingles</option>
          <option value="Frances">Frances</option>
          <option value="Aleman">Aleman</option>
        </select>

        <label>TIPO VEHICULO:</label>

        <select value={Tipo_Vehiculo} onChange={(e) => setTipo_Vehiculo(e.target.value)}>
          <option value="">Todos lo Vehiculos</option>
          <option value="Automovil">Automovil</option>
          <option value="Motocicleta">Motocicleta</option>
          <option value="Bicicleta">Bicicleta</option>
          <option value="AutoCaravana">AutoCaravana</option>
          <option value="Caravana">Caravana</option>
          <option value="Canoa">Canoa</option>
          <option value="Kayak">Kayak</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

    </div>
  )
}
*/
/*****************/

/*
export const SearchAdvancedForm = () => {
    const [Match, setMatch] = useState('');
    const [Fecha_Inicio, setFecha_Inicio] = useState('');
    const [Fecha_Fin, setFecha_Fin] = useState('');
    const [Idioma_Ruta, setIdioma_Ruta] = useState('');
    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState('');
  
    const [RUTA, { loading, error, data }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS);
    console.log(data)  
    
    const handleSearch = () => {
      RUTA({
        variables: {
          Match,
          Fecha_Inicio,
          Fecha_Fin,
          Idioma_Ruta,
          Tipo_Vehiculo
        }
      });
    };
  
    return (
      <div>
       <div className="form-search-advanced">
           <label>BUSCAR:</label>
        <input placeholder='Buscar por Ciudades, Lugares, Parques, etc' type="text" value={Match} onChange={(e) => setMatch(e.target.value)} />
  
        <label>FECHA INICIO RUTA:</label>
        <input type="date" value={Fecha_Inicio} onChange={(e) => setFecha_Inicio(e.target.value)} />
  
        <label>FECHA FIN RUTA:</label>
        <input type="date" value={Fecha_Fin} onChange={(e) => setFecha_Fin(e.target.value)} />
  
        <label>IDIOMA:</label>
        <select  value={Idioma_Ruta} onChange={(e) => setIdioma_Ruta(e.target.value)} >
        <option value="">Todos los Idiomas</option>
          <option value="Castellano">Castellano</option>
          <option value="Ingles">Ingles</option>
          <option value="Frances">Frances</option>
          <option value="Aleman">Aleman</option>
          </select>
  
        <label>TIPO VEHICULO:</label>
  
        <select value={Tipo_Vehiculo} onChange={(e) => setTipo_Vehiculo(e.target.value)}>
          <option value="">Todos lo Vehiculos</option>
          <option value="Automovil">Automovil</option>
          <option value="Motocicleta">Motocicleta</option>
          <option value="Bicicleta">Bicicleta</option>
          <option value="AutoCaravana">AutoCaravana</option>
          <option value="Caravana">Caravana</option>
          <option value="Canoa">Canoa</option>
           <option value="Kayak">Kayak</option>
        </select>
  
        <button onClick={handleSearch}>Search</button>
  </div>

</div>
*/
/*****************/
