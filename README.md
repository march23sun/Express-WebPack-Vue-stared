Express-WebPack-Vue-started
===========================

此專案建立一個Nodejs+Vue，搭配Nodemon、webpack Middleware模組達成前後端皆能即時熱更新的前後端開發環境增加開發的效率。

Express
-------

**使用Express generator建立Express專案**


    $ npm install express-generator -g

    $ express  express-vue-proj
 1. 在根目錄建立server資料夾
 2. 將express-vue-proj/src中的檔案搬移到server資料夾
 3. 修改index.js 佈署 webpackDevMiddleware及webpackHotMiddleware ，並加上是否為開發環境的判斷式

    const  webpack  = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config= require('../webpack.config');
     if(process.env.NODE_ENV !== "production"){
      console.log('webpackHotMiddleware')
        const compiler = webpack(config)
        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            stats: { colors: true },
        }))
        app.use(webpackHotMiddleware(compiler))
    }


Vue
---
**使用Vue CLI建立vue專案**

    $ vue init webpack express-vue-proj-client

 1. 在根目錄建立client資料夾
 2. 將express-vue-proj-client/src中的檔案搬移到client資料夾
 3. 在index.js加上hotClient.subscribe前端才會自動刷新

    if(module.hot) {
        var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
    
        hotClient.subscribe(function (event) {
            if (event.action === 'reload') {
                window.location.reload()
            }
        })
    }

Final
-----
 
Install

     npm intsall

dev

    npm run start
    
    [demo-path] http://localhost:3000
     
build production 

    npm run build
    
    [demo-path] http://localhost:3000/vue (jade views)

Ref
---
 - http://expressjs.com/zh-tw/starter/generator.html
 - http://southerncross.github.io/2016/02/28/setup-express-vue-boilerplate/
 - https://juejin.im/entry/574f95922e958a00683e402d
 - https://medium.com/@savemuse/webpack-%E5%B8%B8%E7%94%A8-plugins-%E4%BB%8B%E7%B4%B9-1505ea01052d
