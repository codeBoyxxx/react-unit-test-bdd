
npm install @sentry/webpack-plugin @sentry/cli --dev-save

[defaults]
url=https://sentry.io/
org=组织名称
project=项目名称

[auth]
token=你的sentry账号下生成的API Token

创建Release,
sentry-cli releases -o 组织 -p 项目 new production@1.1.0



const SentryCliPlugin = require('@sentry/webpack-plugin')
在plugins:[]里面加入此代码：
new SentryCliPlugin ({
    release: "production@1.1.0",//版本号
    include: path.join(__dirname,'../dist/static/js/'), //需要上传到sentry服务器的资源目录,会自动匹配js 以及map文件
    ignore: ['node_modules', 'webpack.config.js'], //忽略文件目录,当然我们在inlcude中制定了文件路径,这个忽略目录可以不加
    configFile :'.sentryclirc'
}),