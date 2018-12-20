module.exports = {
    entry:__dirname + '/app/main.js',
    output:{
        path:__dirname + '/public',
        filename:'result.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer:{
        contentBase:'./public',
        inline:true,
        hot:true
    }
};