module.exports = {
  entry: './app/Main.jsx',
  output: {
    path: './app',
    filename: '/app/bundle.js'
  },
  devServer: {
    inline: true,
    port: 1337
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
