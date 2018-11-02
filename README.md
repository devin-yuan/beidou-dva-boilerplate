# beidou-dva-boilerplate

基于beidou和dva搭建的服务端渲染 - 通用脚手架

# Beidou Simple Example

=================

## Install

```bash
$ yarn install
```

## Start

```bash
$ npm start
```

then navigate to [http://127.0.0.1:6001/](http://127.0.0.1:6001/)

## Basic Usage

* add a new page in /client folder, eg. `/client/test.jsx`
* start app: `npm start`
* navigate to [http://127.0.0.1:6001/test](http://127.0.0.1:6001/test)

## 目录结构

```
.beidou-demo
├── app (应用层代码目录)
|   ├── controller
|   ├── middleware
|   ├── service
|   ├── public # 静态资源目录
|   ├── views # 存放模板文件和只在客户端使用的脚本目录文件
|   ├── router
|   ├── router.js # 是应用的路由配置文件，所有路由配置都在此设置，放在同一个文件非常方便通过 url 查找到对应的 controller 代码
├── config (应用配置目录)
|   ├── config.default.js
├── client (客户端代码目录)
└── test (测试目录)
```

## License

[MIT](LICENSE)

