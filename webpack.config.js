module.exports = {
  entry: './src/js/index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },{
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  devServer: {
    contentBase : './dist'
  },
  resolve : {
    alias : {
      'vue' : 'vue/dist/vue.esm.js'
    }
  }
}