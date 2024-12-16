const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'indexOP.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};

