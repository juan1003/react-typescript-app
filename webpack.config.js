const path  = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/
        },{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}