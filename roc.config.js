module.exports = {
  settings: {
    runtime: {
      applicationName: 'CharCreator',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
      template: {
        path: 'src/template'
      },
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
  webpack: require('./webpack.config.js'),
};
