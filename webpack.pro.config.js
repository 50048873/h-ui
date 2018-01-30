var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    detail1: './src/lib/detail1/index.js',
    progress: './src/lib/progress/index.js',
    hui: './src/lib/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    publicPath: '/dist/',
    filename: '[name].js', //库名
    // 补充
    library: 'hui', // 指定的就是你使用require时的模块名，这里便是require("hui")
    libraryTarget: 'umd', // 会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true  // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  externals: {
      "vue": {
          commonjs: "vue",
          commonjs2: "vue",
          amd: "vue",
          root: "Vue"
      },
      "jquery": {
          commonjs: "jquery",
          commonjs2: "jquery",
          amd: "jquery",
          root: "$"
      }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })/*,
    new ExtractTextPlugin({ // 将css打包成一个文件
      filename: 'vue-flag-list.min.css'
    })*/
  ])
}
