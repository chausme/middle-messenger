import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { path, __filename, __dirname } from './webpack.common.js';

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
});
