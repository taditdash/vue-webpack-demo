var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV);

    return{
        entry: './src/js/first.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [
                        env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        // Creates `style` nodes from JS strings
                        //'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.s(c|a)ss$/,
                    use: [
                        env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            // Requires sass-loader@^8.0.0
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: require('fibers'),
                                    //indentedSyntax: true // optional
                                },
                            },
                        },
                    ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new VueLoaderPlugin(),
            new VuetifyLoaderPlugin()
        ]
    }
}