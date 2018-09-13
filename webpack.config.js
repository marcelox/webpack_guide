const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
    module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          },
          {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
                 {
                 loader: 'file-loader',
                     options: {
                         outputPath: 'images/'
                     }
                 },
                 {
                 loader: 'image-webpack-loader',
                 }
             ]
          },
          {
              test:/\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                  {
                  loader: 'file-loader',
                      options: {
                        outputPath: 'fonts/'
                      }
                  }
              ]
          }
      ]
    }
};
