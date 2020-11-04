const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')

let app = new Koa()
app.use(static())