
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { BUSCAR_RUTAS_CON_FILTROS  } from './Queries'

import "./BuscadorDeRutas.css"

export const SearchAdvancedForm = () => {
  const [search, setSearch] = useState('');
  const [Fecha_Inicio_Ruta, setFecha_Inicio] = useState('');
  const [Fecha_Final_Ruta, setFecha_Final_Ruta] = useState('');
  const [Idioma_Ruta, setIdioma_Ruta] = useState('');
  const [Tipo_Vehiculo, setTipo_Vehiculo] = useState('');

  const [buscar_rutas, { loading, error, data }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS);
  console.log(data)  
  
  const handleSearch = () => {
    buscar_rutas({
      variables: {
        search,
        Fecha_Inicio_Ruta,
        Fecha_Final_Ruta,
        Idioma_Ruta,
        Tipo_Vehiculo
      }
    });
  };

  return (
    <div>
     <div className="form-search-advanced">
         <label>BUSCAR:</label>
      <input placeholder='Buscar Ciudades, Lugares, Parques, etc' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

      <label>FECHA INICIO RUTA:</label>
      <input type="date" value={Fecha_Inicio_Ruta} onChange={(e) => setFecha_Inicio(e.target.value)} />

      <label>FECHA FIN RUTA:</label>
      <input type="date" value={Fecha_Final_Ruta} onChange={(e) => setFecha_Final_Ruta(e.target.value)} />

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
        <ul className='contenedor_cards'>
          {data.buscar_rutas.map((result) => (
            
            <div className="card-container" key={result.Id_Ruta}>
            <h4>{result.Id_Ruta}</h4>
            <h2>{result.Nombre_Ruta}</h2>
            <h3>{result.Descripcion_Ruta}</h3>
            <h2>{result.Tipo_Vehiculo_1}</h2>
            <h2>{result.Tipo_Vehiculo_2}</h2>
            <h2>{result.Tipo_Vehiculo_3}</h2>
            <h2>{result.Lugar_Salida}</h2>
            <h2>{result.Lugar_Paso_1}</h2>
            <h2>{result.Lugar_Paso_2}</h2>
            <h2>{result.Lugar_Paso_3}</h2>
            <h2>{result.Lugar_Paso_4}</h2>
            <h2>{result.Lugar_Paso_5}</h2>
            <h2>{result.Lugar_Llegada}</h2>

</div>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};


