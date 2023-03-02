
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { BUSCAR_RUTAS_CON_FILTROS  } from './Queries'

import "./BuscadorDeRutas.css"

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.RUTA.map((result) => (
            
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
      )}
    </div>
  );
};



/*
Se utiliza el hook useLazyQuery de Apollo Client para realizar
una consulta GraphQL que recupere los resultados de búsqueda en función de los 
criterios especificados por el usuario en el formulario. 
Los campos del formulario, como la consulta de búsqueda, la fecha de inicio y 
fin, la ubicación y la categoría, se almacenan en el estado local del componente
 usando el hook useState.

La consulta GraphQL SEARCH_QUERY se define en otro archivo y se importa en este 
componente. La consulta utiliza los argumentos especificados en el formulario 
para filtrar los resultados de búsqueda. 
En este ejemplo, los resultados de búsqueda se muestran en una lista simple, 
pero en una aplicación real, podrías personalizar la presentación de los 
resultados según tus necesidades.
*/