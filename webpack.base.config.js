require('dotenv').config()

const HtmlWebpackPlugin   = require('html-webpack-plugin'),
      PrerenderSpaPlugin  = require('prerender-spa-plugin'),
      GlobImporter        = require('node-sass-glob-importer');

const path                = require('path'),
      webpack             = require('webpack');

// Plugins //
const extractHtml = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './client/app.html'
});
// const prerenderSpa = new PrerenderSpaPlugin(
//   path.join(__dirname, 'dist'),
  
//   // Routes to pre-render
//   [ '/', '/about', '/example' ]
// );

// Rules //
const vueRules = { 
  test: /\.vue$/,
  loader: 'vue-loader',
};
const jsRules  = { 
  test: /\.js$/, 
  use: 'babel-loader',
  exclude: /node_modules/
};
const fileRules = {
  test: /\.(png|jpg|gif|svg|otf|eot|ttf|woff)$/,
  loader: 'file-loader',
  options: {
    publicPath: "./",
    outputPath: './assets/'
  }
};

module.exports = {
  entry: ['./client/app.js', './client/assets/css/app.scss'],
  output: {
    filename: 'index.[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      vueRules,
      jsRules,
      fileRules,
    ]
  },
  plugins: [
    extractHtml,
    // prerenderSpa
  ],
  resolve: {
    extensions: [ ".js", ".json", ".vue" ],
    alias: { '@': path.join(__dirname) }
  }
};