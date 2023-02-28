import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { BUSCAR_RUTAS_CON_FILTROS } from './Queries'



export const BuscadorConFiltros = () => {
  const [Edad_Maxima, setEdad_Maxima] = useState('');
  const [Edad_Minima, setEdad_Minima] = useState('');
  const [Lugar, setLugar] = useState('');
  const [Fecha_Inicio, setFecha_Inicio]=useState('')
  const [Fecha_Fin, setFecha_Fin]=useState('')
  const [Idioma_Ruta, setIdioma_Ruta] = useState('');
  const [Tipo_Vehiculo, setTipo_Vehiculo] = useState('');

  const [BUSCAR_FILTRANDO_RUTAS, { data, loading, error }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS)
    const handleSubmit = event => {
        event.preventDefault();
        BUSCAR_FILTRANDO_RUTAS({ variables:[  
             { Edad_Maxima: `${Edad_Maxima}`}, 
             { Edad_Minima: `${Edad_Minima}`},
             { Lugar: `${Lugar}` },
             { Fecha_Inicio: `${Fecha_Inicio}` },
             {Fecha_Fin: `${Fecha_Fin}` },
             { Idioma_Ruta: `${Idioma_Ruta}` },
             { Tipo_Vehiculo: `${Tipo_Vehiculo}` }
]
            });
        event.target.reset()
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Edad Maxima
          <input
            type="number"
            value={Edad_Maxima}
            onChange={e => setEdad_Maxima(e.target.value)}
          />
        </label>
        <label>
          Edad Minima
          <input
            type="number"
            value={Edad_Minima}
            onChange={e => setEdad_Minima(e.target.value)}
          />
        </label>
        <label>
          Lugar
          <input
            type="text"
            value={Lugar}
            onChange={e => setLugar(e.target.value)}
          />
        </label>
        <label>
          Idioma Ruta
          <input
            type="text"
            value={Idioma_Ruta}
            onChange={e => setIdioma_Ruta(e.target.value)}
          />
        </label>
        <label>
          Tipo Vehiculo
          <input
            type="text"
            value={Tipo_Vehiculo}
            onChange={e => setTipo_Vehiculo(e.target.value)}
          />
        </label>

        <label>
        Fecha Inicio
          <input
            type="text"
            value={Fecha_Inicio}
            onChange={e => setFecha_Inicio(e.target.value)}
          />
        </label>

        <label>
        Fecha Fin
          <input
            type="text"
            value={Fecha_Fin}
            onChange={e => setFecha_Fin(e.target.value)}
          />
        </label>

      </form>
      <ul>
        {data.BUSCAR_FILTRANDO_RUTAS.map(result => (
          <li key={result.id}>
            Nombre: {result.nombre} | Lugar: {result.lugar} | Edad Maxima: {result.edad_maxima} | Edad Minima: {result.edad_minima} | Idioma Ruta: {result.idioma_ruta} | Tipo Vehiculo: {result.tipo_vehiculo}
          </li>
        ))}
      </ul>
    </div>
  );
};

