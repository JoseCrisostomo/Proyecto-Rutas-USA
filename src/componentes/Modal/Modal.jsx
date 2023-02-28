import React, { useState } from "react";
import { ButtonLog } from "../../utils/Buttons";
import "./Modal.css";
import { useAuth0 } from "@auth0/auth0-react";


export const ModalBotonCrearRutaLogeado = () => {
    const NameButton= 'CREAR RUTAS'
    const {user} = useAuth0()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button 
        onClick={toggleModal} 
        className="btn-modal">
        { NameButton }
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hola {user.name}, ya puedes crear una ruta</h2>
          
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        </>
    );
  }






 export const ModalNecesitasLogearte = () => {
   
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
         CREAR RUTA
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hola, necesitas logearte para crear una ruta</h2>
          <ButtonLog/>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        </>
    );
  }


