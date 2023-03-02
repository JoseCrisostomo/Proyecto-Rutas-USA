import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../BuscadorDeRutas';
import { SearchAdvancedForm } from '../BusquedaAvanzada'
import { ModalBotonCrearRutas,
   ModalBotonCrearOrganizador, 
   ModalBotonCrearParticipante,
   ModalBotonParticiparRuta} from './Modal/OTRO_MODAL';


export const Header = () => {

  return ( 
  
    <div className="header-1">
      <ModalBotonParticiparRuta/>
      <ModalBotonCrearParticipante/>
     <ModalBotonCrearOrganizador/>
     < ModalBotonCrearRutas />
      <div className="header-2">

        <Link to="/" className="link">
          <button className="fw7 mr1">HOME</button>
        </Link>        

        <Link to="/busqueda_abanzada" className="link">
          <button>BUSQUEDA ABANZADA</button>
        </Link>
    
       </div>
      
          <div>
        <SearchForm/>
        <SearchAdvancedForm/>
       </div> 

      </div>
     
   
  );
 
};



  





/*
import React from 'react';
import { Link } from 'react-router-dom';
//import { SearchForm  } from './BuscadorDeRutas';
export const Header = () => {
  return (
  
   
    <div className="header-1">
      <div className="header-2">
        <Link to="/" className="link">
          <div className="fw7 mr1">Hacker News</div>
        </Link>        
        <Link to="/" className="link">
          new
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="link"
        >
          submit
        </Link>
      </div>
    </div>
    );
};

*/