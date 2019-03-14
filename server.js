const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log(`App is running in ${!process.env.NODE_ENV ? 'developemt' : 'production'} mode.`)

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/profile/:profile', async ctx => {
    await app.render(ctx.req, ctx.res, '/profile', ctx.params)
    ctx.respond = false
  })
    
  router.get('/group/:group', async ctx => {
    await app.render(ctx.req, ctx.res, '/group', ctx.params)
    ctx.respond = false
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    if (ctx.status !== 200) {
        app.render(ctx.req, ctx.res, '/_error')
    }
    await next()
  }).use(router.routes()).listen(80, () => console.log('Go to localhost, bro'))
})