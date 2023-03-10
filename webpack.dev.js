import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { path, __filename, __dirname } from './webpack.common.js';
import webpack from 'webpack';
import dotenv from 'dotenv';

const env = dotenv.config({
    path: path.join(__dirname, '.env'),
});

export default merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [new webpack.EnvironmentPlugin(Object.keys(env.parsed || {}))],
});
