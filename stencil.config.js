exports.config = {
  namespace: 'lc-lib-components',
  generateDistribution: true,
  bundles: [
    { components: ['library-header', 'library-info', 'library-search'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
