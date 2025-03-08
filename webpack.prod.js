const path = require('path');
const Terser = require('terser-webpack-plugin');
const Marge = require("webpack-merge");
const conf = require("./webpack.base")
const outputFile = '[name]'; // 出力ファイルを変数化 
const assetFile = '[name]'; //　上に同じく

module.exports = () => Marge.merge(conf({outputFile, assetFile}), {
  mode: 'production', 
  plugins: [],
  optimization: {
      minimizer: [
      new Terser({
          extractComments: 'all',
          terserOptions: {
            compress: {
              drop_console: true,
            },
        },  
      }),
      ],
  },
});

