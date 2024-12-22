const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Assurez-vous que le point d'entrée est correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      path.join(__dirname, 'public')
    ],
    compress: true,
    port: 9000,
    historyApiFallback: true, // Redirige toutes les requêtes vers index.html
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js'],
    }),
  ],
};