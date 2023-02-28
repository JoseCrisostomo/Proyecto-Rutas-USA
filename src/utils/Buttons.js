import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import {ModalBotonCrearRutaLogeado, ModalNecesitasLogearte} from '../componentes/Modal/Modal'

export const ButtonLog = () => {
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>LOG IN</button>;
  };

  const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        LOG OUT
      </button>
    );
  };

  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
   



export const ModalBotonCrearRuta=()=>{

  const {isAuthenticated} = useAuth0()

return (  
!isAuthenticated ? <ModalNecesitasLogearte/> : <ModalBotonCrearRutaLogeado /> 
 
)

};

