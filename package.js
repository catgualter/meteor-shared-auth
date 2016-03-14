Package.describe({
  summary: "Share login among separate domains. (FlowRouter version)",
  version: "0.1.0",
  name: "catgualter:shared-auth",
  git: "https://github.com/catgualter/meteor-shared-auth.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('kadira:flow-router@2.7.0'); 
  api.use(['kadira:blaze-layout@2.2.0','templating'], 'client');
  api.add_files([
    'lib/routes.js',
    'lib/sharedAuthFrame.html',
    'lib/sharedAuthFrame.js',
    'lib/emptyLayout.html',
    'lib/requestAuth.js'
  ], 'client');
});
