exports.config = {
  namespace: 'lc-lib-components',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['library-header', 'library-info', 'library-search'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
