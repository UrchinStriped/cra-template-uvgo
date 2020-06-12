module.exports = {
  babel: {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-transform-spread'],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      ['@babel/plugin-proposal-class-properties', { 'loose': true }],
      ['module-resolver', {
        'alias': {
          '~': './src',
        },
      },
      ]
    ],
    loaderOptions: babelLoaderOptions => babelLoaderOptions,
  },
  jest: {
    configure: { 'coverageProvider': 'v8' },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
  }
};
