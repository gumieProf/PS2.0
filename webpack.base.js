const path = require('path');

// 変数化した部分をパラメーターとして渡す
module.exports = ({outputFile, assetFile}) => ({
  entry: {app: './src/index.js'}, 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${outputFile}.js` // 開発と本番で出力結果を変えたい部分を変数化
  },
})