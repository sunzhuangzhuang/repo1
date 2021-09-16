const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack所有配置信息
module.exports = {
  //指定入口文件
  entry: './src/index.ts',
  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    //打包后的文件
    filename: 'bundle.js',
    //告诉webpack不使用箭头函数
    environment:{
      arrowFunction:false,
      const:false
    }
  },
  mode: 'production', // 设置mode
  //指定webpack打包时要使用的模块
  module: {
    //指定加载的规则
    rules: [
      {
        //指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      'ie':'11'
                    },
                    //指定corejs的版本
                    "corejs": "3",
                    //使用core.js的方式
                    "useBuiltIns": "usage" // usage按需加载
                  }
                ]
              ]
            }
          }
          , 'ts-loader'],
        //要排除的文件
        exclude: /node-modules/
      },
      //指定设置less文件处理
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          //引入postcss
          // {
          //   loader:'postcss-loader',
          //   options:{
          //     postcssOptions:{
          //       plugins:[
          //         "postcss-preset-env",
          //         { 
          //           browsers:'last 2 versions'
          //         }
          //       ]
          //     }
          //   }
          // },
          "less-loader"
        ]
      }
    ]
  },
  // //配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title:'自定义title'
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  //用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  }
}