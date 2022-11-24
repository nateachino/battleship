const path = require('path')

module.exports ={
    entry: './src/index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    module: {
        rules: [
          {
            test: /\.test.js?$/,
            exclude: ['node_modules'],
            use: ['babel-loader'],
          }
        ]
    }
}