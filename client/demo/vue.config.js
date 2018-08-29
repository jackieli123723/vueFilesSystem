const path = require('path');
const fs = require('fs');

const resolve = dir => {
    return path.join(__dirname, dir);
};

const env = process.env.NODE_ENV || 'development';
fs.writeFileSync(path.join(__dirname, './config/env.js'), `export default '${env}'`);
// 这里需要修改为线上项目存放的路径
// 比如你打包的文件放到服务器的my-app文件夹，域名为a.com，则应改为
// http(s)://a.com/my-app
const BASE_URL = '/';

module.exports = {
    // baseUrl: process.env.OSS_URL ? process.env.OSS_URL : '/print/',
    baseUrl: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/lock'))
            .set('_c', resolve('src/components'))
            .set('_conf', resolve('config'));
    },
    productionSourceMap: false,
    lintOnSave: false,//关闭eslint，
    devServer:{
        open:true,
        port:8888 //不开启配置默认8080
    }
};
