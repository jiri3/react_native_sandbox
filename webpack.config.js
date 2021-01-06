/**
 * @type import('webpack').Configuration
 */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'web', 'index.web.tsx'),
  output: {
    path: path.resolve(__dirname, 'web', 'dist'),
    filename: 'bundle.web.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                jsx: 'react',
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'web'),
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.tsx', '.web.js', '.web.tsx', '.json'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
