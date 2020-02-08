import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import RootViews from './views';
import client from './apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RootViews />
      </div>
    </ApolloProvider>
  );
}

export default App;
