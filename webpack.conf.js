const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './tscompile/ng-add/ng-add.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['schematics-utilities']
    })
  ],
  // resolve: {
  //   modules: [
  //     "node_modules",
  //     path.resolve(__dirname, "src")
  //   ]
  // },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: 'src/collection.json',
          to: 'collection.json',
          toType: 'file'
        },
        {
          from: 'src/dockerize/files',
          to: './files',
          toType: 'dir'
        }
      ],
      {}
    )
  ]
};
