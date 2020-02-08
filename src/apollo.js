import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import { store } from './redux';
import { meActions } from './redux/reducers/me';

const httpLink = createHttpLink({ uri: 'http://localhost:3000/graphql' });

const middlewareLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const { me } = store.getState();
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-token': `Admin ${me.access_token}`,
      'x-refresh-token': `Admin ${me.refresh_token}`,
      'x-client-id': me.client_id,
      'x-provider': me.provider
    }
  }));

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) =>
  forward(operation).map(response => {
    const {
      response: { headers }
    } = operation.getContext();
    if (headers) {
      const token = headers.get('x-token');
      const refreshToken = headers.get('x-refresh-token');

      if (token) {
        store.dispatch(meActions.customSet('access_token', token));
      }

      if (refreshToken) {
        store.dispatch(meActions.customSet('refresh_token', refreshToken));
      }
    }

    return response;
  })
);

const httpLinkWithMiddleware = afterwareLink.concat(middlewareLink.concat(httpLink));

export default new ApolloClient({
  link: httpLinkWithMiddleware,
  cache: new InMemoryCache()
});
