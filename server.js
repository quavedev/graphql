import {setup} from 'meteor/swydo:ddp-apollo';

import {makeExecutableSchema} from 'graphql-tools';
import {getSchema, load} from 'graphql-load';

const defaultLog = e => console.error('GraphQL server error', e);

export const startGraphQLServer = ({typeDefs, resolvers, log}) => {
  load({
    typeDefs,
    resolvers,
  });
  const schema = makeExecutableSchema({
    ...getSchema(),
    logger: { log: log || defaultLog },
  });
  setup({schema});
};
