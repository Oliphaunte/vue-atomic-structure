const ExtractTextPlugin   = require('extract-text-webpack-plugin'),
      UglifyJsPlugin      = require('uglifyjs-webpack-plugin');

const merge               = require("webpack-merge"),
      path                = require('path'),
      webpack             = require('webpack');

const BASE_CONFIG         = require("./webpack.base.config");

// Plugins //
const webpackEnv = new webpack.DefinePlugin({
  "process.env": {
    "NODE_ENV": JSON.stringify(process.env.ENV_PROD),
    "BASE_URL": JSON.stringify(process.env.BASE_URL_PROD)
  }
});
const extractSass = new ExtractTextPlugin({
  filename: "index.bundle.[hash].css",
});
const minifyCSS = new webpack.LoaderOptionsPlugin({
  minimize: true,
});
const uglifyJs = new UglifyJsPlugin({
  parallel: 4,
  sourceMap: false,
});

// Rules //
const sassRules = { 
  loader: "sass-loader",
  options: { 
    importer: GlobImporter()
  }
};
const postcssRules = { 
  loader: 'postcss-loader',
  options: {
    config: {
      path: './client/assets/css/postcss.config.js'
    }
  }
};
const cssRules = { 
  test: /\.scss$/, 
  use: extractSass.extract({
    use: [
      "css-loader", 
      postcssRules,
      sassRules
    ],
  })
};

module.exports = merge(BASE_CONFIG, {
  devtool: 'source-map',
  module: {
    rules: [
      cssRules,
    ]
  },
  plugins: [
    extractSass,
    minifyCSS,
    uglifyJs,
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ],
});