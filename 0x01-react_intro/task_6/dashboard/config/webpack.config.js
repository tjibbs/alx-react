import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
};
export const mode = 'development';
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      // type: 'asset/resource',
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
};
export const resolve = {
  extensions: ['.*', '.js', '.jsx'],
};
export const devServer = {
  static: './dist',
  compress: true,
  open: true,
  hot: true,
  port: 8564,
};
export const devtool = 'inline-source-map';
export const plugins = [
  new HtmlWebpackPlugin({
    name: 'index.html',
    inject: false,
    template: './dist/index.html',
  }),
];
