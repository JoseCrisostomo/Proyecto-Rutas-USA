import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Client } from "./Client";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";



const domain=process.env.REACT_APP_AUTH0_DOMAIN
    const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID
console.log(domain, clientId)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


     <BrowserRouter>
     <ApolloProvider  client={Client}> 
  <Auth0Provider

     domain={domain}
   clientId= {clientId}
       authorizationParams={{ 
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
  </ApolloProvider>
  </BrowserRouter>

 
);
 reportWebVitals()