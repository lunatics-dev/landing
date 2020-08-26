import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const webpackConfig = (env: any): Configuration => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.png'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      containers: path.resolve(__dirname, './src/containers/'),
      config: path.resolve(__dirname, './src/config/'),
      images: path.resolve(__dirname, './src/images/'),
      pages: path.resolve(__dirname, './src/pages/'),
      utils: path.resolve(__dirname, './src/utils/'),
      mocks: path.resolve(__dirname, './src/mocks/'),
      assets: path.resolve(__dirname, './src/assets/'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css?$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'process.env.VERSION': JSON.stringify(require('./package.json').version),
    }),
  ],
});

export default webpackConfig;