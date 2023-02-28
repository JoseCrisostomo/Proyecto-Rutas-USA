import React, { useState } from "react";
import { ButtonLog } from "../../utils/Buttons";
import "./Modal.css";
import { useAuth0 } from "@auth0/auth0-react";



export const ModalBotonCrearRutas = () => {

    const NameButton = 'CREAR RUTAS'

    const { user, isAuthenticated } = useAuth0()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal')
          : document.body.classList.remove('active-modal')


    return (
        <>

            <button
                onClick={toggleModal}
                className={ isAuthenticated ? "modal-on" : "modal-off"}>
                {NameButton}
            </button>
            <div>
                {isAuthenticated ?
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola {user.name}, ya puedes acceder a {NameButton}</h2>

                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>)
                    :
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola, necesitas logearte para {NameButton}</h2>
                                <ButtonLog />
                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

        ;
}


export const ModalBotonCrearOrganizador = () => {

    const NameButton = 'CREAR ORGANIZADOR';

    const { user, isAuthenticated } = useAuth0()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal')
          : document.body.classList.remove('active-modal')


    return (
        <>

            <button
                onClick={toggleModal}
                className={ isAuthenticated ? "modal-on" : "modal-off"}>
                {NameButton}
            </button>
            <div>
                {isAuthenticated ?
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola {user.name}, ya puedes acceder a {NameButton}</h2>

                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>)
                    :
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola, necesitas logearte para {NameButton}</h2>
                                <ButtonLog />
                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

        ;
}



export const ModalBotonCrearParticipante = () => {

    const NameButton = 'CREAR PARTICIPANTE';

    const { user, isAuthenticated } = useAuth0()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal')
          : document.body.classList.remove('active-modal')


    return (
        <>

            <button
                onClick={toggleModal}
                className={ isAuthenticated ? "modal-on" : "modal-off"}>
                {NameButton}
            </button>
            <div>
                {isAuthenticated ?
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola {user.name}, ya puedes acceder a {NameButton}</h2>

                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>)
                    :
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola, necesitas logearte para {NameButton}</h2>
                                <ButtonLog />
                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

        ;
}



export const ModalBotonParticiparRuta = () => {

    const NameButton = 'PARTICIPAR EN RUTA';

    const { user, isAuthenticated } = useAuth0()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal')
          : document.body.classList.remove('active-modal')

console.log(isAuthenticated)
    return (
        <>

            <button
                onClick={toggleModal}
                className={ isAuthenticated ? "modal-on" : "modal-off"}>
                {NameButton}
            </button>
            <div>
                {isAuthenticated ?
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola {user.name}, ya puedes acceder a {NameButton}</h2>

                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>)
                    :
                    modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Hola, necesitas logearte para {NameButton}</h2>
                                <ButtonLog />
                                <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

        ;
}