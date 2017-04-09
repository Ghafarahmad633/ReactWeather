var webpack=require('webpack')
module.exports = {
    entry: [

        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        './app/app.jsx',

    ],
    externals:{
        jquery:'jQuery'

    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'JQuery':'jquery'

        })

    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root:__dirname,
        alias:{
            Main:"app/components/Main.jsx",
            Nav:"app/components/Nav.jsx",
            Weather:"app/components/Weather.jsx",
            About:"app/components/About.jsx",
            WeatherForm:"app/components/WeatherForm.jsx",
            WeatherMessege:"app/components/WeatherMesege.jsx",
            Examples:"app/components/Examples.jsx",
            openWeatherMap:"app/api/openWeatherMap.jsx",
            ErrorModal:'app/components/ErrorModal.jsx',
            applicationStyle:'app/style/app.scss',
            bootstrapCSS:'bootstrap/dist/css/bootstrap.css'




        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            }
        ]
    },
    devtool:"cheap-module-eval-source-map"
};
