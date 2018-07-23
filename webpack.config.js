module.exports = {
    entry: [
        "./src/index.js",
        './src/styles/main.scss'
        ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react','stage-1']
                }
            },{
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },        // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                ]
            }
        ]
    }
  };
