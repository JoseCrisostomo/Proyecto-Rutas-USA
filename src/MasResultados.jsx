
/*
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { BUSCAR_RUTAS_CON_FILTROS } from './Queries';


export function Resultados() {
  const [data, setData] = useState(null);

  const [ { error, loading }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS);

  useEffect(() => {
    const dataJson = sessionStorage.getItem('data');
    const data = JSON.parse(dataJson);
    setData(data);
    sessionStorage.removeItem('data');
  }, []);
  return (
    <div>
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
}


*/





    