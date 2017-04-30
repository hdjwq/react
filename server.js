/**
 * Created by dongjiehe on 2017/4/30.
 */
var app=require('express')();
var webpack=require('webpack');
var webpackdev=require('webpack-dev-middleware');
var webpackhot=require('webpack-hot-middleware');
var path=require('path');
var dev=require('./dev');
dev.push('dev');
var webpackconfig=require('./webpack.config.js');
var fs=require('fs');
var cheerio=require('cheerio');
var comfir=webpack(webpackconfig);
app.use(webpackdev(comfir,{
    historyApiFallback: true,
    noInfo: true,
    publicPath: webpackconfig.output.publicPath,
    headers: { "X-Custom-Header": "yes" },
    stats: {
        colors: true
    }
}))

app.use(webpackhot(comfir));

app.get('*',function (req,res) {
    fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function (err,data) {
         var $=cheerio.load(data);
         var body=$('body');
         var script=$('<script src="/js/app.js"></script>')
        body.append(script);
         res.send($.html())
    })
})

app.listen('8080',function (err) {
    if (err){
        console.log(err)
    }else {
        console.log('请打开http://localhost:8080')
    }
})