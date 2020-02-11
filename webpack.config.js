const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bunlde.js'
    },
    {
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader' },
                { test: /\.css$/, use:[ 'style-loader', 'css-loader'] }
            ]
        }
    }
    mode: 'development'
}

