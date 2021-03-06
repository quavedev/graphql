Package.describe({
  name: 'quave:graphql',
  version: '1.0.0',
  summary: 'Utility package to create GraphQL setup in a standard way',
  git: 'https://github.com/quavedev/graphql',
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  api.use('ecmascript');
  api.use('swydo:ddp-apollo@3.0.0', 'server');

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
});
