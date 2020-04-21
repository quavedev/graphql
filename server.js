import {setup} from 'meteor/swydo:ddp-apollo';

import {makeExecutableSchema} from 'graphql-tools';
import {getSchema, load} from 'graphql-load';

export const startGraphQLServer = ({typeDefs, resolvers}) => {
  load({
    typeDefs,
    resolvers,
  });
  const schema = makeExecutableSchema({
    ...getSchema(),
    logger: {log: e => console.error('GraphQL server error', e)},
  });
  setup({schema});
};
