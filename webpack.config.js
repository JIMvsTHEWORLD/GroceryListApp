const path = require('path');

module.exports = {
    entry: './client/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
            },
            {
              test: /\.s[ac]ss$/i,
              exclude: /node_modules/,
              use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' },
              ]
            }
        ]
    },
}