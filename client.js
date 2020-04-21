import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {onError} from 'apollo-link-error';
import {DDPLink} from 'apollo-link-ddp';

const link = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path, ...rest}) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        rest
      )
    );
  }

  if (networkError) console.error('[Network error]: ', networkError);
});

export const startGraphQLClient = ({connectToDevTools = false} = {}) => new ApolloClient({
  link: link.concat(new DDPLink()),
  cache: new InMemoryCache(),
  connectToDevTools,
});
