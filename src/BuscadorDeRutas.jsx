import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { RUTAS } from './Queries'

import { BUSCAR_RUTAS_CON_FILTROS } from './Queries'

import './BuscadorDeRutas.css'



export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [buscar_rutas, { data, loading, error }] = useLazyQuery(RUTAS);
   console.log(data)  

   
  const handleSubmit = event => {
    event.preventDefault();
    buscar_rutas({ variables: { match: `${searchTerm}` } });
    event.target.reset()
  };

  return (

  <>

    
      <button className={visibility ? 'boton_1_visible' : 'boton_1_oculto'} onClick={() => setVisibility(!visibility)} >
      {visibility === false
        ? 'ABRIR BUSCADOR'
        : 'CERRAR BUSCADOR'}
        </button>
  
    <div >

        <form onSubmit={handleSubmit}>
          <div className={visibility ? 'visible' : 'oculto'}>
          <input className="search_box"
            placeholder="buscar rutas"
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
             
          <button className="search_button" title='BUSCAR' type="submit">Search</button>
          </div> 
          </form>
          {loading && <p>Loading...</p>}

          {error && <p>Error :(</p>}

          

{data ? 
  
  data && data.buscar_rutas.map(result => (
            <div className="card-container" key={result.Id_Ruta}>
              <p>{result.Id_Ruta}</p>
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

              <div className="card-images">
                <img src={result.Imagen_Ruta_1} alt={"hola"} />
                <img src={result.Imagen_Ruta_2} alt={"hola"} />
                <img src={result.Imagen_Ruta_3} alt={"hola"} />
                <img src={result.Imagen_Ruta_4} alt={"hola"} />
                <img src={result.Imagen_Ruta_5} alt={"hola"} />
              </div>
            </div>
            
          ) 
          )
        :
       
<h2>NO HAY RESULTADOS</h2>
      
          }
      
      </div>
      </>  )
        };
 


export const SearchFilter = () => {

  const [searchEdadMinima, setSearchEdadMinima] = useState('');
  const [searchEdadMaxima, setSearchEdadMaxima] = useState('');
  const [searchLugar, setSearchLugar] = useState('');
  const [searchFechaInicio, setSearchFechaInicio] = useState('')
  const [searchFechaFin, setSearchFechaFin] = useState('')
  const [searchIdiomaRuta, setSearchIdiomaRuta] = useState('')
  const [searchTipoVehiculo, setSearchTipoVehiculo] = useState('')


  const [BUSCAR_FILTRANDO_RUTAS, { data, loading, error }] = useLazyQuery(BUSCAR_RUTAS_CON_FILTROS);
console.log(data)  
  const handleSubmitEdadMaxima = event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({

      variables: { Edad_Maxima: `${searchEdadMaxima}}`}
    
    });
    event.target.reset()
  };
    

  const handleSubmitEdadMinima= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({

      variables: { Edad_Minima: `${searchEdadMinima}`}
  
    });
    event.target.reset()
  };

  const handleSubmitLugar= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({
      
      variables: { Lugar: `${searchLugar}`}
  
    });
    event.target.reset()
  };

  const handleSubmitFechaInicio= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({
      
      variables: { Fecha_Inicio: `${searchFechaInicio}`}
  
    });
    event.target.reset()
  };

  const handleSubmitFechaFin= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({
      
      variables: { Fecha_Fin: `${searchFechaFin}`}
  
    });
    event.target.reset()
  };

  const handleSubmitIdiomaRuta= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({
      
      variables: { Idioma_Ruta: `${searchIdiomaRuta}`}
  
    });
    event.target.reset()
  };

  const handleSubmitTipoVehiculo= event => {
    event.preventDefault();
    BUSCAR_FILTRANDO_RUTAS({
      
      variables: { Tipo_Vehiculo: `${searchTipoVehiculo}`}
  
    });
    event.target.reset()
  };


  return (

  <>
        <form >
         <div className='search-filter' onSubmit={handleSubmitEdadMinima}>
          <input className="search_box"
            placeholder="Buscar por Edad Minima"
            type="search"
            value={searchEdadMinima}
            onChange={e =>  setSearchEdadMinima(e.target.value)} />
            </div>

            <div className='search-filter' onSubmit={handleSubmitEdadMaxima}>
          <input className="search_box"
            placeholder="Buscar por Edad Maxima"
            type="search"
            value={searchEdadMaxima}
            onChange={e =>  setSearchEdadMaxima(e.target.value)} />
            </div>

            <div className='search-filter' onSubmit={handleSubmitLugar}>
          <input className="search_box"
            placeholder="Buscar por Lugar"
            type="search"
            value={searchLugar}
            onChange={e =>  setSearchLugar(e.target.value)} />
            </div>

            <div className='search-filter' onSubmit={handleSubmitFechaInicio}>
          <input className="search_box"
            placeholder="Buscar por Fecha de Inicio"
            type="search"
            value={searchFechaInicio}
            onChange={e =>  setSearchFechaInicio(e.target.value)} />
            </div>

            <div className='search-filter'onSubmit={handleSubmitFechaFin}> 
          <input className="search_box"
            placeholder="Buscar por Fecha de Fin"
            type="search"
            value={searchFechaFin}
            onChange={e =>  setSearchFechaFin(e.target.value)} />
            </div>


            <div className='search-filter' onSubmit={handleSubmitIdiomaRuta}>
          <input className="search_box"
            placeholder="Buscar por Idioma"
            type="search"
            value={searchIdiomaRuta}
            onChange={e =>  setSearchIdiomaRuta(e.target.value)} />
            </div>

            <div className='search-filter' onSubmit={handleSubmitTipoVehiculo}>
          <input className="search_box"
            placeholder="Buscar por Tipo de Vehiculo"
            type="search"
            value={searchTipoVehiculo}
            onChange={e =>  setSearchTipoVehiculo(e.target.value)} />
            </div>


          <button className="search_button" title='BUSCAR' type="submit">Search</button>
         
          {loading && <p>Loading...</p>}

          {error && <p>Error :(</p>}
{ data ?
      data && data.BUSCAR_FILTRANDO_RUTAS.map(result => (
            <div className="card-container" key={result.Id_Ruta}>
              <p>{result.Id_Ruta}</p>
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

              <div className="card-images">
                <img src={result.Imagen_Ruta_1} alt={"hola"} />
                <img src={result.Imagen_Ruta_2} alt={"hola"} />
                <img src={result.Imagen_Ruta_3} alt={"hola"} />
                <img src={result.Imagen_Ruta_4} alt={"hola"} />
                <img src={result.Imagen_Ruta_5} alt={"hola"} />
              </div>
            </div>
          ))
        :
        null}
        </form>
      
      </>  )
        };


     
    /*
        
    export const SearchFilter2=() => { 
       


const SearchMyFilter = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const handleSearch = async () => {
    const query = `
      query {
        usuario(
          nombre: "${inputs.name}",
          apellido: "${inputs.lastName}",
          edad: ${inputs.age},
          ciudad: "${inputs.city}"
        ) {
          nombre
          apellido
          edad
          ciudad
        }
      }
    `;
    const { data } = await axios.post('https://rutas-por-usa.hasura.app/v1/graphql', { query });
    console.log(data);
  }

  return (
    <>  
    <div>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="text" name="lastName" onChange={handleInputChange} />
      <input type="number" name="age" onChange={handleInputChange} />
      <input type="text" name="city" onChange={handleInputChange} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );



              <div>
                {filteredData.map((item) => (
                  <div key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.gender}</p>
                  </div>
                ))}
              </div>
         </>   
          );
       }
    }
    */ 
