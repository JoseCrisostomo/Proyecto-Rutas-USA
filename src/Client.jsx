
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

   export  const Client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri:process.env.REACT_APP_URI_HASURA,
        headers: {
          'x-hasura-admin-secret':process.env.REACT_APP_HASURA_ADMIN_SECRET
        }
      }),
    });
 
  console.log(process.env.REACT_APP_HASURA_ADMIN_SECRET,process.env.REACT_APP_URI_HASURA)
    